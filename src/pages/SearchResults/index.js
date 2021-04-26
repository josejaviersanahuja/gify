import useTitle2 from 'Hooks/useTitle2';
import debounce from 'just-debounce-it';
import React from 'react';
import { useRef, useEffect, useCallback } from 'react';
import ListOfGifs from '../../components/ListOfGifs';
import { useGifs } from '../../Hooks/useGifs';
import useNearScreen from '../../Hooks/useNearScreen';

export default function SearchResults({params}) {
   
    const {keyword}=params
    const externalRef=useRef()
    const {loading, gifs, setPage}  = useGifs({keyword})
    // volveremos a usar el hook useNearScreen para realizar el infity scroll
    const {isNear}= useNearScreen({externalRef: loading? null: externalRef, once:false})
    // Para evitar el loop infinito, usamos useCallback, debounce
    const debounceHandleNextPage=useCallback(debounce(()=> setPage(prev=>prev+1), 200),[setPage]);

        useEffect(() => {
        if(isNear) debounceHandleNextPage()
       
    },[isNear, debounceHandleNextPage])

    useTitle2({title:"search " + decodeURI(keyword)})
    
    return  <>  
                {loading ? <i>Loading...</i> : <ListOfGifs gifs={gifs}/>}
                <div id="visor" ref={externalRef}></div>
                
            </>
        
    
    }