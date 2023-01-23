

import { useEffect } from "react";
import { useReducer, useState } from "react";
import { CardLoading } from "../components/CardLoading";
import { Cards } from "../components/Cards";
import { EquipoSeleccionado } from "../components/EquipoSeleccionado";


import { useFechtApiPokemon } from "../hooks/useFechtApiPokemon";

const init = () => {
  return JSON.parse(localStorage.getItem('pokemones')) || [];
}

export const PokemonesPage = () => {

  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const estado = useFechtApiPokemon(url)
  const { cargando, data } = estado

  const [integrantes, setIntegrantes] = useState(init);
  const [iscomplete, setIscomplete] = useState({flag: false, message:''})

  
  useEffect(() => {
    localStorage.setItem('pokemones', JSON.stringify( integrantes));
    
  }, [integrantes])

  const handleDeleteIntegrante = (id) => {    
    setIntegrantes(integrantes.filter( integrante => integrante.id !== id))
    setIscomplete({flag: false, message:''})
  }
  

  const onPreviousPage = () => {
    if( data.previous !== null ){
      setUrl(data.previous)
    }
  }

  const onNextPage = () => {
    if( data.next !== null ){
      setUrl(data.next)
    }
  }

  return (
    <>
      <div className="container">                       
        <EquipoSeleccionado 
          integrantes ={ integrantes }
          onDeleteIntegrante = { handleDeleteIntegrante }
          
        /> 
        {
          // console.log(iscomplete.message)
          iscomplete.flag && <div className="alert alert-danger" role="alert">{iscomplete.message}</div>
        }         
        <hr />

        <div className='row'>              

              <div className="col-sm-12">

                {
                  cargando
                  ?
                    <div className="row">
                      <div className="col-3">
                        <CardLoading />
                      </div>
                    </div> 
                  :
                  
                    <div className="row">
                      <div className=" col-12">
                        <Cards results={data.results} 
                              integrantes = {integrantes} 
                              setIntegrantes={setIntegrantes}
                              setIscomplete ={setIscomplete}                             
                        />
                      </div>

                      <div className="col-12 text-end mt-5 mb-5">                   
                          <button type="button" className="btn btn-primary mx-5" onClick={ () => onPreviousPage() }>Anterior</button>
                          <button type="button" className="btn btn-primary" onClick={() => onNextPage() }>Siguiente</button>
                      </div>

                    </div>
                }

              </div>
                

          </div>

      </div>
    </>
    
  )
}

