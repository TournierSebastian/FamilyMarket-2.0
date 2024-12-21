import React, { useContext, useState } from 'react'
import Navbar from '../../Componets/Navbar/Navbar'
import Footer from '../../Componets/Footer/Footer'
import logo from '../../Assets/Icons/Logo.png'
import { ThemeContext } from '../../Context/ThemeContext'
import { Link } from 'react-router-dom'
import './Login.css'
import useLogin from '../../Hooks/Authentication/UseLogin'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Login = () => {
    const { theme } = useContext(ThemeContext)
    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");
    const [Validate, SetValidate] = useState(false);
    const [ShowPassword, SetShowPassword] = useState(true);
    
    const {UseloginUser, error,setError } = useLogin();

    const HandleSumbitFrom = async (e) => {

        e.preventDefault();
        setError(null);
        if (Email === "" || Password === "" || Password.length < 8) {
            SetValidate(true);
        } else {
            SetValidate(false);
            await UseloginUser(Email, Password);

        }
    }
   
    return (
        <div className='contenido'>
            <nav><Navbar /></nav>
      
            <main className='d-flex justify-content-center align-items-center'>
                <div className={`Login-Container d-flex  flex-column col-6 mx-auto rounded-3 container my-4  ${theme === "dark" ? " bg-primary-dark " : " bg-primary "}`}>
                    <div className='d-flex align-items-center mb-3 text-login '>
                        <img src={logo} alt='Logo de Family Market' className='logo-login col-6 col-sm-3 col-md-2 col-lg-2'></img>
                        <h3 className={`ms-3  ${theme === "dark" ? "text-white" : "text-black"}`}>Iniciar Seccion</h3>
                    </div>
                    <form onSubmit={HandleSumbitFrom} className="d-flex flex-column text-login">
                        <label className={`${theme === "dark" ? "text-white" : "text-black"}`}>Correo Electronico</label>
                        <input type='text' className='form-control mb-2' onChange={(e)=>(SetEmail(e.target.value))}></input>
                        {Email === "" && Validate && <p className='text-danger m-0 p-0'>Campo Obligatorio</p>}
                        <label className={`${theme === "dark" ? "text-white" : "text-black"}`}>Contraseña</label>
                        <div className='position-relative'>
                            <input type={ShowPassword ? "password": 'text'} className='form-control mb-2' onChange={(e)=>(SetPassword(e.target.value))}></input>
                            <FontAwesomeIcon icon={ShowPassword ? faEye : faEyeSlash} className='icon-eye position-absolute top-50 end-0 translate-middle-y me-2' onClick={()=>(SetShowPassword(!ShowPassword))}></FontAwesomeIcon>
                        </div>
                        {(Password === "" || Password.length < 8) && Validate && <p className='text-danger  m-0 p-0'>{Password === "" ?"Campo Obligatorio": "Debe tener minimo 8 caracteres"}</p>}
                        <Link to='/RecuperarContraseña' className={`text-recuperar-contraseña text-decoration-none text-white`}>
                            ¿Olvidaste tu contraseña?
                        </Link>
                    
                    {error !== undefined && <p className='text-danger text-center text-error'>{error}</p>}
                    <div className='d-flex justify-content-center mt-2 text-login'>
                        <button className ={`btn text-white rounded-4 ${theme == "dark" ? "bg-secondary-dark" : "bg-secondary"} `}
                        onClick={HandleSumbitFrom}>
                            Ingresar
                        </button>
                    </div>
                    </form>
                </div>
            </main>
            <footer><Footer /></footer>
        </div>
    )
}

export default Login