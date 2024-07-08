'use client'

import React from 'react'

import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import Link from 'next/link'

function Success() {
  return (
    <div className='bg-white flex flex-col '>
      <Hero />
      <div className='m-2 p-2 bg-green-800 text-white text-2xl text-center'>
        Congratulations. You have successfully Shared a lovable memory with us
      </div>
      <div className='m-2 p-2 bg-white text-black text-2xl text-center'>
        You can now return to our <Link href='/'> Home Page </Link>
      </div>

      <Footer />
    </div>
  )
}

export default Success
