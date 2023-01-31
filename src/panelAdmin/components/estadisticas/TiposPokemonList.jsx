import { useContext, useState } from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { Icon } from "../../../components/Icon";
import { UsuarioContext } from "../../context/UsuarioContext";
import { useFechtApi } from "../../hooks/useFechtApi";
import { TiposPokemonListItem } from "./TiposPokemonListItem";

export const TiposPokemonList = () => {

  const { datosUsuario } = useContext( UsuarioContext );

  const [url, setUrl] = useState('http://localhost:8000/api/pokemontipos');
  const estado = useFechtApi(url, datosUsuario.accessToken);
  const {cargando, data} = estado;
  
  return (
    <>
      {
        cargando ?
        <div className="text-center">
            <Icon  icon={faSpinner} css={ 'fa-spin fa-2x' } />
        </div>
        : <TiposPokemonListItem pokemons={data.pokemons} />
      }
    </>
  )
}
