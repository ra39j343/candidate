import axios from 'axios'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '.env') })

const BASE_URL = process.env.NEXTAUTH_URL || 'http://localhost:3000'

async function testAdminLogin() {
  const credentials = {
    email: 'verdyanradik@gmail.com',
    password: 'admin123'
  }

  try {
    console.log('Debug: Starting login test...')
    console.log('Debug: Using URL:', BASE_URL)
    console.log('Debug: Attempting login with email:', credentials.email)
    
    const response = await axios.post(`${BASE_URL}/api/auth/callback/credentials`, credentials)
    console.log('Debug: Login response:', response.data)
  } catch (error) {
    console.error('Debug: Login failed')
    console.error('Debug: Error status:', error.response?.status)
    console.error('Debug: Error data:', error.response?.data)
    console.error('Debug: Full error:', error)
  }
}

testAdminLogin()