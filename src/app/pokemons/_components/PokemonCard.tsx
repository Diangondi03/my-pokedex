import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Root } from '../pokemonResponseType'

const PokemonCard = ({pokemon}:{pokemon:Root}) => {

    return (
        <Link href={`pokemons/${pokemon.id}`} className='m-0 p-0'>
        <div className="card bg-accent shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-1 border-1 border-gray-500 h-full">
            <figure className="px-10 pt-10">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="rounded-xl w-32 h-32 object-contain" />
            </figure>
            <div className="card-body items-center text-center p-4">
            <h2 className="card-title capitalize">{pokemon.name} #{pokemon.id}</h2>
            <div className="card-actions justify-center mt-2 flex-wrap items-center">
            {pokemon.types.map((typeInfo: { type: { name: string } },index) => (
                <div key={index}>
            <Image src={`/types/${typeInfo.type.name}.png`} width={20} height={20} alt={typeInfo.type.name}  className="w-8 h-8 m-1" /> 
                </div>
            ))}
            </div>
            </div>
        </div>
        </Link>
    )
}

export default PokemonCard