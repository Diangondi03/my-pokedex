"use client"
import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import { useInView } from 'react-intersection-observer'

const NUMBER_OF_POKEMONS = 24; // Number of pokemons to fetch

const PokemonList =  () => {
    const [offset, setOffset] = useState(1)
    const [pokemons, setPokemons] = useState([])
    const { ref, inView } = useInView()
    const getPokemon = async (id:number) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}/`; // Construct the URL using the ID
        const response = await fetch(url);
    
        if (!response.ok) {
            // Throwing here means Promise.all will reject if any single ID fails
            throw new Error(`Failed to fetch details for Pokemon ID ${id}, status: ${response.status}`);
        }
    
        const data = await response.json();
        return data
    }
    const getPokemons = async()=>{

        const indexes = Array.from({length: pokemons.length<=1025-NUMBER_OF_POKEMONS ? NUMBER_OF_POKEMONS : 1025-pokemons.length}, (_, i) => i + offset); // Create an array of indexes from offset to offset + NUMBER_OF_POKEMONS
        const pokemonPromises = indexes.map((index) => getPokemon(index)); // Fetching 100 pokemons
        const res = await Promise.all(pokemonPromises); // Wait for all promises to resolve
        return res
    }

    const loadMorePokemon = async () => {
        if (pokemons.length >= 1025) return // If all pokemons are loaded, do nothing
        const apiPokemons = await getPokemons(offset, NUMBER_OF_POKEMONS)
        setPokemons(pokemons => [...pokemons, ...apiPokemons])
        setOffset(offset => offset + NUMBER_OF_POKEMONS)
    }

    useEffect(() => {
        if (inView) {
          loadMorePokemon()
        }
    }, [inView])


    return (
        <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {pokemons.map((pokemon, index) => (
                        <PokemonCard key={index} pokemon={pokemon} />
                    ))}
                </div>
                <div ref={ref} className={`${pokemons.length >= 1025 ? 'hidden' : 'flex justify-center items-center h-16 my-10'}`}>
                    <span className="loading loading-spinner loading-xl"></span>
                </div>
        </>
    )
}

export default PokemonList