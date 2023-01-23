import { Link } from "react-router-dom"

export const OpcionesTorneo = () => {
  return (
    <>
        <div className="col-6 ">
            <div className='row mb-5'>
                <div className='text-center'>
                    <h3>Bienvenido al Torneo Pokémon</h3>
                </div>

            </div>
            <div className='row'>
                <div className='col-6 text-center d-grid gap-2'>
                <Link                     
                    to="registro"
                >                    
                    <button type="button" className="btn btn-primary btn-lg">Registar Equipo</button>
                </Link>
                </div>
                <div className='col-6 text-center d-grid gap-2'>
                    <button type="button" className="btn btn-primary btn-lg">Iniciar Sesión</button>
                </div>

            </div>
        </div>
    </>
  )
}
