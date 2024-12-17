import React, { useContext } from 'react'
import './Footer.css'
import X from '../../Assets/Icons/X.png'
import Facebook from '../../Assets/Icons/Facebook.png'
import instagram from '../../Assets/Icons/instagram.png'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../Context/ThemeContext'
const Footer = () => {
    const {theme} = useContext(ThemeContext)
return (
    <div className={`d-flex align-items-center p-3 justify-content-between footer-container ${theme === 'dark' ? 'bg-primary-dark' : 'bg-primary'}`}>
            
            <h3 className={`flex-grow-1 text-center ${theme === 'dark' ? "text-white" : "text-black"}`}>Family Market</h3>
            
            <Link className={`btn d-flex flex-grow-1 justify-content-center align-items-center href ${theme === 'dark' ? "text-white" : "text-black"}`} to='/X' target='_blank'>
                <img src={X} className= {`icon-X ${theme === 'dark' && "invert-image"}`} alt='X'></img>
                <p className='m-0 p-0 ms-1'>Family Market</p>
            </Link>

            <Link className={`btn d-flex flex-grow-1 justify-content-center align-items-center href ${theme === 'dark' ? "text-white" : "text-black"}`} to='/Facebook' target='_blank'>
                <img src={Facebook} className={`icon-X ${theme === 'dark' && "invert-image"} `} alt='X'></img>
                <p className='m-0 p-0 ms-1'>Family Market</p>
            </Link>

            
            <Link className={`btn d-flex flex-grow-1 justify-content-center align-items-center href ${theme === 'dark' ? "text-white" : "text-black"} `} to='/Instagram' target='_blank'>
                <img src={instagram} className={`icon-X ${theme === 'dark' && "invert-image"}`} alt='X'></img>
                <p className='m-0 p-0 ms-1'>Family Market</p>
            </Link>

            <Link className={`btn d-flex flex-grow-1 justify-content-center align-items-center ${theme === 'dark' ? "text-white" : "text-black"}`} to='/FQS'>
            <h3 className='flex-grow-1 text-center  p-0 m-0'>FQS</h3>
            </Link>

    </div>
)
}

export default Footer