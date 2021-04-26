import {useEffect, useState, useContext} from 'react';
import GifsContext from '../context/GifsContext';
import getGifs from '../services/getGifs';

export function useGifs({keyword}) {
    const [loading, setLoading] = useState(true) 
    const [loadingPage, setLoadingPage] = useState(true) 
    const {gifs, setGifs}= useContext(GifsContext)
    const [page, setPage] = useState(0)
/**
 * useEffect es para ejecutarse 1 sola vez cada vez que renderiza 
 */
    useEffect(() => {
        setLoading(true)
        getGifs({keyword})
            .then(gifs=> {
                setGifs(gifs)
                setLoading(false)
            })
    }, [keyword, setGifs])

    useEffect(() => {
        if(page===0) return
    
        return () => {
            getGifs({keyword,page})
                .then(nextgifs=> {
                    setGifs(prevGifs=>prevGifs.concat(nextgifs))
                    setLoadingPage(false)
                })
        }
    }, [page, keyword, setGifs])
 
    return {loading, loadingPage, gifs, setPage, page}

}
