import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { BsCloudUpload } from "react-icons/bs";
import { useNavigate} from 'react-router-dom'
const AddImage = () => {
    const {subirImagen,user}=useAuth();
    const [imagen64, setImagen64] = useState("")
    const inputRef = useRef(null)
    const navigate = useNavigate()
    const [data, setData] = useState({
      imagen:null,
      titulo:"",
      usuario:""
    })
   

    useEffect(() => {
        if(user){
          setData({
            ...data,
            ["usuario"]: user.username,
          });
        }
      }, [user])

    const convertirImagenbase64=(file)=>{
        if (file) {
          const reader = new FileReader();
      
          reader.onloadend = () => {
            const base64Data = reader.result;
            setImagen64(base64Data);
          };
          reader.readAsDataURL(file);
      }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        
        if(name==="imagen"){
          convertirImagenbase64(event.target.files[0])
        }
        setData({
          ...data,
          [name]: value, 
        });
      };

    useEffect(() => {
        setData({
          ...data,
          ["imagen"]:imagen64,
        });
      }, [imagen64])

    const handleSubmit = (e) => {
        e.preventDefault();
        subirImagen(data);
        navigate('/')
      };
      const clickReferencia = () =>{
        inputRef.current.click();
      }
  return (
    <form className="contentImage" onSubmit={handleSubmit}>
     
     <div className='subirImagen'>

    
      {(data.imagen== (undefined || null ))? null:(data.imagen.length > 0?
      <>
      <div className="flex">
        <label htmlFor="titulo" >Titulo de la imagen
          <input type="text" value={data.titulo} onChange={handleInputChange} name="titulo"  />
        </label>
      <button type="submit">Enviar</button>
      </div>
      <img className="vistaPrevia" src={imagen64} alt="upload" />
      </>
      :
      <div className="uploadImage" onClick={clickReferencia}>
         
              <BsCloudUpload />
           
           <label>
            Subir imagen
           </label>
        </div>
      )}

      </div>
      <input type="file" name="imagen" style={{display:"none"}} accept="image/*" ref={inputRef} onChange={handleInputChange} /> 
    </form>
  )
}

export default AddImage