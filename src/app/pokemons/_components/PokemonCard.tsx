import React from 'react'

const PokemonCard = ({pokemon}:{pokemon:any}) => {

    return (
        <div className="card bg-accent shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-1">
            <figure className="px-10 pt-10">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="rounded-xl w-32 h-32 object-contain" />
            </figure>
            <div className="card-body items-center text-center p-4">
            <h2 className="card-title capitalize">{pokemon.name} #{pokemon.id}</h2>
            <div className="card-actions justify-center mt-2 flex-wrap items-center">
            <span className="font-semibold mr-2 w-full text-center sm:w-auto sm:text-left mb-1 sm:mb-0">Types:</span>
            {pokemon.types.map((typeInfo: { type: { name: string } }) => (
            <div key={typeInfo.type.name} className="badge badge-primary badge-outline capitalize m-1">{typeInfo.type.name}</div>
            ))}
            </div>
            </div>
        </div>
    )
}

export default PokemonCard