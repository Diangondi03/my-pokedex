import React from 'react'

//@ts-expect-error
const ObjectCard = ({object}) => {
  return (
    <div className="card bg-accent shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-1 border-1 border-gray-500 h-full">
      <figure className="px-10 pt-10">

         <div className="w-20 h-20 bg-gray-300 rounded-xl flex items-center justify-center">
            <img src={object.sprites.default} alt={object.name} className="rounded-xl w-32 h-32 object-contain" />

         </div>
      </figure>
      <div className="card-body items-center text-center p-4">

        <h2 className="card-title capitalize">{object.name}</h2>
        <h3 className='card-body'>{object.effect_entries[0].short_effect}</h3>
      </div>
    </div>
  )
}

export default ObjectCard