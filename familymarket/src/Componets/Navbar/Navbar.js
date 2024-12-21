import React, { useContext, useEffect, useState } from 'react';
import "../../Styles/Global.css";
import Logo from '../../Assets/Icons/Logo.png';
import cart from '../../Assets/Icons/cart.png';
import usericon from '../../Assets/Icons/user.png';
import lupa from '../../Assets/Icons/lupa.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../Context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon} from "@fortawesome/free-solid-svg-icons";
import useFetchUser from '../../Hooks/User/Usefetchuser';
import { AuthContext } from '../../Context/AuthContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [Route, Setroute] = useState("");
  const { user } = useFetchUser();
  const {role} = useContext(AuthContext);

  useEffect(() => {
    const currentPath = window.location.pathname;
    Setroute(currentPath);
  }, []);
  useEffect(() => {
    console.log("User role:", role);
  }, [role]);
  return (
    <div className={`transition-theme navbar-contaier ${theme === "dark" ? 'bg-primary-dark' : 'bg-primary'}`}>
      <div className='d-flex align-items-center justify-content-between '>
        <div className='d-flex align-items-center'>
          <Link to='/'>
            <img src={Logo} className='logo' alt="Logo"></img>
          </Link>
          <button
            className='btn m-1 p-0 toggle-theme-button'
            onClick={toggleTheme}
          >
            <FontAwesomeIcon
              icon={theme === "light" ? faSun : faMoon}
              size="2x"
              color={theme === "light" ? "white" : "black"}
            />
          </button>
        </div>
        {Route === 'si' && (
          <div className=' visible-lg mx-auto text-center '>
            <button className={`bg-secondary p-2 d-flex align-items-center btn-search ${theme === "dark" ? 'bg-secondary-dark' : 'bg-secondary'} transition-theme`} alt="Search">
              <img src={lupa} alt="Search" className='icon-search'></img>
            </button>
            <input type="text" placeholder="Buscar" className={`input-search ${theme === "dark" ? 'bg-third-dark' : 'bg-third'} transition-theme`}></input>
          </div>
        )}

        < div className='d-flex align-items-center '>
          <Link to='/MiCarrito' className={`py-2 me-2 px-3 rounded-4 d-flex align-items-center ${theme === "dark" ? 'bg-third-dark' : 'bg-third'} transition-theme`}>
            <img src={cart} alt="Cart" className={`icon-cart ${theme === "dark" ? "invert-image" : ""}`}></img>
          </Link>

            <Link to={user ? "/MiPerfil" : Route === '/IniciarSesion' ? '/Registrarse' : '/IniciarSesion'} className={`btn rounded-4 mx-2 d-flex flex-column justify-content-center align-items-center p-1 ${theme === "dark" ? 'bg-third-dark' : 'bg-third'} transition-theme`}>
              <h6 className={`m-0 p-0 Secion-h6 ${theme === "dark" ? "text-white" : "text-black"}`}>
                {user ? user.name : (Route === '/IniciarSesion' ? 'Registrarse' : 'Iniciar Sesión')}
              </h6>
              <img src={usericon} alt="User" className={`icon-user p-0 m-0 ${theme === "dark" ? "invert-image" : ""}`} />
            </Link>
       

        </div>
      </div>

      {
        Route === 'si' && (
          <div className='visible-sm  ms-2 text-center m'>
            <button className={`bg-secondary p-2 d-flex align-items-center btn-search ${theme === "dark" ? 'bg-secondary-dark' : 'bg-secondary'} transition-theme`} alt="Search">
              <img src={lupa} alt="Search" className='icon-search' ></img>
            </button>
            <input type="text" placeholder="Buscar" className={`input-search ${theme === "dark" ? 'bg-third-dark' : 'bg-third'} transition-theme`}></input>
          </div>
        )
      }
    </div >

  );
};

export default Navbar;
