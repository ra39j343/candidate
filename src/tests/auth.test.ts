import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

async function testNextAuth() {
  try {
    // Test 1: Login as admin
    console.log('📝 Test 1: Admin Login')
    const loginResponse = await axios.post(`${BASE_URL}/api/auth/callback/credentials`, {
      username: 'admin',
      password: 'admin123'
    })
    console.log('✅ Admin login successful:', loginResponse.data)

    // Test 2: Try invalid login
    console.log('\n📝 Test 2: Invalid Login')
    try {
      await axios.post(`${BASE_URL}/api/auth/callback/credentials`, {
        username: 'admin',
        password: 'wrongpass'
      })
    } catch (error) {
      console.log('✅ Invalid login properly rejected')
    }

  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message)
  }
}

testNextAuth() 