import NextAuth, { AuthOptions, SessionStrategy } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectDB } from '@/lib/db'
import { User } from '@/models/user'
import bcrypt from 'bcrypt'
import { JWT } from 'next-auth/jwt'
import { DefaultUser } from 'next-auth'
import { Session } from 'next-auth'

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          console.log('Connecting to DB...')
          await connectDB()
          console.log('DB Connected')
          
          const user = await User.findOne({ email: credentials?.email })
          console.log('User search result:', user ? 'Found' : 'Not found')
          
          if (!user) {
            return null
          }

          const isValid = await bcrypt.compare(
            credentials?.password || '',
            user.password
          )
          console.log('Password validation:', isValid)

          if (!isValid) {
            return null
          }

          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            role: user.role
          }
        } catch (error) {
          console.error('Auth error:', error)
          return null
        }
      }
    })
  ],
  session: {
    strategy: 'jwt' as SessionStrategy
  },
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    async jwt({ 
      token, 
      user 
    }: { 
      token: JWT; 
      user?: DefaultUser & { 
        role?: string;
        id: string;
      }
    }) {
      if (user) {
        token.role = user.role
        token.id = user.id
      }
      return token
    },
    async session({ 
      session, 
      token 
    }: { 
      session: Session;
      token: JWT & {
        role?: string;
        username?: string;
      }
    }) {
      if (session?.user) {
        session.user.role = token.role as string
        session.user.id = token.id as string
        session.user.name = token.username as string
      }
      return session
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST } 