import { useState } from "react"
import { RegistroContext } from "./RegistroContext"

const dataregistro = {
  entrenador: {
    nombre: '',
    apellidos: '',
    correo: '',
    fechanacimiento: '',
  },
  pokemones:[]
}


export const RegistroProvider = ({ children }) => {

  // const [dataregistro, setDataregistro] = useState()


  return (
    <RegistroContext.Provider value={{ dataregistro }}>
        { children }
    </RegistroContext.Provider>
  )
}
