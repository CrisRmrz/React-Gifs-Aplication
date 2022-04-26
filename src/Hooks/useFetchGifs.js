import { useEffect, useState } from "react"
import { getGifs } from "../Helpers/GetGifs";

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data : [],
        loading: true
    });

    useEffect( ()=> {

        getGifs( category )
            .then( res => { 
                
                

                    setState({  
                        data : res,
                        loading: false })
                         })

                
                

    },[ category ]);

    return state;

}


