import React from 'react'
import DetailCard from './_components/DetailCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Pokemon Detail',
  }

const page = async ({params}) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.query}`)

    try{
        const pokemon = await res.json()
        return (
            <DetailCard pokemon={pokemon}/>
            
        )
    } catch (error) {
        console.log(error)
        return <h1 className='text-center my-10 text-2xl'>Pokemon Not Found</h1>
    }

}

export default page