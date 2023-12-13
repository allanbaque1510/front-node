import React,{ useState } from 'react'
import { FcLock,FcManager,FcFeedback   } from "react-icons/fc";
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [data, setData] = useState({email:"",password:"",firstName:""})
  const {singup,isAuthenticated, errors:AuthErrors}=useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const iniciarSesion=(e) =>{
    e.preventDefault()
    singup(data)
  }


  return (
    <div className='content'>
      <section style={{display:'flex', height:'100%', width:"100vw", justifyContent:"center", alignItems:"center"}}>
        <form className='form_reg_log' onSubmit={iniciarSesion}>
        <h3>Registrarse</h3>


          <label htmlFor="email"><FcFeedback />
            <input type="email" name="email" placeholder='Ingrese un correo'   onChange={handleInputChange} value={data.email} />
          </label>

          <label htmlFor="firstName"><FcManager />
            <input type="text" name="firstName" placeholder='Ingrese un usuario'  onChange={handleInputChange} value={data.firstName} />
          </label>
          <label htmlFor="password"><FcLock />
            <input type="password" name="password" placeholder='Ingrese una contraseña' onChange={handleInputChange} value={data.password} />
          </label>

          <button type="submit">Registrar</button>
        </form>
      </section>
    </div>
  )
}

export default Register