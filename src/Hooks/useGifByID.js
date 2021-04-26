import {useEffect, useState} from 'react';
import getGifByID from 'services/getGifByID';

export function useGifByID(params, gifs) {
    var giftemp1={}
    var temp1=[]
    if (gifs.length!==0) {
        temp1=gifs.filter(e=> e.id===params.id)
        giftemp1=temp1[0]
    }
    const [loading, setLoading] = useState(false) 
    const [gif, setGif] = useState(giftemp1)
    
/**
 * useEffect es para ejecutarse 1 sola vez cada vez que renderiza 
 */
    
   useEffect(() => {
        if(gifs.length===0) {
            setLoading(true)
            getGifByID(params).then(gifByID=> {setGif(gifByID)})
            setLoading(false)
        }
    }, [gifs, params])
    

    return {gif, loading}

}
