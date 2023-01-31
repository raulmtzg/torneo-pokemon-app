import { useContext, useState } from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { Icon } from "../../../components/Icon";
import { useFechtApiPokemon } from "../../../registro/hooks/useFechtApiPokemon";
import { UsuarioContext } from "../../context/UsuarioContext";

export const CardPokemon = ({personaje}) => {
  

  const { datosUsuario } = useContext( UsuarioContext );

  const {pokemon} = personaje;

  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${pokemon[0].pokemon_id}`);
  const estado = useFechtApiPokemon(url, datosUsuario.accessToken);
  const {cargando, data} = estado; 
   
  return (

    <>
      {
        cargando ?
            <div className="text-center">
                <Icon  icon={faSpinner} css={ 'fa-spin fa-2x' } />
            </div>
        :
            <div className="d-flex position-relative w-100">
                <img src={data.sprites.other.dream_world.front_default} className="flex-shrink-0 me-3 imgPokemonCard" alt="..." />
                <div className="w-100">
                <h5 className="mt-0">Pokémon más utilizado</h5>
                <p>Name: {data.name}</p>                                
                <div className="d-flex justify-content-between">
                    <span className="float-start">HP: {data.stats[0].base_stat}k</span>
                    <span className="float-end">Attack: {data.stats[1].base_stat}k</span>
                    <span>Defense: {data.stats[2].base_stat}k</span>
                </div>
                
                </div>
            </div>
      }
    </>
  )
}
