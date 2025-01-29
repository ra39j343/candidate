import { connectDB } from '../lib/db'
import { User } from '../models/user'
import mongoose from 'mongoose'

// Add this to suppress the deprecation warning
mongoose.set('strictQuery', false)

async function createAdmin() {
  try {
    await connectDB()
    
    // Delete existing admin if exists (just to be safe)
    await User.deleteOne({ username: 'admin' })
    console.log('🧹 Cleaned up any existing admin user')

    // Create new admin user
    const admin = new User({
      username: 'admin',
      password: 'admin123',
      inviteCode: 'ADMIN' + Math.random().toString(36).substring(2, 8)
    })

    await admin.save()
    console.log('\n✅ Created admin user:')
    console.log({
      username: admin.username,
      id: admin._id.toString(),
      inviteCode: admin.inviteCode
    })
    console.log('\nYou can login with:')
    console.log('Username: admin')
    console.log('Password: admin123')

  } catch (error) {
    console.error('❌ Error:', error)
  } finally {
    await mongoose.connection.close()
    process.exit(0)
  }
}

createAdmin() 