import React from 'react'
import { useAuth } from '../context/AuthContext';
import { FaSignOutAlt } from "react-icons/fa";
import { redirect } from 'react-router-dom';
const NavBar = ({children}) => {
  const {isAuthenticated,logOut}=useAuth();

  const cerrarSesion = ()  =>{
    logOut()
    return redirect("/login");
  }
  return (
    <div className='container'>
      <nav>
        <section className='log-reg'>
          <h1 >IMGv:</h1> 
          <a href="/">Inicio</a>
        </section>
        {isAuthenticated?
          <section className='log-reg'>
            <button onClick={cerrarSesion}><FaSignOutAlt />Salir</button>
            <a href='/profile'>Perfil</a>
          </section>  
            :
          <section className='log-reg'>
            <a href='/login'>Iniciar sesion</a>
            <a href='/registro'>Registrarse </a>
          </section>
          }
      </nav>
      {children}
    </div>
  )
}

export default NavBar