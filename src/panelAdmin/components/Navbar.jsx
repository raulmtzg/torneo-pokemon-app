import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { Link, NavLink, redirect } from 'react-router-dom';
import { UsuarioContext } from '../context/UsuarioContext';
import { useFechtApi } from '../hooks/useFechtApi';


export const Navbar = () => {

    const { datosUsuario } = useContext( UsuarioContext );
    // const [url, setUrl] = useState('');
    // const estado = useFechtApi(url, datosUsuario.accessToken);
    // console.log(estado)
    
    
    const handleLogout = () => {
        datosUsuario.isLogged = false;
        localStorage.removeItem('credentialUser');
        
        setUrl(url);

    }

    // useEffect(() => {
    //   handleLogout(url)
    // }, [url])
    


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/admin/estadisticas"
            >
                Panel Administración
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/admin/entrenadores"
                    >
                        Entrenadores
                    </NavLink>                    
                </div>
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/admin/estadisticas"
                    >
                        Estadísticas
                    </NavLink>
                    
                </div>                                
            </div>

            <div className=" ">
                <ul className="navbar-nav ml-auto">
                    <li className='nav-item nav-link'>
                        <span>{datosUsuario.user.name}</span>
                    </li>
                    
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/login"
                        onClick={ () => handleLogout() }
                    >
                        Logout
                    </NavLink>
                    
                </ul>
            </div>
        </nav>
    )
}