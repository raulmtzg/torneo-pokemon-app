import { Route, Routes } from "react-router-dom"

import { HomePage } from "../principal/pages/HomePage"
import { LoginPage } from "../auth/pages/LoginPage"
import { RegistroRoutes } from "../registro/routes/RegistroRoutes"





export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path="login" element={ <LoginPage />} />
            
            <Route path="/*" element={ <RegistroRoutes />} />                        


            <Route path="/" element={ <HomePage />} />
            {/* <Route path="adminpanel" element={ <PanelAdminRouter />} /> */}
            {/* <Route path="adminpanel/estadisticas" element={ <EstadisticasPage />} /> */}
            
        
        </Routes>
    </>
    
  )
}
