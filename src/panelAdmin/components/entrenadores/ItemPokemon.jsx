import { Icon } from "../../../components/Icon";
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { useFechtApiPokemon } from "../../../registro/hooks/useFechtApiPokemon";

export const ItemPokemon = ({pokemonId}) => {

    const estado = useFechtApiPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const {cargando, data} = estado;
    
  return (
    <>
        <li className="list-group-item">
            {
                cargando ?
                        <Icon  icon={faSpinner} css={ 'fa-spin' } />                   
                    :
                    <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 rounded-circle">
                        <img src={data.sprites.other.dream_world.front_default}
                            className="pokemonImageDetail"
                            alt="..."
                        />
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <span> Nombre: {data.name} </span>
                            <p> Tipos: 
                                {
                                    data.types.map( ( type ) => (                            
                                        ` ${type.type.name},`
                                    ))
                                }
                            </p>
                        </div>
                    </div>
            }
           
        </li>
    </>
  )
}
