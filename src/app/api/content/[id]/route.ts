import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { Content } from '@/models/content'
import { getToken } from 'next-auth/jwt'
import { handleError } from '@/utils/handleErrors'
import { authOptions } from '@/lib/auth'

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    if (!token?.sub) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()

    const content = await Content.findById(params.id)
    if (!content) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 })
    }

    if (content.userId.toString() !== token.sub) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    await Content.findByIdAndDelete(params.id)

    return NextResponse.json({ success: true })
  } catch (error) {
    return handleError(error, 'Error deleting content')
  }
} 