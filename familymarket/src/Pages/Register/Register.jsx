import React, { useContext, useState } from 'react'
import Navbar from '../../Componets/Navbar/Navbar'
import Footer from '../../Componets/Footer/Footer'
import './Register.css'
import { ThemeContext } from '../../Context/ThemeContext'
import logo from '../../Assets/Icons/Logo.png'
import { Link } from 'react-router-dom'
import UserRegister from '../../Hooks/Authentication/UseRegister'
import useLogin from '../../Hooks/Authentication/UseLogin'
const Register = () => {
    const { theme } = useContext(ThemeContext);

    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [Vendedor, setVendedor] = useState(false);
    const [CodeSeller, setCodeSeller] = useState('');
    const [ValidateError, setValidateError] = useState(false);

    const { UseRegisterCustomer, UseSellerCustomer, error, setError } = UserRegister();
    const { UseloginUser } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (nombre.trim() === '' || telefono.trim() === '' || email.trim() === '' || password.trim() === '' || password.trim() !== confirmPassword.trim() || (telefono.trim().length > 13 || telefono.trim().length < 10) || password.trim().length < 8 || (Vendedor && (CodeSeller.trim() === '' || (CodeSeller.trim().length < 16 || CodeSeller.trim().length > 25)))) {
            setValidateError(true);
            return;
        }
        if (CodeSeller === '') {
            const result = await UseRegisterCustomer(nombre, email, password, telefono);
            if (result) (
                await UseloginUser(email, password)
            );
        }else{
            const result = await UseSellerCustomer(nombre, email, password, telefono, CodeSeller);
            if (result) (
                await UseloginUser(email, password)
            );
        }


    }
    return (
        <div className='contenido'>
            <nav> <Navbar /></nav>
            <main className='d-flex justify-content-center align-items-center'>
                <div className='d-flex col-12 col-md-8 my-4'>
                    <div className={`register-container p-3 d-flex flex-column  ${theme === 'dark' ? 'bg-secondary-dark' : 'bg-secondary'}`} style={{ flex: '1' }}>
                        <div className='mt-5'>
                            <h4 className='text-white '>
                                ¡Bienvenido al registro en línea de Family Market!
                            </h4>

                            <p className='text-white text-center mt-4'>
                                Regístrate ahora para acceder a nuestra amplia selección de productos frescos y de calidad.
                                ¡Es hora de simplificar tus compras en línea con Family Market!
                            </p>

                            <p className='text-white'>
                                Si ya tienes una cuenta:
                            </p>

                            <div className='d-flex justify-content-center'>
                                <Link to='/IniciarSesion' className={`btn bg-primary text-white ${theme === 'dark' ? "bg-primary-dark" : "'bg-primary"} `}>
                                    Iniciar sesión
                                </Link>
                            </div>

                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-grow-1 mt-2'>
                            <img src={logo} className='img-logo-register'></img>
                        </div>

                    </div>

                    <div className={`container-form py-2 ${theme === 'dark' ? 'bg-primary-dark' : 'bg-primary'}`} style={{ flex: '1' }}>
                        <div className='d-flex justify-content-center p-0 m-0'>
                            <h3 className='text-white'>Crea tu Cuenta</h3>
                        </div>
                        <form className='d-flex flex-column p-3' onSubmit={handleSubmit}>
                            <label htmlFor="nombre" className={`${theme === 'dark' ? "text-white" : "text-black"}`}>Nombre</label>
                            <input type="text" id="nombre" name="nombre" className="form-control" placeholder="Ingresa tu nombre" onChange={(e) => (setNombre(e.target.value))} />
                            {(ValidateError && nombre.trim() === '') && <p className='text-danger m-0 p-0'>El nombre es obligatorio</p>}
                            <label htmlFor="telefono" className={`${theme === 'dark' ? "text-white" : "text-black"}`}>Número de Teléfono</label>
                            <input type="text" id="telefono" name="telefono" className="form-control" placeholder="Ingresa tu Numero de Telefono" onChange={(e) => (setTelefono(e.target.value))} />
                            {(ValidateError && (telefono.trim() === '' || (telefono.trim().length > 13 || telefono.trim().length < 10))) && <p className='text-danger m-0 p-0'>{telefono == "" ? "El telefono es obligatorio" : "Debe tener entre 10 y 13 digitos"}</p>}
                            <label htmlFor="correo" className={`${theme === 'dark' ? "text-white" : "text-black"}`} >Correo Electrónico</label>
                            <input type="email" id="correo" name="correo" className="form-control" placeholder='Ingresa tu Correo Electronico' onChange={(e) => (setEmail(e.target.value))} />
                            {(ValidateError && email.trim() === '') && <p className='text-danger  m-0 p-0'>El correo es obligatorio</p>}
                            <label htmlFor="password" className={`${theme === 'dark' ? "text-white" : "text-black"}`} >Contraseña</label>
                            <input type="password" id="password" name="password" className="form-control" placeholder='Ingresa tu Contraseña' onChange={(e) => (setPassword(e.target.value))} />
                            {(ValidateError && (password.trim() === '' || password.trim().length < 8)) && <p className='text-danger  m-0 p-0'>{password == "" ? "La contraseña es obligatoria" : "Minimo 8 carcacteres"}</p>}
                            <label htmlFor="confirm-password" className={`${theme === 'dark' ? "text-white" : "text-black"}`} >Confirmar Contraseña</label>
                            <input type="password" id="confirm-password" name="confirm-password" className="form-control" placeholder='Confirma tu contraseña' onChange={(e) => (setConfirmPassword(e.target.value))} />
                            {(ValidateError && (confirmPassword.trim() === '' || password.trim() !== confirmPassword.trim())) && <p className='text-danger  m-0 p-0'>{password !== confirmPassword ? "Las contraseñas no coinciden" : "La confirmacion de contraseña es obligatoria"}</p>}
                            {Vendedor && (
                                <>
                                    <label htmlFor='CodeSeller' className={`${theme === 'dark' ? "text-white" : "text-black"}`}>Codigo de Vendedor</label>
                                    <input type='text' id='CodeSeller' name='CodeSeller' className='form-control' placeholder='Ingresa tu codigo de vendedor' onChange={(e) => (setCodeSeller(e.target.value))} />
                                    {(ValidateError && (CodeSeller === '' || (CodeSeller.length < 16 || CodeSeller.length > 25))) && <p className='text-danger  m-0 p-0'>{CodeSeller === '' ? "El codigo de vendedor es obligatorio" : "El codigo debe tener entre 16 y 25 caracteres"}</p>}
                                </>)}
                            {error !== undefined && <p className='text-danger  m-0 p-0'>{error}</p>}
                            <div className='button-register justify-content-between mt-3 '>
                                <button type='sumbit' className={`btn bg-secondary text-white p-1 m-1 ${theme === 'dark' ? 'bg-secondary-dark' : 'bg-secondary'}`} onClick={handleSubmit}>Crear Cuenta</button>
                                <button type='button' className={`btn bg-secondary text-white p-1 m-1 ${theme === 'dark' ? 'bg-secondary-dark' : 'bg-secondary'}`} onClick={() => (setVendedor(!Vendedor))}>Quiero ser Vendedor</button>

                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <footer><Footer /></footer>
        </div>
    )
}

export default Register