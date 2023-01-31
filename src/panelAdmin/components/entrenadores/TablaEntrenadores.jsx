import { useContext, useState } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import { useFechtApi } from "../../hooks/useFechtApi";
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "../../../components/Icon";
import { EntrenadorRow } from "./EntrenadorRow";
import { Paginacion } from "./Paginacion";


export const TablaEntrenadores = ({ onShowModal }) => {

    const { datosUsuario } = useContext( UsuarioContext );

    const [url, setUrl] = useState('http://localhost:8000/api/competidores');
    const estado = useFechtApi(url, datosUsuario.accessToken);
    const {cargando, data} = estado;

    const onNextPage = (url) => {

        if( url !== null){
            setUrl(url)
        }

      }
    
    
  return (
    <>
        {
            cargando ?
                <div className="text-center">
                    <Icon  icon={faSpinner} css={ 'fa-spin fa-2x' } />
                </div>
            :
                <>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nombre Apellidos</th>
                            <th scope="col">Pokémon 1</th>
                            <th scope="col">Pokémon 2</th>
                            <th scope="col">Pokémon 3</th>
                            <th scope="col">Detalle</th>
                        </tr>
                        </thead>
                            
                        <tbody>
                            {
                                data.entrenadores.length == 0 ?
                                    <tr className="text-center">
                                        <td colSpan="6">No existen registros</td>
                                    </tr>
                                :
                                data.entrenadores.map( ( {entrenador, pokemons} ) => (                            
                                    <EntrenadorRow 
                                        key={ entrenador.id }
                                        entrenador={entrenador}
                                        pokemons={ pokemons}
                                        onShowModal={onShowModal}                                                                
                                    />
                                ))
                            }

                        </tbody>
                    </table>

                    { data.length == 0 ? '' : <Paginacion paginate={data.paginate} onNextPage={ onNextPage } /> }

                </>

        }
        
                
            
    </>
  )
}
