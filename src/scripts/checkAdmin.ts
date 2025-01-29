import { connectDB } from '../lib/db'
import { User } from '../models/user'

async function checkAdmin() {
  try {
    await connectDB()
    
    // Check for existing admin
    const existingAdmin = await User.findOne({ username: 'admin' })
    
    if (existingAdmin) {
      console.log('✅ Admin user exists:', {
        username: existingAdmin.username,
        id: existingAdmin._id.toString(),
        createdAt: existingAdmin.createdAt
      })
      console.log('\nYou can login with:')
      console.log('Username: admin')
      console.log('Password: admin123')
    } else {
      console.log('❌ No admin user found')
      console.log('Run create-admin script to create one')
    }

  } catch (error) {
    console.error('Error:', error)
  } finally {
    process.exit(0)
  }
}

checkAdmin() 