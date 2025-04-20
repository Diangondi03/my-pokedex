import React from 'react'
import PokemonList from './_components/PokemonList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pokemons',
}

const page = () => {
  return (
    <>
        <h1 className='text-center text-3xl my-10 uppercase font-bold'>Pokemon List</h1>
        <PokemonList/>
    </>
  )
}

export default page