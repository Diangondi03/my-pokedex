"use client"

import { Search } from 'lucide-react'
import React from 'react'

const HomeSearchInput = () => {
    const [search, setSearch] = React.useState<string>('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (search == '') return
        e.preventDefault()
        // Handle search submit logic here
        window.location.href = `/pokemons/${search}`
    }
  return (
    <form onSubmit={handleSubmit} className='relative w-full max-w-md'>
        <label className="input input-lg rounded-full bg-white shadow-md flex items-center w-full border-gray-500 border-1">

        <input
        type="text"
        placeholder="Search Pokémon by name or number..."
        value={search}
        onChange={handleChange}
        className="pr-8 pl-4  rounded-full  border-gray-400 bg-white  focus:outline-none  focus:border-transparent placeholder-gray-600 transition duration-200 ease-in-out"
        />
        <button className="btn btn-circle btn-ghost hover:bg-accent hover:border-accent absolute right-1">

            <Search className=" top-1/2 transform  h-5 w-5 text-gray-500" />
        </button>
        </label>
    </form>
  )
}

export default HomeSearchInput