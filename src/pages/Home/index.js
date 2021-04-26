import React, {useState} from 'react'
import {useLocation} from 'wouter'
import SearchResults from '../../pages/SearchResults'
import '../../App.css'
import LazyTrending from '../../components/LazyTrending'
import useTitle2 from 'Hooks/useTitle2';


export default function Home() {
    
    const [keyword, setKeyword] = useState("")
    const [path, setPath] = useLocation()

    console.log(path);
        //---------------------------------------------------
    const handleSubmit =(evnt) => {
        evnt.preventDefault()
        //navegar a otra ruta
        setPath(`/search/${keyword}`)
    }

    const handleChange = (evnt) => {
        setKeyword(evnt.target.value)
    }
    useTitle2({description:'giffy is a giphy searcher'})
    return (
        <>
            <form onSubmit={handleSubmit}>
                <button>search</button>
                <input
                    placeholder="search for gifs..." 
                    onChange={handleChange}
                    type="text" 
                    value={keyword}
                />
                
            </form>
            <div className="App-main">
                <div className="App-results">
               
                <SearchResults params={{keyword:"giphy"}}/>
                </div>
                <LazyTrending/>
                
            </div>

        </>
    )
}
