import React, {Suspense} from 'react'
import useNearScreen from '../Hooks/useNearScreen'

/**
 * React Lazy sirve para cargar trozos de código, solamente cuando se le pide. 
 * en este caso, se dispara con la propiedad distancia, si esta cerca de renderizarse
 */
const Trending = React.lazy(
    () => import('./Trending')
)

export default function LazyTrending() {
    /**
     * Hook donde configuramos al observer de la distancia. isNear devuelve si esta cerca o no
     */
    const {isNear, referencia} = useNearScreen({distancia:"100px"})
    /**
     * Suspenses, es imprescindible para el react lazy, fallback imprescindible para Suspense
     */
    return <div ref={referencia}>
                <Suspense fallback={null}>
                {isNear? <Trending/> : null}
                </Suspense>
            </div>
}
