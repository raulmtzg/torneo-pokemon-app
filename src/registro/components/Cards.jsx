
import { CardPokemon } from './CardPokemon'

export const Cards = ({ results, integrantes, setIntegrantes, setIscomplete }) => {
  
  return (
    <>
        <div className="row">
            {

                results.map( ( card ) => (                            
                        <CardPokemon 
                            key={ card.name }
                            url={ card.url}
                            setIntegrantes ={setIntegrantes}
                            integrantes = {integrantes}                            
                            setIscomplete = {setIscomplete}                            
                        />
                ))
            }
         
        </div>
    </>
  )
}
