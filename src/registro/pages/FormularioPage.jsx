import { Link } from "react-router-dom"
import { FormularioRegistro } from "../components/FormularioRegistro"

export const FormularioPage = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-12">
            <h1>Formulario de Registro</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <FormularioRegistro />
          </div>
        </div>
        
      </div>
    </>
  )
}
