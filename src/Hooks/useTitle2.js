import {useEffect} from 'react'

export default function useTitle2({title, description}) {
   
    useEffect(() => {
        if(title){
        document.title=`giffy | ${title} `
        console.log("paso 2");
        }
        return ()=> {
            console.log("paso 1");
        }
    }, [title])
    
    useEffect(() => {
        if(description){
            const metaDescription=document.querySelector('meta[name="description"]')
            metaDescription.setAttribute('content', description)
        }
    }, [description])
    
}
