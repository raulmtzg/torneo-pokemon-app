import { Icon } from "../../../components/Icon"



export const EntrenadoresCard = ({icon, estilo }) => {
  return (
    <>
        <div className="d-flex position-relative">              
            <div>
            <h5 className="mt-0">Entrenadores</h5>
            <p>Total de entrenadores registrados en el torneo</p>                
            <div className="containerCardEntrenador">
                <p className="float-start cantidadEntrenadores">10</p>
                <p className="float-end"><Icon  icon={icon} css={ estilo } /></p>
            </div>
            </div>
        </div>
    </>
  )
}

// 
