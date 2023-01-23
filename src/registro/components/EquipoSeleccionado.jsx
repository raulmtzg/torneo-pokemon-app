
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { EquipoList } from "./EquipoList";


export const EquipoSeleccionado = ( {integrantes, onDeleteIntegrante} ) => {

  const [inscrito, setInscrito] = useState({status: false, message:''})
  const [enviado, setEnviado] = useState(false)
  const [isfinish, setIsfinish] = useState(false);

  const inscribirEntrenador = async() => {
    const entrenador = JSON.parse(localStorage.getItem('data'))    
    const pokemones = JSON.parse(localStorage.getItem('pokemones'))  
    
    const post = {
      nombre: entrenador.nombre,
      apellidos: entrenador.apellidos,
      correo: entrenador.correo,
      fecha_nacimiento: entrenador.fechanacimiento,
      id_pokemon1: pokemones[0].id,
      id_pokemon2: pokemones[1].id,
      id_pokemon3: pokemones[2].id,
      id_pokemon4: pokemones[3].id,
      id_pokemon5: pokemones[4].id,
      id_pokemon6: pokemones[5].id,

    }

    const requestOptions = {
      method: 'POST',
      'mode': 'cors',
      headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*' 
        },
      body: JSON.stringify(post)
    };

    const response = await fetch('http://localhost:8000/api/competidores/', requestOptions);
    const result = await response.json();

    setEnviado(true);
    console.log(result)
    
    if( result.status){
      const text = result.message;
      setInscrito({status: true, message:text});
      redirectHome();
      
    }else{
      const text = result.err.correo[0];
      setInscrito({status: false, message:text})
      
    }
  
  }

  const redirectHome = () => {
    setTimeout(() => {

      localStorage.removeItem('data');
      localStorage.removeItem('pokemones');
      setIsfinish(true);
      
    }, 3000);
  }
   
  return (
    <>
        <div className="row mb-3 mt-3">
            <div className="col-12 text-center">
                <h4>Equipo Seleccionado (hasta 6 pokemones)</h4>
            </div> 

           {
            enviado ?
                inscrito.status ?
                    <div className="alert alert-success" role="alert">
                        {inscrito.message}
                    </div>
                   
                  :
                    <div className="alert alert-danger" role="alert">
                        {inscrito.message}
                    </div>
              :''
           }
            
            
            <div className="col-12 mb-3">

              <Link to="/registro">
                <button type="button" className="btn btn-dark btn-sm">Regresar</button>
              </Link>

                <button type="button" className="btn btn-success btn-sm mx-5" onClick={() => inscribirEntrenador()}>Inscribirme</button>

            </div>

            <div className="col-12">
                <EquipoList integrantes={ integrantes } onDeleteIntegrante = { onDeleteIntegrante }/>
            </div>  

        </div>

        {isfinish && (
            <Navigate to="/" replace={true} />
        )}
    </>
  )
}
