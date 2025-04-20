import React from 'react'
import ObjectList from './_components/ObjectList'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Objects',
}

const page = () => {
  return (
    <>
        <h1 className='text-center text-3xl uppercase font-bold my-10'>Objects List</h1>
        <ObjectList/>
    </>
  )
}

export default page