import dotenv from 'dotenv'
import path from 'path'
import { connectDB } from '@/lib/db'
import { User } from '@/models/user'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'

// Load environment variables from the root .env file
dotenv.config({ path: path.resolve(process.cwd(), '.env') })

async function createProdAdmin() {
  try {
    // Verify environment variables are loaded
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables')
    }
    
    console.log('Attempting to connect to MongoDB...')
    console.log('Using URI:', process.env.MONGODB_URI.substring(0, 20) + '...')
    
    await connectDB()
    console.log('Connected to production database')

    const email = 'verdyanradik@gmail.com'    // Replace with your email
    const password = 'admin123'               // Replace with your desired password
    
    // Check if admin exists
    const existingAdmin = await User.findOne({ email })
    if (existingAdmin) {
      console.log('Admin exists, updating password...')
      
      // Update password
      const hashedPassword = await bcrypt.hash(password, 10)
      await User.updateOne(
        { email },
        { 
          $set: { 
            password: hashedPassword,
            role: 'admin',
            name: 'Admin User'
          }
        }
      )
      console.log('Admin password updated successfully')
    } else {
      // Create new admin user
      const hashedPassword = await bcrypt.hash(password, 10)
      const admin = new User({
        email,
        password: hashedPassword,
        role: 'admin',
        name: 'Admin User'
      })
      await admin.save()
      console.log('Admin user created successfully')
    }
  } catch (error) {
    console.error('Error:', error)
  } finally {
    await mongoose.connection.close()
    process.exit(0)
  }
}

createProdAdmin() 