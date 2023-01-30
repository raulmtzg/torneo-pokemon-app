import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

import { EntranadoresContainer } from "../components/entrenadores/EntranadoresContainer";
import { ModalDetalleEntrenador } from "../components/entrenadores/ModalDetalleEntrenador";
import { Paginacion } from "../components/entrenadores/Paginacion";
import { UsuarioContext } from "../context/UsuarioContext";



export const EntrenadoresPage = () => {

  const { datosUsuario } = useContext( UsuarioContext );
  const { isLogged } = datosUsuario;

  const [datosmodal, setDatosmodal] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (entrenador, pokemons) => {
    
    setDatosmodal({
      entrenador,
      pokemons
    })
    
    setShow(true)

  };

  return (
    <>

      {
          isLogged ?
            (
              <div className="container">
                <EntranadoresContainer handleShow={handleShow} />
                {/* <Paginacion/> */}
                <ModalDetalleEntrenador show={show} onHide={handleClose} datosmodal={datosmodal} />                            
              </div>
            )
          : (
              <Navigate to="/login" replace={true} />
            )

      }
   
    </>
  )
}
