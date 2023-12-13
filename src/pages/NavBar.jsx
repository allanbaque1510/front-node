import React from 'react'
import { useAuth } from '../context/AuthContext';
const NavBar = ({children}) => {
  const {isAuthenticated,logOut}=useAuth();
  console.log(isAuthenticated)
  return (
    <div className='container'>
      <nav>
        <h1>Programa xd</h1>
        {isAuthenticated?
          <section className='log-reg'>
            <button onClick={logOut}>Cerrar Session</button>
            
          </section>  
            :
          <section className='log-reg'>
            <a href='/login'>Iniciar Sesion</a>
            <a href='/registro'>Registro</a>
          </section>
          }
      </nav>
      {children}
    </div>
  )
}

export default NavBar