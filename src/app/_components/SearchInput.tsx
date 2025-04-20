"use client"

import { Search } from 'lucide-react'
import React from 'react'

const SearchInput = () => {
  const [search, setSearch] = React.useState<string>('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (search=='') return
    e.preventDefault()
    // Handle search submit logic here
    window.location.href = `/pokemons/${search}`
  }
  return (
    <label className="input bg-red-400 rounded-2xl">
      <form onSubmit={handleSubmit} className='relative w-full'>

        <input type="text" placeholder="Search" className="pr-5 bg-red-400" value={search} onChange={handleChange}/>
        <button type='submit' className="btn btn-circle btn-ghost absolute right-[-10] top-[-10] text-red-200 hover:bg-red-800 border-none">

          <Search className="h-4 w-4" />
        </button>
      </form>
    </label>
  )
}

export default SearchInput