

export const EquipoItem = ({ integrante,  onDeleteIntegrante }) => {
  return (
    <>
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{ integrante.name }</div>                          
            </div>
            <button 
              type="button" 
              className="btn btn-danger btn-sm"
              onClick={ () => onDeleteIntegrante( integrante.id ) }
            >
              Eliminar
            </button>                       
        </li>
    </>
  )
}
