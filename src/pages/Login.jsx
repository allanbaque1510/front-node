import React,{ useState } from 'react'
import { FcLock,FcFeedback  } from "react-icons/fc";
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [data, setData] = useState({email:"",password:""})
  const {signin,isAuthenticated, errors:AuthErrors}=useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const iniciarSesion=(e) =>{
    e.preventDefault()
    signin(data);
  }
  
  return (
    <div className='content'>
      <section style={{display:'flex', height:'100%', width:"100vw", justifyContent:"center", alignItems:"center"}}>
        <form className='form_reg_log' onSubmit={iniciarSesion}>
        <h3>Inicio de sesion</h3>
          <label htmlFor="email"><FcFeedback />
            <input type="email" name="email"   onChange={handleInputChange} value={data.email} />
          </label>
          <label htmlFor="password"><FcLock />
            <input type="password" name="password"  onChange={handleInputChange} value={data.password} />
          </label>
          <button type="submit">Iniciar Sesion</button>
        </form>
      </section>
    </div>
  )
}

export default Login