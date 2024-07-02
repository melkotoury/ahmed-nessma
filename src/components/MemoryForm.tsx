import React from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from '@material-tailwind/react'

export function MemoryForm() {
  // IMPORTANT: passing an initializer function to prevent Uppy from being reinstantiated on every render.

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
        <form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
          <div className='mb-1 flex flex-col gap-6'>
            <Typography
              variant='h6'
              color='blue-gray'
              className='-mb-3'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Your Name
            </Typography>
            <Input
              size='lg'
              color='purple'
              placeholder='John Doe'
              className='!border-purple focus:!border-purple-950 text-purple-950 p-4'
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
            <Typography
              variant='h6'
              color='blue-gray'
              className='-mb-3'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Your Message
            </Typography>
            <Textarea
              size='lg'
              color='purple'
              placeholder='Enter your message here'
              className=' text-black p-4'
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              rows={8}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            <Typography
              variant='h6'
              color='blue-gray'
              className='-mb-3'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Upload file
            </Typography>
            <Button
              className='mt-6 p-6 bg-purple-700 text-white'
              fullWidth
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Share a Memory
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
