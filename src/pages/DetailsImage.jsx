import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import { FaDownload,FaShareNodes  } from "react-icons/fa6";
const DetailsImage = () => {
    const {verImagen,imagen}=useAuth();
    const {id} = useParams()

    useEffect(() => {
        verImagen(id)
    }, [])
    function obtenerFechaFormateada(fechaString) {
        const fecha = new Date(fechaString);
      
        // Obtener la fecha en formato año-mes-día
        const año = fecha.getFullYear();
        const mes = fecha.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
        const dia = fecha.getDate();
      
        // Formatear la fecha como una cadena "YYYY-MM-DD"
        const fechaFormateada = `${año}-${mes < 10 ? '0' : ''}${mes}-${dia < 10 ? '0' : ''}${dia}`;
      
        return fechaFormateada;
      }
    return (
        <>
        {imagen!== null?
            <section className='flex-row'>
                <div>
                    <img className='verImagen' src={imagen.imagen} alt="" />
                </div>
                <div className='datos'>
                    <div className="botones">
                    <a href={imagen.imagen} className='botonDescargar' download={imagen.titulo}><FaDownload /> <span>Descargar</span> </a>
                    </div>
                    <h3>{imagen.titulo}</h3>
                        <i>{obtenerFechaFormateada(imagen.createdAt)}</i>
                    <p>
                        <b>{imagen.usuario}</b>
                    </p>
                    
                </div>
            </section>
        :null}
        </>
  )
}

export default DetailsImage