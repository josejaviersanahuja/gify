import React, {useState, useEffect} from 'react'
import getTrendingGifs from '../services/getTrendngGifs'
import Category from './Category'

export default function Trending() {
    /**
     * hacemos un llamado al servicio getTrendingGifs y lo transformamos en: 
     * trending: que es un array de strings con las búsquedas 
     */
    const [trending, setTrending] = useState([])

    useEffect(() => {
        getTrendingGifs()
            .then(setTrending)
    }, [])
    /**
     * Category devuelve una lista de links con las búsquedas del name y el array trending
     */
    return (
        <Category options={trending} name="Trending"/>
        )
}


