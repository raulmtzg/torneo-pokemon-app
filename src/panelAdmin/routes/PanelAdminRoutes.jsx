import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar"

import { EstadisticasPage} from "../pages/EstadisticasPage"
import { EntrenadoresPage } from "../pages/EntrenadoresPage"








export const PanelAdminRoutes = ({useraccess, setUseraccess}) => {
  return (
    <>
      
        <Navbar setUseraccess={setUseraccess}/>
        <Routes>

            {/* <Route path="/adminpanel" element={ <HomePanelPage />} /> */}
            
            <Route path="estadisticas" element={ <EstadisticasPage />} />
            <Route path="entrenadores" element={ <EntrenadoresPage />}
            />
            <Route path="/" element={ <Navigate to="entrenadores" />} />
        
        </Routes>
      
    </>
    
  )
}
