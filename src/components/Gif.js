import React from 'react'
import {Link} from 'wouter'
import "./Gif.css"


export default function Gif({gif}) {

    return (
        
        <Link to={`/gif/${gif.id}`}  >
          <img 
          style={{cursor:'pointer'}}
          className="Gif"
          src={gif.url} 
          alt={gif.id}>
          </img>
          </Link>

    )
}
