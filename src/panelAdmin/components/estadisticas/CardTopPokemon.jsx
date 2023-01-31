
import { useContext, useState } from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../../../components/Icon';
import { UsuarioContext } from '../../context/UsuarioContext';
import { useFechtApi } from '../../hooks/useFechtApi';
import { CardPokemonTopItem } from './CardPokemonTopItem'

export const CardTopPokemon = () => {

  const { datosUsuario } = useContext( UsuarioContext );

  const [url, setUrl] = useState('http://localhost:8000/api/pokemontop');
  const estado = useFechtApi(url, datosUsuario.accessToken);
  const {cargando, data} = estado;
    
  return (
    <>

        <div className={`col-5 bg-success bg-opacity-25 pt-5 pb-5 rounded mx-4`}>
            <h5 className="text-center mb-3"> Top 5 Pokémones </h5>

            {
              cargando ?
                <div className="text-center">
                    <Icon  icon={faSpinner} css={ 'fa-spin fa-2x' } />
                </div>

                 
              : 
                data.pokemons.map( ( pokemon ) => (                            
                    <CardPokemonTopItem 
                        key={ pokemon.pokemon_id }
                        pokemon={pokemon}                            
                    />
                ))
            }
                       
            
        </div>
    </>
  )
}
