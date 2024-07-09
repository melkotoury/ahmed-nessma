import { NextRequest, NextResponse } from 'next/server'
import { join } from 'path'
import { writeFile } from 'fs/promises'

export async function POST(req: NextRequest) {
  const data = await req.formData()
  const file: File | null = data.get('file') as unknown as File
  // const name: string = data.get('name') as string
  // const message: string = data.get('message') as string
  if (file) {
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const path = join('/', 'tmp', file.name)
    await writeFile(path, buffer)
    console.log(`open ${path} to see uploaded file`)
  }
  return NextResponse.json({ success: true })
}
