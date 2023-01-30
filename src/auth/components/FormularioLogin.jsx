
import { useState,useEffect, useContext } from "react";

import { Navigate } from "react-router-dom";
import { UsuarioContext } from "../../panelAdmin/context/UsuarioContext";
import { useForm } from "../../registro/hooks/useForm";

const init = () => {
    return {        
        email: '',
        password: ''        
    };
  }

export const FormularioLogin = () => {

    const [isLogin, setIsLogin] = useState(false);
    const { datosUsuario } = useContext( UsuarioContext );

    const { formState, onInputChange, onResetForm} = useForm( init);
    const { email, password } = formState


    const validateCredentials = () => {
        
        if(datosUsuario.isLogged) {            
            setIsLogin(true);                   
        } 

    }
    
    useEffect(() => {
      validateCredentials();
    }, [isLogin])
    
    

    const handleSubmit = async(e) => {
        e.preventDefault();
       
        const post = {
           email,
           password
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
      
          const response = await fetch('http://localhost:8000/api/login', requestOptions);
          const result = await response.json();

          

          if( result.status ){

            datosUsuario.accessToken = result.accessToken,
            datosUsuario.token_type = result.token_type,
            datosUsuario.user = result.user
            datosUsuario.isLogged = true

            localStorage.setItem('credentialUser', JSON.stringify(datosUsuario));

            setIsLogin(true);
            
          }

    }

  return (
    <>
        <form onSubmit={ handleSubmit }>
            <div className="mb-3">
                <label className="form-label">Correo</label>
                <input 
                    type="email" 
                    className="form-control"
                    name="email"                    
                    onChange = { onInputChange }
                    required
                />                      
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input 
                    type="password" 
                    className="form-control"
                    name="password"
                    onChange = { onInputChange }
                    required
                />
            </div>                    
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        {isLogin && 
            (
                <Navigate to="/admin" replace={true} />
            )
        }

        
    </>
  )
}
