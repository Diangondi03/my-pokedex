import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: '404: Page Not Found',
}

const notFound = () => {
  return (
    <h1 className='text-center font-bold text-3xl my-10'>Page Not Found</h1>
  )
}

export default notFound