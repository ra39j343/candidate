import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { connectDB } from '@/lib/db'
import { ShareableLink } from '@/models/ShareableLink'

export async function DELETE(
  req: NextRequest,
  { params }: { params: { linkId: string } }
) {
  try {
    const token = await getToken({ req })
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    
    console.log('Attempting to delete link with params:', {
      linkId: params.linkId,
      userId: token.id
    })

    const link = await ShareableLink.findOne({
      id: params.linkId,
      userId: token.id
    })

    console.log('Found link in database:', link)

    if (!link) {
      return NextResponse.json(
        { error: 'Link not found' },
        { status: 404 }
      )
    }

    const result = await ShareableLink.deleteOne({
      id: params.linkId,
      userId: token.id
    })

    console.log('Delete result:', result)

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'Failed to delete link' },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting link:', error)
    return NextResponse.json(
      { error: 'Failed to delete link' },
      { status: 500 }
    )
  }
} 