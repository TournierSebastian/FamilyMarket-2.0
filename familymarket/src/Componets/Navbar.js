import React, { useState } from 'react';
import "../Styles/Global.css";
import Logo from '../Assets/Icons/Logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className='bg-primary d-flex'>
      <Link to= '/'>
        <img src={Logo} className='logo' alt="Logo"></img>
      </Link>



    </div>
  );
};

export default Navbar;
