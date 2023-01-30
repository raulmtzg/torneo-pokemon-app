import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { UsuarioContext } from "../context/UsuarioContext";

import { CardsHeader } from "../components/estadisticas/CardsHeader";
import { CardsEstadistica } from "../components/estadisticas/CardsEstadistica";
import { TiposPokemon } from "../components/estadisticas/TiposPokemon";


export const EstadisticasPage = () => {

 
  const { datosUsuario } = useContext( UsuarioContext );
  const { isLogged } = datosUsuario;

  return (
    <>

        {
          isLogged ?
            (
              <div className="container">
                <CardsHeader />
                <CardsEstadistica />
                <TiposPokemon />
              </div>

            )
          : (
              <Navigate to="/login" replace={true} />
            )

        }


        

      

    
    </>
  )
}
