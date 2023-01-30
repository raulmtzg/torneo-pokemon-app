import { faUsers } from "@fortawesome/free-solid-svg-icons"
import { CardPokemon } from "./CardPokemon"
import { EntrenadoresCard } from "./EntrenadoresCard"


export const CardsHeader = () => {
  return (
    <>
        <div className="row mt-3 d-flex justify-content-center">

            <div className="col-3 border-start border-5 border-primary shadow p-3 mb-5 bg-body-tertiary rounded mx-3">
            
                <EntrenadoresCard icon={faUsers} estilo='iconCardAdmin' />

            </div>

            <div className="col-3 border-start border-5 border-primary shadow p-3 mb-5 bg-body-tertiary rounded mx-3">
            
                <CardPokemon />

            </div>
        </div>
    </>
  )
}
