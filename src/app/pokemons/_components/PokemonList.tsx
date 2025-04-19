import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = async () => {
    const getPokemons = async (id:number) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}/`; // Construct the URL using the ID
        const response = await fetch(url);
    
        if (!response.ok) {
            // Throwing here means Promise.all will reject if any single ID fails
            throw new Error(`Failed to fetch details for Pokemon ID ${id}, status: ${response.status}`);
        }
    
        const data = await response.json();
        return data
    }


    const pokemonPromises = [...Array(20)].map((_, index) => getPokemons(index + 1)); // Fetching 100 pokemons
    const pokemons = await Promise.all(pokemonPromises); // Wait for all promises to resolve

    return (
        <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {/* Replicating the card 12 times for demonstration */}
                    {pokemons.map((pokemon, index) => (
                        <PokemonCard key={index} pokemon={pokemon} />
                    ))}
                </div>
        </>
    )
}

export default PokemonList