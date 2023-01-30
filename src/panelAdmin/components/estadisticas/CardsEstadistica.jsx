import { CardEstadistica } from "./CardEstadistica"


export const CardsEstadistica = () => {
  return (
    <>
        <div className="row">

            <CardEstadistica titleCard='Pokémones más utilizados' colorCard='success'/>
            <CardEstadistica titleCard='5 Pokémones con más HP' colorCard='primary'/>

        </div>
    </>
  )
}
