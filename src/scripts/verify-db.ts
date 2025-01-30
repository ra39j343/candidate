import dotenv from 'dotenv'
import path from 'path'
import { connectDB } from '@/lib/db'
import { User } from '@/models/user'
import mongoose from 'mongoose'

// Load environment variables from the root .env file
dotenv.config({ path: path.resolve(process.cwd(), '.env') })

async function verifyDatabase() {
  try {
    console.log('Verifying database connection...')
    
    // Verify env variable is loaded
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI environment variable is not set')
    }
    
    console.log('MongoDB URI:', process.env.MONGODB_URI.substring(0, 20) + '...')
    
    await connectDB()
    console.log('Connected to database')
    
    const users = await User.find({})
    console.log('\nUsers in database:', users.map(u => ({
      email: u.email,
      role: u.role,
      id: u._id.toString()
    })))
    
  } catch (error) {
    console.error('Error:', error)
  } finally {
    await mongoose.connection.close()
    process.exit(0)
  }
}

verifyDatabase() 