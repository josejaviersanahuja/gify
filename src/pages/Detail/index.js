import React, {useContext} from 'react';
import Gif from '../../components/Gif';
/* import staticContext from '../../context/staticContext';  */
import GifsContext from '../../context/GifsContext'
import useTitle2 from 'Hooks/useTitle2'
import { useGifByID } from 'Hooks/useGifByID';


export default function Detail({params}) {
  //  const [loading, setloading] = useState(false)
    const {gifs}=useContext(GifsContext)
    const {gif,loading}=useGifByID(params, gifs)
  
    useTitle2({title:gif.title,  description:`giffy is searching for ${decodeURI(gif.title)} in giphy website`})
    return  <>{loading? <p>loading....</p>: <Gif gif={gif}/>}</>
           
    }