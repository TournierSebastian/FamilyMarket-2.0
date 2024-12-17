import React, { useContext, useState } from 'react'
import Navbar from '../../Componets/Navbar/Navbar'
import Footer from '../../Componets/Footer/Footer'
import logo from '../../Assets/Icons/Logo.png'
import { ThemeContext } from '../../Context/ThemeContext'
import { Link } from 'react-router-dom'
import './Login.css'
const Login = () => {

    const { theme } = useContext(ThemeContext)
    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");
    const [Validate, SetValidate] = useState(false);


    const HandleSumbitFrom = () => {
        if (Email === "" || Password === "") {
            SetValidate(true)
        } else {
            SetValidate(false)
        }
    }
    return (
        <div className='contenido'>
            <nav><Navbar /></nav>
            <main className='d-flex justify-content-center align-items-center'>
                <div className={`Login-Container d-flex  flex-column col-6 mx-auto rounded-3 container   ${theme === "dark" ? " bg-primary-dark " : " bg-primary "}`}>
                    <div className='d-flex align-items-center mb-3 text-login '>
                        <img src={logo} alt='Logo de Family Market' className='logo-login col-6 col-sm-3 col-md-2 col-lg-2'></img>
                        <h3 className={`ms-3  ${theme === "dark" ? "text-white" : "text-black"}`}>Iniciar Seccion</h3>
                    </div>
                    <div className='d-flex flex-column text-login'>
                        <label className={`${theme === "dark" ? "text-white" : "text-black"}`}>Correo Electronico</label>
                        <input type='text' className='form-control mb-2' onChange={(e)=>(SetEmail(e.target.value))}></input>
                        {Email === "" && Validate && <p className='text-danger m-0 p-0'>Campo Obligatorio</p>}
                        <label className={`${theme === "dark" ? "text-white" : "text-black"}`}>Contraseña</label>
                        <input type='password' className='form-control mb-2' onChange={(e)=>(SetPassword(e.target.value))}></input>
                        {Password === "" && Validate && <p className='text-danger  m-0 p-0'>Campo Obligatorio</p>}
                        <Link to='/RecuperarContraseña' className={`text-recuperar-contraseña text-decoration-none text-white `}>
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>

                    <div className='d-flex justify-content-center mt-3 text-login'>
                        <button className ={`btn text-white rounded-4 ${theme == "dark" ? "bg-secondary-dark" : "bg-secondary"} `}
                        onClick={HandleSumbitFrom}>
                            Ingresar
                        </button>
                    </div>

                </div>
            </main>
            <footer><Footer /></footer>
        </div>
    )
}

export default Login