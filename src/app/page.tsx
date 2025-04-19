import { Input } from "@/components/ui/input";
import font from "./fonts";
import { Search } from "lucide-react"; // Import the Search icon

export default function Home() {
  return (

        <main className="flex min-h-screen flex-col items-center p-12 md:p-24 bg-gradient-to-br from-blue-50 via-white to-red-50">
          <h1 className={`${font.className} text-5xl md:text-7xl font-bold mb-16 tracking-widest text-gray-800`}>
            Pokédex
          </h1>
            <p className="text-md md:text-xl text-center text-gray-600 mb-10 max-w-lg">
            Explore the vast world of Pokémon! Use the search bar below to find detailed information about any Pokémon, including their types, abilities, stats, and evolution chain. Discover everything you need to know about your favorite creatures.
            </p>
            <div className="relative w-full max-w-md">
            <Input
              type="text"
              placeholder="Search Pokémon by name or number..."
              className="w-full pr-10 pl-4 py-6 rounded-full border border-gray-400 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-600 transition duration-200 ease-in-out"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            </div>
        </main>


  );
}
