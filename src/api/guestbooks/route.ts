// /src/app/api/articles/route.ts

import { NextApiRequest, NextApiResponse } from 'next' // Import necessary types

import { apiPost, apiGet } from '../database' // Import your database functions

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    try {
      const body = req.body
      const { name, message, fileUrl } = body

      const query = `
        INSERT INTO guestbooks(name, message, fileUrl)
        VALUES(?, ?, ?)
      `
      const values = [name, message, fileUrl]

      await apiPost(query, values)

      return res
        .status(200)
        .json({ message: 'Successfully created a guest book' })
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message)
        return res.status(400).json({ error: error.message })
      }
    }
  } else if (req.method === 'GET') {
    try {
      const query = `
        SELECT * from guestbooks
      `

      const rows = await apiGet(query)

      return res.status(200).json(rows)
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message)
        return res.status(400).json({ error: error.message })
      }
    }
  } else {
    return res.status(405).end() // Method Not Allowed
  }
}
