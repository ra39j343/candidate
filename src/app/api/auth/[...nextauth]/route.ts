import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectDB } from '@/lib/db'
import { User as IUser } from '@/models/user'
import bcrypt from 'bcrypt'
import { JWT } from 'next-auth/jwt'
import { User } from '@/models/user'
import { DefaultUser } from 'next-auth'
import { Session } from 'next-auth'

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error('Invalid credentials')
        }

        await connectDB()

        const user = await User.findOne({ username: credentials.username })
        if (!user) {
          throw new Error('Invalid credentials')
        }

        // For admin user with plain text password
        if (user.username === 'admin' && credentials.password === user.password) {
          return {
            id: user._id.toString(),
            username: user.username,
            role: user.role || 'admin'
          }
        }

        // For other users with hashed passwords
        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isPasswordValid) {
          throw new Error('Invalid credentials')
        }

        return {
          id: user._id.toString(),
          username: user.username,
          role: user.role
        }
      }
    })
  ],
  session: {
    strategy: 'jwt'
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