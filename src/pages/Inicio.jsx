import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext';
import Galeria from '../components/Galeria';

const Inicio = () => {
  const {imagenes,verTodasLasImagenes,isAuthenticated}=useAuth();

 
  useEffect(() => {
    verTodasLasImagenes()
  }, [])
  

  return (
    <>
    {imagenes!==null?
      <Galeria/>  
      :null}
    </>
  )
}

export default Inicio