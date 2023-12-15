import React from 'react'
import { useAuth } from '../context/AuthContext';
import { FaSignOutAlt,FaUpload,FaHome   } from "react-icons/fa";
import { redirect } from 'react-router-dom';
const NavBar = ({children}) => {
  const {isAuthenticated,logOut,loading}=useAuth();
  
  const cerrarSesion = ()  =>{
    logOut()
    return redirect("/login");
  }
  return (
    <div className='container'>
      <nav>
        <section className='log-reg'>
          <h1 >Servidor 1</h1> 
          <a href="/"><FaHome />Inicio</a>
          {isAuthenticated?
          <a href="/upload"><FaUpload />Subir imagen</a>
          :null}
        </section>
        {loading?null:
        (isAuthenticated?
          <section className='log-reg'>
          <button onClick={cerrarSesion}><FaSignOutAlt />Salir</button>
          
          </section>  
          :
          <section className='log-reg'>
            <a href='/login'>Iniciar sesion</a>
            <a href='/registro'>Registrarse </a>
          </section>
          )
        }
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}

export default NavBar