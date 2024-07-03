// /src/app/api/migrations.ts

import { db } from './database'

export const migrate = () => {
  db.serialize(() => {
    db.run(
      `
    CREATE TABLE IF NOT EXISTS guestbooks
     (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      message TEXT NOT NULL,
      fileUrl TEXT NOT NULL
    );
    `,
      (err: Error) => {
        if (err) {
          console.error(err.message)
        }
        console.log('guestbooks table created successfully.')
      },
    )
  })
}
