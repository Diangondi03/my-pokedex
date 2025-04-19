"use client"
import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import { useInView } from 'react-intersection-observer'

const NUMBER_OF_POKEMONS = 100; // Number of pokemons to fetch

const PokemonList =  () => {
    const [offset, setOffset] = useState(1)
    const [pokemons, setPokemons] = useState([])
    const { ref, inView } = useInView()
    const [loading, setLoading] = useState(true)
    const getBasicPokemonData = async()=>{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${NUMBER_OF_POKEMONS}&offset=${offset}`); // Fetch initial list
        if (!response.ok) {
            throw new Error('Failed to fetch pokemon list');
        }
        const data = await response.json();
        return data.results;
    }
    const getPokemon = async (url:string) => {
        const response = await fetch(url);
    
        if (!response.ok) {
            setLoading(false)

        }
    
        const data = await response.json();
        return data
    }
    const getPokemons = async()=>{
        const basicPokemonList = await getBasicPokemonData();
        const pokemonPromises = basicPokemonList.map((pokemon) => getPokemon(pokemon.url)); // Fetching 100 pokemons
        const res = await Promise.all(pokemonPromises); // Wait for all promises to resolve
        return res
    }

    const loadMorePokemon = async () => {
        const apiPokemons = await getPokemons()
        setPokemons(pokemons => [...pokemons, ...apiPokemons])
        setOffset(offset => offset + NUMBER_OF_POKEMONS)
    }

    useEffect(() => {
        if (inView && loading) {
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
                <div ref={ref} className={`${!loading ? 'hidden' : 'flex justify-center items-center h-16 my-10'}`}>
                    <span className="loading loading-spinner loading-xl"></span>
                </div>
        </>
    )
}

export default PokemonList