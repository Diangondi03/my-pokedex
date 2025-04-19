"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, Search, SeparatorVertical, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-red-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold mr-6">Pokedex</Link>
            <Separator orientation="vertical" />
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

        <div className="hidden md:flex items-center relative">
          <Input
            placeholder="Search..."
            
            className="w-64 rounded-full bg-red-700 border-red-500 text-white placeholder:text-red-200 focus-visible:ring-red-400 pr-8"
          />
          <Search className="absolute right-3 h-4 w-4 text-red-200 cursor-pointer" />
        </div>

        
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-red-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden pt-2 pb-4 px-4 bg-red-700">
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
              <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-full bg-red-800 border-red-600 text-white placeholder:text-red-200 focus-visible:ring-red-400"
              />
              <Search className="absolute right-3 top-5 h-4 w-4 text-red-200" />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
