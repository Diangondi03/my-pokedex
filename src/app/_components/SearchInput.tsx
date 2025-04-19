import { Search } from 'lucide-react'
import React from 'react'

const SearchInput = () => {
  return (
    <label className="input bg-red-400 rounded-2xl">
        <input type="text" placeholder="Search" className="pr-5 bg-red-400"/>
        <button className="btn btn-circle btn-ghost absolute right-0 text-red-200 hover:bg-red-800 border-none">

        <Search className="h-4 w-4" />
        </button>
    </label>
  )
}

export default SearchInput