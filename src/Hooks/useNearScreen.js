import {useState, useEffect, useRef} from 'react'
/**
 * si la pantalla esta cerca (a una distancia menor de "distancia") del objeto a renderizar con la referencia externalRef 
 * isNear es igual a true.
 * si la pantalla esta lejos (a más de "distancia") de la referencia "externalRef
 * isNear es igual  a false.
 * 
 * once=true, se usa para el lazy load
 * once = false, se usa para el infinity scroll
 * @param {distancia,externalRef,once} param0 
 * @returns isNear 
 */
export default function useNearScreen({distancia='100px', externalRef, once=true}={}) {
    const referencia= useRef();
    const [isNear, setShow] = useState(false)
    useEffect(() => {
        let ref= externalRef? externalRef.current:referencia.current
        
        const onchange = (entries,observer) => {
            const el=entries[0]
            
            if(el.isIntersecting) {
                setShow(true) 
                if(once){observer.disconnect();console.log(el.isIntersecting+ " categoria");}
                else{console.log(el.isIntersecting+ " infity scroll 1");}
                

            }else{if(!once)setShow(false);console.log(el.isIntersecting+ " infinity scroll 2");}
        } 
        const observer= new IntersectionObserver(onchange, { rootMargin:distancia })
        

        if (ref) observer.observe(ref)
    })

    return {isNear, referencia}

}