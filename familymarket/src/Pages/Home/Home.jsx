import React, { useContext, useEffect, useState } from 'react';
import "../../Styles/Global.css";
import Navbar from '../../Componets/Navbar/Navbar';
import Footer from '../../Componets/Footer/Footer';
import empleado from '../../Assets/Images/Empleado.jpg';
import emplado1 from '../../Assets/Images/Empleado1.png';
import ofertas from '../../Assets/Images/Carrusel/oferta.png';
import ofertas1 from '../../Assets/Images/Carrusel/oferta1.png';
import ofertas2 from '../../Assets/Images/Carrusel/oferta2.png';
import mp from '../../Assets/Images/Carrusel/mp.jpg';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../Context/ThemeContext';
import './Home.css';

import Carousel from "react-bootstrap/Carousel";


const Home = () => {
  const { theme } = useContext(ThemeContext);

  const images = [
    { src: mp, alt: 'Aceptamos mercado pago' },
    { src: ofertas1, alt: 'Compra online 3 cuotas sin interes' },
    { src: ofertas, alt: 'Hasta un 10% de descuento con banco corrientes' },
    { src: ofertas2, alt: 'Oferta navideña hasta un 20% menos con visa o mastercard' },
    
  ];

  return (
    <div className="contenido">
      <nav>
        <Navbar />
      </nav>
      <main>
        <div className='row align-items-center '>
          <div className="col-12 col-md-6 p-0">
            <img src={empleado} className="img-fluid" alt='Fotografía de un empleado del supermercado sonriendo'></img>
          </div>
          <div className="col-12 col-md-6 text-center p-3">
            <div className="d-flex flex-column gap-4">
              <div className='col-8 col-sm-8 col-md-12 col-lg-8 mx-auto'>
                <h3 className={`fw-bold mb-0 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>FAMILI MARKET</h3>
                <p className={`fw-semibold text-wrap mb-0 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>Descubre nuestra amplia selección de productos frescos y de calidad. ¡Haz clic aquí para ver más!</p>
              </div>
              <Link to="#" className="text-decoration-none">
                <button className= {`btn rounded-3 fs-5 text-white ${theme === 'dark' ? 'bg-secondary-dark' : 'bg-secondary'}`}  type="button">Ver Productos</button>
              </Link>
            </div>
          </div>
        </div>


        <div>
        
        <div className={`p-1 ${theme === 'dark' ? 'bg-secondary-dark' : 'bg-secondary'}`}></div>

          <Carousel className="Carousel-Container">
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="Image-Carrousel"
                  src={image.src}
                  alt={image.alt}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div> 


        <div className='row align-items-center'>
          <div className={`col-12 col-md-6 text-center p-3 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
            <div className="d-flex flex-column gap-4"></div>
            <div className='col-8 col-sm-8 col-md-12 col-lg-8 mx-auto'></div>
            <div class="d-flex flex-column gap-4">
              <div className='col-8 col-sm-8 col-md-12 col-lg-8 mx-auto'>
                <p className='fw-semibold text-wrap mb-0'>Bienvenido a Family Market, un lugar donde la calidad y el servicio excepcional se unen. Te invitamos a explorar nuestra amplia variedad de opciones, seleccionadas cuidadosamente para satisfacer tus necesidades diarias. Disfruta de una experiencia de compra agradable y conveniente. ¡Estamos aquí para ayudarte a encontrar lo que buscas!</p>
              </div>
            </div>


          </div>
          <div class="col-12 col-md-6 p-0">
            <img src={emplado1} class="img-fluid" alt='Fotografía de un empleado del supermercado sonriendo'></img>
          </div>
        </div>


      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
