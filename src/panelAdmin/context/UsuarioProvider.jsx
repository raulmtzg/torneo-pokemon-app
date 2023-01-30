
import { UsuarioContext } from "./UsuarioContext"

// const datosUsuario = {

//     accessToken: '',
//     token_type: '',
//     user: {}
// }


export const UsuarioProvider = ({ children, datosUsuario }) => {


  return (
    <UsuarioContext.Provider value={{ datosUsuario }}>
        { children }
    </UsuarioContext.Provider>
  )
}
