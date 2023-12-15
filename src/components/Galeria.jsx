import React from 'react'
import { useAuth } from '../context/AuthContext';
import { FaDownload,FaShareNodes  } from "react-icons/fa6";

const Galeria = () => {
    const {imagenes}=useAuth();
    return (
    <section className='galeria'>
            {imagenes.map(imagen=>(
              <a key={imagen._id} href={`/img/${imagen._id}`}>

                <span  >
                    <img 
                    
                    src={`${imagen.imagen}`}
                    alt={`Imagen ${imagen._id}`}
                    />
                    <div className="overlay">
                        <a href={imagen.imagen} className='botonGuardar' download={imagen.titulo}><FaDownload /></a>
                        <button type="button"><FaShareNodes /></button>
                    </div>
                </span>
                    </a>
            ))}
    </section>
  )
}

export default Galeria