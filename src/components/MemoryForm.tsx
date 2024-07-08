import React, { useEffect, useState } from 'react'

import { Card, Typography } from '@material-tailwind/react'

export function MemoryForm() {
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (window.location.search.includes('success=true')) {
      setSuccess(true)
    }
  }, [])

  return (
    <div className='mt-10 flex items-center justify-center gap-x-6'>
      <Card
        color='transparent'
        className='border-2 border-purple-600 m-2 p-10 border-r-4'
        shadow={false}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography
          variant='h4'
          color='blue-gray'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Share your memory
        </Typography>
        <Typography
          color='gray'
          className='mt-1 font-normal'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          We are happy to see you sharing a memory with us
        </Typography>
        {success && (
          <p style={{ color: 'green' }}>Successfully submitted form!</p>
        )}
        <form
          className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'
          method='POST'
          name='memory'
          action='/share-your-memories?success=true'
          data-netlify='true'
        >
          <input type='hidden' name='form-name' value='memory' />
          <div className='mb-1 flex flex-col gap-6'>
            <label htmlFor='name'>Your Name:</label>

            <input
              name='name'
              id='name'
              color='purple'
              placeholder='John Doe'
              className='!border-purple focus:!border-purple-950 text-purple-950 p-4'
            />

            <label htmlFor='message'>Your Message:</label>
            <textarea
              id='message'
              name='message'
              rows={8}
              className='!border-purple focus:!border-purple-950 text-purple-950 p-4'
            ></textarea>

            {/*<Typography*/}
            {/*  variant='h6'*/}
            {/*  color='blue-gray'*/}
            {/*  className='-mb-3'*/}
            {/*  placeholder={undefined}*/}
            {/*  onPointerEnterCapture={undefined}*/}
            {/*  onPointerLeaveCapture={undefined}*/}
            {/*>*/}
            {/*  Upload file*/}
            {/*</Typography>*/}

            {/*<input*/}
            {/*  name='files'*/}
            {/*  className='relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary'*/}
            {/*  type='file'*/}
            {/*  id='formFileMultiple'*/}
            {/*  multiple*/}
            {/*/>*/}

            <button type='submit' className='mt-6 p-6 bg-purple-700 text-white'>
              Share a Memory
            </button>
          </div>
        </form>
      </Card>
    </div>
  )
}
