import { Metadata } from "next";
import HomeSearchInput from "./_components/HomeSearchInput";
import font from "./fonts";

export const metadata: Metadata = {
  title: 'Pokedex',
}

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
              <HomeSearchInput/>
            </div>
        </main>


  );
}
