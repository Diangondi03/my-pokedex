import font from "./fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className={`${font.className} text-6xl font-bold mb-20 tracking-widest`}>
      Pokédex
      </h1>
      <p className="text-lg">
      Explore the world of Pokémon!
      </p>
    </main>
  );
}
