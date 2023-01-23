import { Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar"

import { HomePanelPage } from "../pages/HomePanelPage"
import { EstadisticasPage} from "../pages/EstadisticasPage"
import { EntrenadoresPage } from "../pages/EntrenadoresPage"







export const PanelAdminRouter = () => {
  return (
    <>
        <Navbar/>
        <Routes>

            <Route path="/adminpanel" element={ <HomePanelPage />} />
            
            <Route path="estadisticas" element={ <EstadisticasPage />} />
            <Route path="/adminpanel/entrenadores" element={ <EntrenadoresPage />} />
        
        </Routes>
    </>
    
  )
}
