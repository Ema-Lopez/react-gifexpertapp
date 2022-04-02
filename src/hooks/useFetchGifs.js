import { useEffect, useState } from "react";
import { getGifs, GetGifs } from '../helpers/GetGifs';

export const useFetchGifs = (categoria) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });


    useEffect( () =>  {

        setTimeout(() => {
            
            getGifs( categoria )
             .then(img => {
                 setstate({
                     data: img,
                     loading: false
                 });
             });
        }, 3000);

    }, [categoria])

    return state; 
}