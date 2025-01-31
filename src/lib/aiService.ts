import { connectDB } from '@/lib/db'
import { Content } from '@/models/content'  // Using Content model

const MAX_RETRIES = 3
const RETRY_DELAY = 1000 // 1 second

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function getAIResponse(userId: string, question: string) {
  try {
    if (!process.env.MINIMAX_API_KEY) {
      throw new Error('MINIMAX_API_KEY is not set in environment variables')
    }

    await connectDB()
    
    // Get all content for the user, sorted by creation date
    const userContent = await Content.find({ userId })
      .sort({ createdAt: -1 }) // Sort by newest first
    
    console.log('Found content items:', userContent.length)
    
    const processedContentIds = new Set()
    const contentByDate = new Map()
    
    // Process and organize content by date
    userContent.forEach(content => {
      if (content.content.startsWith('%PDF')) {
        console.log('Skipping PDF content:', content.fileName)
        return
      }
      
      const contentHash = content.content.substring(0, 100)
      if (processedContentIds.has(contentHash)) {
        console.log('Skipping duplicate content:', content.fileName)
        return
      }
      
      processedContentIds.add(contentHash)
      contentByDate.set(
        content.createdAt.getTime(),
        `${content.type.toUpperCase()} (${content.fileName}, uploaded ${content.createdAt.toISOString()}): ${content.content}`
      )
    })

    // Sort by date and join
    const enrichedContent = Array.from(contentByDate.entries())
      .sort((a, b) => b[0] - a[0]) // Sort by date, newest first
      .map(([_, content]) => content)
      .join('\n\n')

    // Enhance prompt based on question type
    let enhancedPrompt = `Based on the following content:\n${enrichedContent}\n\n`
    
    if (question.includes('last experience')) {
      enhancedPrompt += `State the most recent position, company, duration, and key achievements. `
    } else if (question.includes('salary expectations')) {
      enhancedPrompt += `State the exact salary figures or ranges mentioned. `
    } else if (question.includes('leadership experience')) {
      enhancedPrompt += `State the largest team size managed and specific leadership roles held. `
    }

    enhancedPrompt += `
    Response rules:
    1. Maximum 3 sentences
    2. State facts only, no interpretations
    3. Use specific numbers and dates
    4. Start with the most important information
    5. For conflicting information, use only the most recent document
    
    Context rules:
    1. If multiple versions exist, use the most recent
    2. Maintain chronological context when describing experience
    3. Cross-reference skills across different documents
    4. Preserve specific technical terms and versions
    5. Keep original metrics and numbers
    
    Question: ${question}`

    // Add this helper function at the top of the file
    function stripMarkdown(text: string): string {
      return text.replace(/\*\*/g, '');
    }

    let retries = MAX_RETRIES
    while (retries > 0) {
      try {
        console.log(`Attempt ${MAX_RETRIES-retries+1}/${MAX_RETRIES} to get AI response`)
        
        // Log the request details (without the full API key)
        console.log('Request URL:', 'https://api.minimaxi.chat/v1/text/chatcompletion_v2')
        console.log('API Key format:', process.env.MINIMAX_API_KEY.substring(0, 20) + '...')
        
        const response = await fetch(
          'https://api.minimaxi.chat/v1/text/chatcompletion_v2',
          {
            headers: {
              "Authorization": `Bearer ${process.env.MINIMAX_API_KEY}`,
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
              model: "MiniMax-Text-01", // Using the model with larger context window
              messages: [
                {
                  role: "system",
                  content: "You are a helpful AI assistant helping recruiters understand candidate information."
                },
                {
                  role: "user",
                  content: enhancedPrompt
                }
              ],
              temperature: 0.7,
              max_tokens: 500
            })
          }
        );

        const data = await response.json();
        console.log('API Response:', data);

        // Check for API error response
        if (data.base_resp && data.base_resp.status_code !== 0) {
          throw new Error(`API Error: ${data.base_resp.status_msg} (code: ${data.base_resp.status_code})`);
        }

        // Only check response format if we don't have an error
        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
          console.error('Unexpected API response format:', data);
          throw new Error('Invalid response format from API');
        }

        return data.choices[0].message.content;
      } catch (error) {
        console.error(`Attempt ${MAX_RETRIES-retries+1} failed:`, error)
        if (retries === 1) throw error
        retries--
        await delay(RETRY_DELAY * (MAX_RETRIES-retries))
      }
    }
  } catch (error) {
    console.error('Error in getAIResponse:', error)
    return `I apologize, but I'm having trouble accessing the information right now. Please try again in a moment.`
  }
}