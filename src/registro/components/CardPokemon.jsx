

import { useContext } from 'react'
import { RegistroContext } from '../context/RegistroContext'
import { useFechtApiPokemon } from '../hooks/useFechtApiPokemon'
import  '../stylesCard.css'
import { CardLoading } from './CardLoading'



export const CardPokemon = ({url, integrantes, setIntegrantes, setIscomplete}) => {
    
    const estado = useFechtApiPokemon(url)
    const { cargando, data } = estado
    

    const {dataregistro} = useContext( RegistroContext )
    const { pokemones } = dataregistro

    // const onNewIntegrant = ( { id, name} ) => {
    const onNewIntegrant = ( pokemon ) => {
 
        const item = integrantes.find(isExist)
        // console.log(item)
        
        if( item !== undefined ){
            setIscomplete({flag: true, message:'El Pokemon seleccionado ya existe!!!'})
            return
        }
        
        
        if ( integrantes.length < 6 ){
            const newIntegrante = {
                id: pokemon.id,
                name: pokemon.name,
                type: pokemon.types[0].type.name,
                hp: pokemon.stats[0].base_stat,
                attack: pokemon.stats[1].base_stat,
                defense: pokemon.stats[2].base_stat,
                done: false,
            }

            setIntegrantes([ ...integrantes, newIntegrante ])
            setIscomplete({flag: false, message:''})
    
            pokemones.push({
                id: pokemon.id,
                name: pokemon.name,
                type: pokemon.types[0].type.name,
                hp: pokemon.stats[0].base_stat,
                attack: pokemon.stats[1].base_stat,
                defense: pokemon.stats[2].base_stat,
                done: false,
            })
        }else{
            setIscomplete({flag: true, message:'El equipo está completo'})
        }


    }

    function isExist(cards) {
        return cards.id === data.id;
    }
 
  return (
    <>


        {
            cargando
            ?
                <div className="col-3 mb-2">
                    <CardLoading />
                </div>
            :   
                <>
                
                <div className="col-3 mb-2">
                    <div id='card'>
                        <p className="hp">
                            <span>HP </span>
                            {data.stats[0].base_stat}
                        </p>
                        <img src={data.sprites.other.dream_world.front_default} className="img-fluid"/>
                        <h3 className="poke-name">{data.name}</h3>
                        
                        <div className="stats">
                            <div>
                                <h3 className='statsPow'>{data.stats[1].base_stat}</h3>
                                <p>Attack</p>
                            </div>
                            <div>
                                <h3>{data.stats[2].base_stat}</h3>
                                <p>Defense</p>
                            </div>
                            <div>
                                <h3>{data.stats[3].base_stat}</h3>
                                <p>Special</p>
                            </div>
                        </div>

                        <div className='mt-2 text-end'>
                            <button type="button" className="btn btn-secondary btn-sm" onClick={ () => onNewIntegrant(data)}>Seleccionar</button>
                        </div>

                    </div>

                 </div>
                </>
        }
    </>
  )
}
