import NextAuth, { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectDB } from '@/lib/db'
import { User } from '@/models/user'
import bcrypt from 'bcrypt'
import { JWT } from 'next-auth/jwt'
import { DefaultUser } from 'next-auth'
import { Session } from 'next-auth'
import mongoose from 'mongoose'

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          console.log('Auth Debug: Starting authorization...')
          console.log('Auth Debug: MongoDB URI:', process.env.MONGODB_URI?.substring(0, 20) + '...')
          
          await connectDB()
          console.log('Auth Debug: DB Connected')
          console.log('Auth Debug: Current connection state:', mongoose.connection.readyState)
          
          // Log all users in the database
          const allUsers = await User.find({})
          console.log('Auth Debug: All users in DB:', allUsers.map(u => ({
            email: u.email,
            role: u.role,
            id: u._id.toString()
          })))
          
          const user = await User.findOne({ email: credentials?.email })
          console.log('Auth Debug: User found:', !!user)
          
          if (!user) {
            console.log('Auth Debug: No user found')
            return null
          }

          console.log('Auth Debug: Password check:', {
            providedPassword: credentials?.password,
            storedHashLength: user.password.length,
            storedHashStart: user.password.substring(0, 10) + '...'
          })

          const isValid = await bcrypt.compare(
            credentials?.password || '',
            user.password
          )
          console.log('Auth Debug: Password validation result:', isValid)

          if (!isValid) {
            console.log('Auth Debug: Invalid password')
            return null
          }

          console.log('Auth Debug: Login successful')
          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            role: user.role
          }
        } catch (error) {
          console.error('Auth Debug: Error during authorization:', error)
          return null
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/login',
    error: '/auth/login'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (session?.user) {
        (session.user as any).role = token.role
      }
      return session
    }
  },
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === 'development',
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST } 