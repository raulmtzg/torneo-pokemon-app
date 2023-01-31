import { useContext, useState } from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { UsuarioContext } from "../../context/UsuarioContext";
import { useFechtApi } from "../../hooks/useFechtApi";
import { Icon } from "../../../components/Icon"



export const EntrenadoresCard = ({icon, estilo }) => {

  const { datosUsuario } = useContext( UsuarioContext );

  const [url, setUrl] = useState('http://localhost:8000/api/entrenadores');
  const estado = useFechtApi(url, datosUsuario.accessToken);
  const {cargando, data} = estado;  

  return (
    <>
      {
        cargando ?
              <div className="text-center">
                  <Icon  icon={faSpinner} css={ 'fa-spin fa-2x' } />
              </div>
        :
          <div className="d-flex position-relative">              
              <div>
              <h5 className="mt-0">Entrenadores</h5>
              <p>Total de entrenadores registrados en el torneo</p>                
              <div className="containerCardEntrenador">
                  <p className="float-start cantidadEntrenadores">{data.totalEntrenadores}</p>
                  <p className="float-end"><Icon  icon={icon} css={ estilo } /></p>
              </div>
              </div>
          </div>
        
      }
    </>
  )
}

// 
