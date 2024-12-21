import React, { useContext } from 'react'
import Navbar from '../../Componets/Navbar/Navbar'
import Footer from '../../Componets/Footer/Footer'
import bolsa from '../../Assets/Images/Bolsa.png'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../Context/ThemeContext'

const Cart = () => {
    const {theme} = useContext(ThemeContext)
    const products = null
return (
    <div className='contenido'>
        <nav> <Navbar /></nav>
        <main>
            {products === null ? 
            <div className='d-flex flex-column align-items-center m-4'>
                <img src={bolsa} className={`img-fluid ${theme === 'dark' ? 'invert-image' : ''}`}></img>
                <h4 className={`fs-4 fs-md-5 ${theme === 'dark'? 'text-white' : ''}`}>¡Empieza a llenar tu carrito de compras!</h4>
                <Link to='/' className={`btn ${theme === 'dark' ? 'bg-secondary-dark text-white' : 'bg-secondary'} px-3 py-2 fs-5 fw-bold`}>¡Descubre Productos!</Link>
            </div>
            : <h1>Carrito</h1>}
        </main>
        <footer><Footer/></footer>
    </div>
)
}

export default Cart