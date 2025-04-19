"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, Search, X } from "lucide-react"


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-red-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold mr-6">Pokedex</Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-red-200 transition-colors">
              Home
            </Link>
            <Link href="/pokemons" className="hover:text-red-200 transition-colors">
              Pokemons
            </Link>
            <Link href="/moves" className="hover:text-red-200 transition-colors">
              Moves
            </Link>
            <Link href="/objects" className="hover:text-red-200 transition-colors">
              Objects
            </Link>
          </div>
        </div>

        <div className="hidden md:flex justify-end relative w-md">
        <label className="input bg-red-400 rounded-2xl">
          <input type="text" placeholder="Search" className="pr-5 bg-red-400"/>
          <button className="btn btn-circle btn-ghost absolute right-0 text-red-200 hover:bg-red-800 border-none">

          <Search className="h-4 w-4" />
          </button>
        </label>
        </div>

        
        <button
          className="md:hidden text-white hover:bg-red-700 btn btn-square btn-ghost border-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-2 pt-2 pb-4 px-4 bg-red-700">
          <div className="flex flex-col space-y-3">
            <Link href="/" className="py-2 hover:text-red-200 transition-colors">
              Home
            </Link>
            <Link href="/pokemon" className="py-2 hover:text-red-200 transition-colors">
              Pokemons
            </Link>
            <Link href="/move" className="py-2 hover:text-red-200 transition-colors">
              Moves
            </Link>
            <Link href="/object" className="py-2 hover:text-red-200 transition-colors">
              Objects
            </Link>
            <div className="pt-2 relative">
              <label className="input bg-red-800 rounded-2xl w-full">

              <input
                type="text"
                placeholder="Search..."
                className=" bg-red-800 border-red-600 text-white placeholder:text-red-200 focus-visible:ring-red-400"
                />
              <Search className="absolute right-3 h-4 w-4 text-red-200 cursor-pointer" />
              </label>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
