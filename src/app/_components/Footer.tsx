import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="h-16"></div>
      <footer className="absolute bottom-0 bg-gradient-to-t from-black via-gray-950 to-gray-900 text-white h-16 w-full flex items-center">
        <div className="container  text-center">
          <p>&copy; {new Date().getFullYear()} My Pokedex. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer