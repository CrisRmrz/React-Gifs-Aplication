import React, { useState,useEffect } from 'react';
import { getGifs } from '../Helpers/GetGifs';
import { useFetchGifs } from '../Hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

function GifGrid({ category }) {


    const { data, loading} = useFetchGifs( category );

  return (
    
    <div className='cards-flex'>
        <h3 className='category animate__animated animate__backInLeft' > { category } Gifs </h3>
      
        { loading && <p>Loading</p> }

            
              <div className='flex-container'>
              { data.map((img)=> 
                 ( <GifGridItem
                            key={ img.id }
                            { ...img } 
                           /> )
               ) }
            </div>
            
            
        
    </div>
  );
};

export default GifGrid;