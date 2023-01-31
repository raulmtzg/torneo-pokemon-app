import { useContext, useState } from "react";
import { faSpinner, faUsers } from "@fortawesome/free-solid-svg-icons"
import { UsuarioContext } from "../../context/UsuarioContext";
import { CardPokemon } from "./CardPokemon"
import { EntrenadoresCard } from "./EntrenadoresCard"
import { useFechtApi } from "../../hooks/useFechtApi";
import { Icon } from "../../../components/Icon";


export const CardsHeader = () => {
  const { datosUsuario } = useContext( UsuarioContext );

  const [url, setUrl] = useState('http://localhost:8000/api/pokemonpopular');
  const estado = useFechtApi(url, datosUsuario.accessToken);
  const {cargando, data} = estado;

  return (
    <>
        <div className="row mt-3 d-flex justify-content-center">

            <div className="col-4 border-start border-5 border-primary shadow p-3 mb-5 bg-body-tertiary rounded mx-3">
            
                <EntrenadoresCard icon={faUsers} estilo='iconCardAdmin' />

            </div>

            <div className="col-4 border-start border-5 border-primary shadow p-3 mb-5 bg-body-tertiary rounded mx-3">
              {
                cargando ?
                    <div className="text-center">
                        <Icon  icon={faSpinner} css={ 'fa-spin fa-2x' } />
                    </div>
                    :
                      <CardPokemon personaje={data} />
              }

            </div>
        </div>
    </>
  )
}
