import React, { useContext, useState } from 'react';
import "../../Styles/Global.css";
import Logo from '../../Assets/Icons/Logo.png';
import cart from '../../Assets/Images/cart.png';
import user from '../../Assets/Images/user.png';
import lupa from '../../Assets/Images/lupa.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../Context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [Route, Setroute] = useState(false);

  return (
    <div className={`transition-theme navbar-contaier ${theme === "dark" ? 'bg-primary-dark' : 'bg-primary'}`}>
      <div className='d-flex align-items-center justify-content-between '>
      {/* Inicio */}
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
      {Route && (
      <div className=' visible-lg mx-auto text-center '>
        <button className={`bg-secondary p-2 d-flex align-items-center btn-search ${theme === "dark" ? 'bg-secondary-dark' : 'bg-secondary'} transition-theme`} alt="Search">
          <img src={lupa} alt="Search" className='icon-search'></img>
        </button>
        <input type="text" placeholder="Buscar" className={`input-search ${theme === "dark" ? 'bg-third-dark' : 'bg-third'} transition-theme`}></input>
      </div>
      )}
      
      <div className='d-flex align-items-center '>
        <Link to='/MiCarrito' className={`py-2 me-2 px-3 rounded-4 d-flex align-items-center ${theme === "dark" ? 'bg-third-dark' : 'bg-third'} transition-theme`}>
          <img src={cart} alt="Cart" className='icon-cart'></img>
        </Link>

        <Link to='/IniciarSesion' className={`btn rounded-4 mx-2 d-flex flex-column justify-content-center align-items-center p-1 ${theme === "dark" ? 'bg-third-dark' : 'bg-third'} transition-theme`}>
          <h6 className='m-0 p-0 Secion-h6'>Iniciar Secion</h6>
          <img src={user} alt="User" className='icon-user p-0 m-0'></img>
        </Link>
      </div>
     
      </div>

      {Route && (
      <div className='visible-sm  ms-2 text-center m'>
        <button className={`bg-secondary p-2 d-flex align-items-center btn-search ${theme === "dark" ? 'bg-secondary-dark' : 'bg-secondary'} transition-theme`} alt="Search">
          <img src={lupa} alt="Search" className='icon-search'></img>
        </button>
        <input type="text" placeholder="Buscar" className={`input-search ${theme === "dark" ? 'bg-third-dark' : 'bg-third'} transition-theme`}></input>
      </div>
        )}
    </div>

  );
};

export default Navbar;
