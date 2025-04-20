"use client"
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import ObjectCard from './ObjectCard';

const NUMBER_OF_OBJECTS = 24; // Number of pokemons to fetch

const ObjectList =  () => {
    const [offset, setOffset] = useState(1)
    const [objects, setObjects] = useState([])
    const [loading, setLoading] = useState(true)
    const { ref, inView } = useInView()

    const getBasicObjectData = async()=>{
        const response = await fetch(`https://pokeapi.co/api/v2/item?limit=${NUMBER_OF_OBJECTS}&offset=${offset}`); // Fetch initial list

        if (!response.ok) {
            setLoading(false)
        }
        const data = await response.json();
        return data.results;
    }

    const getObject = async (url:string) => {
        const response = await fetch(url); // Fetch initial list

    
        if (!response.ok) {
            // Throwing here means Promise.all will reject if any single ID fails
            throw new Error(`Failed to fetch details for item, status: ${response.status}`);
        }
    
        const data = await response.json();
        return data
    }
    const getObjects = async()=>{
        const basicObjectList = await getBasicObjectData(); // Fetch initial list
        const itemPromises = basicObjectList.map((object) => getObject(object.url)); // Fetching 100 pokemons
        const res = await Promise.all(itemPromises); // Wait for all promises to resolve
        return res
    }

    const loadMoreObjects = async () => {
        const apiObject = await getObjects()
        setObjects(objects => [...objects, ...apiObject])
        setOffset(offset => offset + NUMBER_OF_OBJECTS)
    }

    useEffect(() => {
        if (inView) {
          loadMoreObjects()
        }
    }, [inView])


    return (
        <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {objects.map((object, index) => (
                        <ObjectCard key={index} object={object} />
                    ))}
                </div>
                <div ref={ref} className={`${!loading ? 'hidden' : 'flex justify-center items-center h-16 my-10'}`}>
                    <span className="loading loading-spinner loading-xl"></span>
                </div>
        </>
    )
}

export default ObjectList