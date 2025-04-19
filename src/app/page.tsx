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
              <label className="input input-lg rounded-full bg-white shadow-md flex items-center w-full border-gray-500 border-1">

                <input
                  type="text"
                  placeholder="Search Pokémon by name or number..."
                  className="pr-8 pl-4  rounded-full  border-gray-400 bg-white  focus:outline-none  focus:border-transparent placeholder-gray-600 transition duration-200 ease-in-out"
                  />
                  <button className="btn btn-circle btn-ghost hover:bg-accent hover:border-accent absolute right-1">

                    <Search className=" top-1/2 transform  h-5 w-5 text-gray-500" />
                  </button>
              </label>
            </div>
        </main>


  );
}
