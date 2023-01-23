import { ImagenTorneo } from "./ImagenTorneo"
import { OpcionesTorneo } from "./OpcionesTorneo"


export const HomeContainer = () => {
  return (
    <>
        <div className="container-fluid bg-light">
            <div className="row vh-100 justify-content-around align-items-center">
                <ImagenTorneo/>
                
                <OpcionesTorneo/>

            </div>

        </div>
    </>
  )
}
