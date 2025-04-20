import React from 'react'
import DetailCard from './_components/DetailCard'

const page = async ({params}:{params:{query:string}}) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.query}`)

    try{
        const pokemon = await res.json()
        return (
            <DetailCard pokemon={pokemon}/>
            
        )
    } catch (error) {
        return <h1 className='text-center my-10 text-2xl'>Pokemon Not Found</h1>
    }

}

export default page