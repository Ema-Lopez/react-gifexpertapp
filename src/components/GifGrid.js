
import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ({ categoria }) => {

    const {data:imagenes, loading} = useFetchGifs(categoria);


    return (
        <>
            <h3 className='category-text category-text::first-letter animate__bounce'> {categoria} </h3>

            {loading && <p className='animate__flash'>Loading...</p> }

            { <div className='container animate__swing'>

                {
                    imagenes.map(img => (
                        < GiftGridItem
                            key={img.id}
                            {...img} />
                    ))
                }
            </div> }

        </>
    )
}
