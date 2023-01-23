import { EquipoItem } from "./EquipoItem"


export const EquipoList = ({ integrantes = [], onDeleteIntegrante}) => {
    
  return (
    <>  
        <ol className="list-group list-group-flush list-group-numbered">
            {
                integrantes.map( integrante => (

                    <EquipoItem key={integrante.id} integrante={ integrante} onDeleteIntegrante = { onDeleteIntegrante } />

                ))
            }
        </ol>
        
    </>
  )
}
