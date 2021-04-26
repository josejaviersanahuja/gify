import React from 'react';
import Gif from './Gif';


export default function ListOfGifs({gifs}) {
    
  
    return (
        <div className="listOfGifs">
            {gifs.map(e=>
                 <Gif className='listOfGifs' gif={e} key={e.id}/>
            )}   
        </div>
    )
}
