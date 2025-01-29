import { connectDB } from '../lib/db'
import { Chat } from '../models/chat'
import mongoose from 'mongoose'

async function testHuggingFace() {
  try {
    // 1. Test API Key
    console.log('🔑 Testing Hugging Face API key...')
    const response = await fetch(
      "https://api-inference.huggingface.co/models/google/flan-t5-base",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: "Test message: What is 2+2?",
          wait_for_model: true
        }),
      }
    )

    const result = await response.json()
    console.log('\n✅ API Response:', result)

    // 2. Test with Chat Model
    console.log('\n📝 Testing with Chat Model...')
    await connectDB()
    
    const testChat = new Chat({
      userId: new mongoose.Types.ObjectId(),
      cv: {
        filename: 'test.txt',
        content: 'John Doe is a software engineer with 5 years of experience.',
        contentType: 'text/plain'
      },
      messages: []
    })
    
    await testChat.save()
    console.log('✅ Test chat created with ID:', testChat._id)

    // 3. Test Chat API
    console.log('\n💬 Testing Chat API with CV content...')
    const chatResponse = await fetch(
      "https://api-inference.huggingface.co/models/google/flan-t5-base",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: `Context: ${testChat.cv.content}\nQuestion: What is John's profession?`,
          wait_for_model: true
        }),
      }
    )

    const chatResult = await chatResponse.json()
    console.log('✅ Chat Response:', chatResult)

  } catch (error) {
    console.error('❌ Error:', error)
  } finally {
    await mongoose.connection.close()
    process.exit(0)
  }
}

testHuggingFace() 