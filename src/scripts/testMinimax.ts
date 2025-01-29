const dotenv = require('dotenv')
const fetch = require('node-fetch')
dotenv.config({ path: '.env.local' })

async function testMinimaxAPI() {
  console.log('Testing Minimax API connection...')
  console.log('API Key starts with:', process.env.MINIMAX_API_KEY?.substring(0, 20) + '...')
  
  try {
    const response = await fetch(
      'https://api.minimax.chat/v1/text/chatcompletion_v2',
      {
        headers: {
          "Authorization": `Bearer ${process.env.MINIMAX_API_KEY}`,
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          model: "abab6.5s-chat",
          messages: [
            {
              role: "user",
              content: "hello"
            }
          ],
          temperature: 0.1,
          max_tokens: 500
        })
      }
    )

    const data = await response.json()
    console.log('Response status:', response.status)
    console.log('Response headers:', Object.fromEntries(response.headers.entries()))
    console.log('Response body:', JSON.stringify(data, null, 2))
  } catch (error) {
    console.error('Error:', error)
  }
}

testMinimaxAPI() 