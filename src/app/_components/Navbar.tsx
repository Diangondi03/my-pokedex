import Link from "next/link"
import SearchInput from "./SearchInput"
import MobileNavToggle from "./MobileNavToggle"


export default function Navbar() {

  return (
    <nav className="bg-red-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between relative">
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
          <SearchInput/>
        </div>

        <MobileNavToggle/>
        
      </div>
       
    </nav>
  )
}
