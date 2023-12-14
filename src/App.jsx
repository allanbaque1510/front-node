import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Inicio from './pages/Inicio'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import ProtectedRoute from './ProtectedRoute'
import NavBar from './components/NavBar'
import './index.css'
function App() {
  return (
    <AuthProvider>
      <NavBar>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/registro' element={<Register/>} />
            
            <Route element={<ProtectedRoute/>}>
              <Route path='/profile' element={<Profile/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NavBar>
    </AuthProvider>
  )
}

export default App
