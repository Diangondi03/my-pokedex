"use client"
import { Menu, Search, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const MobileNavToggle = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [search, setSearch] = useState<string>('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (search == '') return
        e.preventDefault()
        // Handle search submit logic here
        handleClose()
        window.location.href = `/pokemons/${search}`
    }
    const handleClose = () => {
        setIsMenuOpen(false)
    }
    return (
        <>
            <button
            className="absolute top-2 right-4  md:hidden text-white hover:bg-red-700 btn btn-square btn-ghost border-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {isMenuOpen && (
                <div className="md:hidden mt-2 pt-2 pb-4 px-4 bg-red-700">
                <div className="flex flex-col space-y-3">
                    <Link href="/" onClick={handleClose} className="py-2 hover:text-red-200 transition-colors">
                    Home
                    </Link>
                    <Link href="/pokemons" onClick={handleClose} className="py-2 hover:text-red-200 transition-colors">
                    Pokemons
                    </Link>

                    <Link href="/objects" onClick={handleClose} className="py-2 hover:text-red-200 transition-colors">
                    Objects
                    </Link>
                    <div className="pt-2 relative">
                    <form onSubmit={handleSubmit} className='relative w-full'>
                        <label className="input bg-red-800 rounded-2xl w-full">

                            <input
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={handleChange}
                            className=" bg-red-800 border-red-600 text-white placeholder:text-red-200 focus-visible:ring-red-400"
                            />
                            <button type='submit' className="btn btn-circle btn-ghost absolute right-1 text-red-200 hover:bg-red-800 border-none">
                                <Search className=" h-4 w-4 text-red-200 cursor-pointer" />
                            </button>
                        </label>
                    </form>
                    </div>
                </div>
                </div>
            )}
        </>
    )
}

export default MobileNavToggle