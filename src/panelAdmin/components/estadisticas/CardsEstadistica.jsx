import { CardTopHp } from "./CardTopHp"
import { CardTopPokemon } from "./CardTopPokemon"


export const CardsEstadistica = () => {
  return (
    <>
        <div className="row">

            <CardTopPokemon />
            <CardTopHp />
            {/* <CardEstadistica titleCard='5 Pokémones con más HP' colorCard='primary'/> */}

        </div>
    </>
  )
}
