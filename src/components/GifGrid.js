import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({category}) => {
    

    const {data:images,loading}= useFetchGifs(category);
    
    

    
    
    return (
        <>
        <h3 className="animate__animated animate__fadeIn category-title">{category}</h3>
        
        { loading && <p className="animate__animated animate__flash">Loading...</p>}

        <div className= "card-grid">
            
                {images.map( img =>
                        <GifGridItem 
                        key = {img.id}
                        {...img}/> //se usa el spread operator para pasar todo el objeto como props
                )}
            
        </div>
        </>
    )
}

export default GifGrid
