
export const EntrenadorRow = ({entrenador, pokemons, onShowModal}) => {

  const nombreEntrenador = `${entrenador.nombre} ${entrenador.apellidos}`;
  
  return (
    <>
      <tr>
          <th scope="row">{entrenador.id}</th>
          <td>{nombreEntrenador}</td>
          <td> {pokemons[0].nombre} </td>
          <td> {pokemons[1].nombre} </td>
          <td> {pokemons[2].nombre} </td>
          <td>
              <button 
              type="button" 
              className="btn btn-outline-primary btn-sm"
              onClick={ () => onShowModal(nombreEntrenador, pokemons) }
              >
              Detalle
              </button>
          </td>
      </tr>

    </>
  )
}
