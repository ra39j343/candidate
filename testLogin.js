const axios = require('axios');

async function testLogin() {
    try {
        const response = await axios.post('http://localhost:3000/auth/login', {
            username: 'admin',
            password: 'admin123'
        });
        console.log('Login response:', response.data);
    } catch (error) {
        console.log('Error response:', error.response?.data);
        console.log('Request sent:', {
            username: 'admin',
            password: 'admin123'
        });
    }
}

testLogin(); 