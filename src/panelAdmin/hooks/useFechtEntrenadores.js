import { useEffect, useState } from "react"


export const useFechtEntrenadores = (url, token) => {

    const [resultado, setResultado] = useState({cargando:true, data:null})

    useEffect(() => {
        getDatos(url)
      }, [url])

    const getDatos = async ( url ) => {

        try {

            setResultado({cargando:true, data:null})

            const requestOptions = {
                method: 'GET',
                'mode': 'cors',
                headers: { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    Authorization: `Bearer ${token}`
                },
                
              };

            const resp = await fetch(url, requestOptions)
            const data = await resp.json();

            setResultado({cargando:false, data})
            
        } catch (error) {

            console.log(error)
            
        }


    }

    return resultado

   
    
 
}
