// src/utils/handleErrors.ts
import { NextResponse } from 'next/server'
import { ZodError } from 'zod'

export function handleError(error: unknown, defaultMessage = 'Internal Server Error') {
  console.error('Error:', error)

  if (error instanceof ZodError) {
    return NextResponse.json(
      { error: error.errors },
      { status: 400 }
    )
  }

  if (error instanceof Error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }

  return NextResponse.json(
    { error: defaultMessage },
    { status: 500 }
  )
}