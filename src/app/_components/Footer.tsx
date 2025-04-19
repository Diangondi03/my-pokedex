import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-950 to-gray-900 text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Pokedex. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer