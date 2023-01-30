import { TiposPokemonList } from "./TiposPokemonList"
import pokemon_types from '../../../assets/pokemon_types.png';

export const TiposPokemon = () => {
  return (
    <>
        <div className="row mt-5 mb-5">
          <div className="col-12 text-center">
            <h3>Tipos de Pokemones seleccionados</h3>
          </div>
          <div className="col-3 text-center">
            <img src={pokemon_types} className="rounded  img-fluid" alt="logo_torneo"/>
          </div>
          
            <TiposPokemonList />
                    
        </div>
    
    </>
  )
}
