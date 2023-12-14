import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext';
import Galeria from '../components/Galeria';
import AddImage from '../components/AddImage';
const Inicio = () => {
  const {imagenes,verTodasLasImagenes,isAuthenticated}=useAuth();

 
  useEffect(() => {
    verTodasLasImagenes()
  }, [])
  
 
  
  


  return (
    <>
    {isAuthenticated?<AddImage/>:null}
    {imagenes!==null?
      <Galeria/>  
      :null}
    </>
  )
}

export default Inicio