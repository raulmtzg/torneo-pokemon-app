import { Navigate, Route, Routes } from "react-router-dom"

import { HomePage } from "../principal/pages/HomePage"
import { LoginPage } from "../auth/pages/LoginPage"
import { RegistroRoutes } from "../registro/routes/RegistroRoutes"
import { PanelAdminRoutes } from "../panelAdmin/routes/PanelAdminRoutes"
import { UsuarioProvider } from "../panelAdmin/context/UsuarioProvider"


const datosUsuario = {

  accessToken: '',
  token_type: '',
  user: {},
  isLogged: false
}

const init = () => {
  return JSON.parse(localStorage.getItem('credentialUser')) || datosUsuario;
}


export const AppRouter = () => {

  const setUserCredentials = init();
  
  return (
    <>
      <UsuarioProvider datosUsuario={setUserCredentials}>
          <Routes>

              <Route path="login" element={ <LoginPage />} />
              
              <Route path="/*" element={ <RegistroRoutes />} />

              <Route path="admin/*" element={ <PanelAdminRoutes />} />  

              {/* {
                useraccess.isLogged ?  
                  : <Route path="/" element={ <HomePage />} />
              } */}

                                  


              <Route path="/" element={ <HomePage />} />
              {/* <Route path="adminpanel" element={ <PanelAdminRouter />} /> */}
              {/* <Route path="adminpanel/estadisticas" element={ <EstadisticasPage />} /> */}
              
          
          </Routes>

      </UsuarioProvider>
    </>
    
  )
}
