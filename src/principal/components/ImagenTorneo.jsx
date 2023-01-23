
import logo_torneo from '../../assets/torneo_pokemon.webp';

export const ImagenTorneo = () => {
  return (
    <>
        <div className="col-6 text-center">
            <img src={logo_torneo} className="rounded  img-fluid" alt="logo_torneo"></img>
        </div>
    </>
  )
}
