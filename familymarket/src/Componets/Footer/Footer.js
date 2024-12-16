import React from 'react'
import './Footer.css'
import X from '../../Assets/Icons/X.png'
import Facebook from '../../Assets/Icons/Facebook.png'
import instagram from '../../Assets/Icons/instagram.png'
import { Link } from 'react-router-dom'
const Footer = () => {
return (
    <div className='bg-primary d-flex align-items-center p-3 justify-content-between  text-black footer-container'>
            
            <h3 className='flex-grow-1 text-center'>Family Market</h3>

            <Link className='btn text-black d-flex flex-grow-1 justify-content-center align-items-center href' to='/X' target='_blank'>
                <img src={X} className='icon-X' alt='X'></img>
                <p className='m-0 p-0 ms-1'>Family Market</p>
            </Link>

            <Link className='btn text-black d-flex flex-grow-1 justify-content-center align-items-center href' to='/Facebook' target='_blank'>
                <img src={Facebook} className='icon-X' alt='X'></img>
                <p className='m-0 p-0 ms-1'>Family Market</p>
            </Link>

            
            <Link className='btn text-black d-flex flex-grow-1 justify-content-center align-items-center href' to='/Instagram' target='_blank'>
                <img src={instagram} className='icon-X' alt='X'></img>
                <p className='m-0 p-0 ms-1'>Family Market</p>
            </Link>

            <Link className='btn text-black d-flex flex-grow-1 justify-content-center align-items-center ' to='/FQS'>
            <h3 className='flex-grow-1 text-center  p-0 m-0'>FQS</h3>
            </Link>

    </div>
)
}

export default Footer