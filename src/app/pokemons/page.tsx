import React from 'react'
import PokemonList from './_components/PokemonList'

const page = () => {
  return (
    <>
        <h1 className='text-center text-3xl my-10 uppercase font-bold'>Pokemon List</h1>
        <PokemonList/>
    </>
  )
}

export default page