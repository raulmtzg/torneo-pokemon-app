import { Modal } from "react-bootstrap";
import { ItemPokemon } from "./ItemPokemon";

export const ModalDetalleEntrenador = ({ show, onHide, datosmodal}) => {

  const {entrenador, pokemons} = datosmodal;
 
  return (
    <>
        <Modal
        size="lg"
        show={show} 
        onHide={onHide}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Detalle de Equipo</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <h5 className="text-center">Entrenador: {entrenador}</h5>

        <ul className="list-group list-group-flush">

          {
            pokemons !== undefined 
              ?
                pokemons.map( ( pokemon ) => (                            
                  <ItemPokemon 
                      key={ pokemon.id }
                      pokemonId = {pokemon.pokemon_id}                                                               
                  />
                ))
              :''
          }
          
        </ul>


        </Modal.Body>
        
      </Modal>
    </>
  )
}
