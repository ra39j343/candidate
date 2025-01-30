import axios from 'axios'
import dotenv from 'dotenv'
import path from 'path'

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env') })

const BASE_URL = process.env.NEXTAUTH_URL || 'http://localhost:3000'

async function testAdminLogin() {
  try {
    console.log('Testing admin login...')
    console.log('Using URL:', BASE_URL)
    
    const response = await axios.post(`${BASE_URL}/api/auth/callback/credentials`, {
      email: 'verdyanradik@gmail.com',
      password: 'admin123'
    })
    console.log('Login successful:', response.data)
  } catch (error) {
    console.error('Login failed:', error.response?.data || error.message)
  }
}

testAdminLogin() 