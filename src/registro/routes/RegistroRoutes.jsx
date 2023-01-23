
import { Navigate, Route, Routes } from "react-router-dom"
import { RegistroProvider } from "../context/RegistroProvider"
import { FormularioPage } from "../pages/FormularioPage"
import { PokemonesPage } from "../pages/PokemonesPage"


export const RegistroRoutes = () => {
  return (
    <RegistroProvider>
         <Routes>

            <Route path="registro" element={ <FormularioPage />} />
            <Route path="/registro/pokemones" element={ <PokemonesPage />} />


            <Route path="/" element={ <Navigate to="/registro" />} />
        
        </Routes>
    </RegistroProvider>
  )
}
