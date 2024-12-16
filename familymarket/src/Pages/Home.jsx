import React from 'react';
import "../Styles/Global.css";
import Navbar from '../Componets/Navbar/Navbar';
import Footer from '../Componets/Footer/Footer';

const Home = () => {
  return (
    <div className='contenido'>
      <nav>
        <Navbar />
      </nav>
      <main>
        Soy relleno
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
