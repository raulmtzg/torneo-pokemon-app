import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UsuarioContext } from "../../panelAdmin/context/UsuarioContext";
import { FormularioLogin } from "../components/FormularioLogin"


export const LoginPage = () => {

  const { datosUsuario } = useContext( UsuarioContext );
  const { isLogged } = datosUsuario;
  
  return (

      <>
        
        {
          !isLogged ?
              <section className="d-flex align-items-center" style={{height: '100vh'}}>
                  <div className="container ">
                    <div className="row justify-content-center">
                      <div className="col-12 text-center">
                        <h4>Iniciar Sesión</h4>
                      </div>
                      <div className="col-3">               
                            <FormularioLogin /> 
                      </div>
                    </div>
                  </div>

              </section>
            : (
                <Navigate to="/admin" replace={true} />
              )

        }
      
      </>
    

      
    
    
      
    
  )
}
