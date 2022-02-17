import React, { useState, useEffect } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  /*  const [images, setImages] = useState([]) */

  //con los corchetes solo se llama una sola vez
  //esos componentes seria como el didMount de REact que se usa en las clases
  //el segundo parametro en el useeffec son la lista de dependencias
  /* useEffect(() => {
    getGifs(category)
      .then( setImages )
  }, [ category ]) */

  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>{category}</h3>

      {loading && <p className='animate__animated animate__flash'>Loading</p> }

      <div className='card-grid'>
        <ul>
          {
            images.map(img => (
              <GifGridItem
                key={img.id}
                {...img}
              />
            ))
          }
        </ul>
      </div>
    </>
  )
}
