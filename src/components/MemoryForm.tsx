import React from 'react'
import { useForm } from 'react-hook-form'
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from '@material-tailwind/react'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { redirect } from 'next/navigation'

type Inputs = {
  name: string
  message: string
  files?: File[] | null
}

const schema = yup
  .object({
    name: yup.string().required(),
    message: yup.string().required(),
  })
  .required()

export function MemoryForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: Inputs) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: JSON.stringify({
        name: data.name,
        message: data.message,
        files: data.files?.length ? data.files : null,
      }),
    })
      .then(() => redirect('/thank-you/'))
      .catch((error) => alert(error))
  }
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
        <form
          className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'
          onSubmit={handleSubmit(onSubmit)}
          name='Share your memory'
          method='post'
          data-netlify={true}
        >
          <input name='form-name' value='Share your memory' type='hidden' />
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
              {...register('name')}
              name='name'
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
            <p className='text-xs text-red-800'>{errors.name?.message}</p>

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
              {...register('message')}
              name='message'
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
            <p className='text-xs text-red-800'>{errors.message?.message}</p>

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

            <input
              name='files'
              className='relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary'
              type='file'
              id='formFileMultiple'
              multiple
            />

            <Button
              type='submit'
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
