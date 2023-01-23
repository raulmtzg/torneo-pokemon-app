import React, { useContext } from 'react'
import { useState } from 'react';

import { Navigate } from 'react-router-dom';
import { RegistroContext } from '../context/RegistroContext';
import { useForm } from '../hooks/useForm';


const init = () => {
    return JSON.parse(localStorage.getItem('data')) ||{
        nombre: '',
        apellidos: '',
        correo: '',
        fechanacimiento: ''        
    };
  }

export const FormularioRegistro = () => { 
    
    const [hasdata, setHasdata] = useState(false)
    const {dataregistro} = useContext( RegistroContext )
    const { entrenador } = dataregistro
    

    const { formState, onInputChange, onResetForm} = useForm( init);

    const { nombre, apellidos, correo, fechanacimiento } = formState

    const handleDataForm = async () => {

        if ( nombre == "" || apellidos == "" || correo == "" || fechanacimiento == ""){                     
            const form = document.querySelector('.needs-validation');            
            form.classList.add('was-validated');
            setHasdata(false);
            return
        }

              
        entrenador.nombre = nombre
        entrenador.apellidos = apellidos
        entrenador.correo = correo
        entrenador.fechanacimiento = fechanacimiento
        
        localStorage.setItem('data', JSON.stringify(entrenador));
        setHasdata(true)

        
       

    }

    
  return (
    <>
        <form className="needs-validation ">
            <div className="row mb-3">
                <div className="col-6">
                    <span>Nombre(s)</span>
                    <input 
                        type="text"
                        className="form-control form-control-sm isvalid"
                        placeholder=""
                        name="nombre"
                        value={ nombre }
                        onChange = { onInputChange }
                        required
                    />
                    <div className="invalid-feedback">
                        Este campo es obligatorio.
                    </div>                            
                </div>
                <div className="col-6">
                    <span>Apellidos</span>
                    <input 
                        type="text"
                        className="form-control form-control-sm"
                        placeholder=""
                        name="apellidos"
                        value={ apellidos }
                        onChange = { onInputChange }
                        required
                    />  
                    <div className="invalid-feedback">
                        Este campo es obligatorio.
                    </div>                           
                </div>                        
            </div>
            <div className="row mb-3">
                <div className="col-6">
                    <span>Correo electrónico</span>
                    <input 
                        type="email"
                        className="form-control form-control-sm"
                        placeholder=""
                        name="correo"
                        value={ correo }
                        onChange = { onInputChange }
                        required
                    /> 
                    <div className="invalid-feedback">
                        Este campo es obligatorio.
                    </div>                            
                </div>
                <div className="col-6">
                    <span>Fecha nacimiento</span>
                    <input 
                        type="date"
                        className="form-control form-control-sm"
                        placeholder=""
                        name="fechanacimiento"
                        value={ fechanacimiento }
                        onChange = { onInputChange }
                        required
                    />
                    <div className="invalid-feedback">
                        Este campo es obligatorio.
                    </div> 
                </div>
                
                        
            </div>
            
            <div className="row mb-3">          
                <div className="col-3">
                   
                    <button type="button" 
                            className="btn btn-secondary" 
                            onClick={ onResetForm }>
                                Limpiar
                    </button>  

                </div>
                <div className="col-9 text-end">
                   
                    <button type="button" 
                            className="btn btn-primary" 
                            onClick={ () => handleDataForm() }>
                                Siguiente
                    </button>  

                </div>
            </div>

            {hasdata && (
                <Navigate to="pokemones" replace={true} />
            )}
            
            
        </form>
        
    </>
  )
}
