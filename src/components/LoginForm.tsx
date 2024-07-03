import React from 'react'
import { Card, Input, Button, Typography } from '@material-tailwind/react'

export function LoginForm() {
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
          Please Login
        </Typography>
        <Typography
          color='gray'
          className='mt-1 font-normal'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Kindly login to our Dashboard
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
              Your Email
            </Typography>
            <Input
              size='lg'
              color='purple'
              placeholder='John@example.com'
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
              Your Password
            </Typography>
            <Input
              type='password'
              size='lg'
              placeholder='********'
              className='!border-purple focus:!border-purple-950 text-purple-950 p-4'
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
            <Button
              className='mt-6 p-6 bg-purple-700 text-white'
              fullWidth
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Login
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
