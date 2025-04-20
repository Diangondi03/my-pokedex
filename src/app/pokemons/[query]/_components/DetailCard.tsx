import React from 'react'

//@ts-ignore
const DetailCard = ({pokemon}) => {
  return (
    <div className='flex flex-col md:flex-row items-center md:items-start justify-center gap-5 md:gap-10 my-10 p-5 border border-gray-300 rounded-lg shadow-lg w-xs sm:w-md xl:w-6xl md:w-2xl mx-auto'>
    <div className='flex flex-col items-center border-b border-gray-300 md:border-b-0 md:border-r md:border-gray-300 pb-5 md:pb-0 md:pr-10'>
        <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className='w-48 h-48 object-contain'
        />
        <h2 className='text-2xl font-semibold capitalize mt-2'>{pokemon.name}</h2>
    </div>

    {/* Pokemon Details Table Section */}
    <div className='flex-1 w-full md:w-auto pt-5 md:pt-0'>
        <h3 className="text-xl font-semibold mb-3 text-center md:text-left">Details</h3>
        <table className='w-full text-left border-collapse'>
            <tbody>
                <tr className='border-b border-gray-300 hover:bg-gray-50'>
                    <th className='py-4 px-4 font-medium border-r border-gray-300'>ID</th>
                    <td className='py-4 px-4'>{pokemon.id}</td>
                </tr>
                <tr className='border-b border-gray-300 hover:bg-gray-50'>
                    <th className='py-4 px-4 font-medium border-r border-gray-300'>Types</th>
                    <td className='py-4 px-4 flex'>
                        {pokemon.types.map((typeInfo: any) =>(
                            <div className='flex items-center' key={typeInfo.type.name}>

                            <img src={`/types/${typeInfo.type.name}.png`} alt={typeInfo.type.name} className='w-5 h-5 inline-block mr-2' />
                            <span key={typeInfo.type.name} className='capitalize mr-3'>{typeInfo.type.name}</span>
                            </div>
                            
                        ))
                            
                        }
                    </td>
                </tr>
                <tr className='border-b border-gray-300 hover:bg-gray-50'>
                    <th className='py-4 px-4 font-medium border-r border-gray-300'>Height</th>
                    <td className='py-4 px-4'>{pokemon.height / 10} m</td> {/* Convert decimetres to meters */}
                </tr>
                <tr className='hover:bg-gray-50'>
                    <th className='py-4 px-4 font-medium border-r border-gray-300'>Weight</th>
                    <td className='py-4 px-4'>{pokemon.weight / 10} kg</td> {/* Convert hectograms to kilograms */}
                </tr>

            </tbody>
        </table>
    </div>
</div>
  )
}

export default DetailCard