import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext';

const AddImage = () => {
    const {subirImagen,user}=useAuth();
    const [imagen64, setImagen64] = useState("")
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
        console.log(data)
        subirImagen(data);
      };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={data.titulo} onChange={handleInputChange} name="titulo"  />
      <input type="file" name="imagen"  accept="image/*" onChange={handleInputChange} /> 
      <button type="submit">Enviar</button>
    </form>
  )
}

export default AddImage