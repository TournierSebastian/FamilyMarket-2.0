import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../Componets/Navbar/Navbar'
import Footer from '../../Componets/Footer/Footer'
import UseFetchProducts from '../../Hooks/Products/UseFetchProducts'
import { ThemeContext } from '../../Context/ThemeContext'
import './Productos.css'
import logo from '../../Assets/Icons/Logo.png'

const Productos = () => {
    const { theme } = useContext(ThemeContext);
    const [sortOrder, setSortOrder] = useState('');
    const [sortDirection, setSortDirection] = useState(true);
    const [page, setPage] = useState(1);

    const { GetProducts, Productos } = UseFetchProducts();

    useEffect(() => {
        const params = {
            sortBy: sortOrder,
            isAscending: sortDirection,
            pageNumber: page,
            pageSize: 8
        };
        GetProducts(params);
    }, [page, sortDirection, sortOrder]);

    const nextpage = () => {
        if (Productos && Productos.length > 0) {
            setPage(page + 1);
        }
    };

    const prevpage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div className='contenido'>
            <nav><Navbar /></nav>
            <main className='container '>
                <div className='mt-5 '>
                    <button className={`btn ${theme === 'dark' ? 'bg-secondary-dark' : 'bg-secondary'} text-white`}>Categorias</button>
                    <h2>Productos</h2>
                    <div className="container-select">
                        <div className="col-4 col-sm-2 mb-2 mb-sm-0 p-0">
                            <select
                                className={`${theme === 'dark' ? 'bg-primary-dark' : 'bg-primary'} text-white rounded-2 p-1 w-100 select-custom`}
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                            >
                                <option value="" disabled>Ordenar por:</option>
                                <option value="Alfabéticamente">Alfabéticamente</option>
                                <option value="price">Precio</option>
                                <option value="Discount">Descuento</option>
                            </select>
                        </div>
                        {sortOrder !== '' && (
                            <div className="col-4 col-sm-2 p-0">
                                <select
                                    className={`${theme === 'dark' ? 'bg-primary-dark' : 'bg-primary'} ms-0 ms-sm-3 text-white rounded-2 p-1 w-100 select-custom`}
                                    value={sortDirection}
                                    onChange={(e) => setSortDirection(e.target.value)}
                                >
                                    <option value={true}>Ascendente</option>
                                    <option value={false}>Descendente</option>
                                </select>
                            </div>
                        )}
                    </div>

                    {Productos && Productos.map((product, index) => (
                        <div className={`d-flex mx-0 my-2 ${theme === 'dark' ? 'bg-secondary-dark' : 'bg-secondary'} rounded-2 py-1 products-container`} key={index}>
                            {product.image == null || product.image.imageUrl == null ? (
                                <div className={`${theme === 'dark' ? 'bg-third-dark' : 'bg-third'} col-4 col-sm-5 col-md-2 rounded-2 d-flex justify-content-center align-items-center m-2 flex-column`}>
                                    <img src={logo} className="img-fluid p-2" ></img>
                                    <p className='m-0 p-0'>Producto Sin Imagen</p>
                                </div>
                            ) : (
                                <div className={`${theme === 'dark' ? 'bg-third-dark' : 'bg-third'} col-4 col-sm-5 col-md-2 rounded-2 d-flex justify-content-center align-items-center m-2 `}>
                                    <img src={product.image.imageUrl} alt={product.name} className="img-fluid p-2" />
                                </div>
                            )}
                            <div className="col-11 col-sm-6 col-md-8 d-flex flex-column justify-content-between mx-2">
                                <div>
                                    <h2 className="product-name text-white">{product.name}</h2>
                                    <p className="product-description text-white">{product.description}</p>
                                </div>
                                <div className="d-flex justify-content-between mb-2">

                                    {product.discount > 0 ? (
                                        <>
                                            <div className='d-flex flex-column' >
                                                <span className={`product-price text-white px-2  py-1 rounded-3  my-1 text-center ${theme === 'dark' ? 'color-offer-dark' : 'color-offer'}`}>En oferta: %{product.discount}</span>
                                                <span className={`product-price text-white px-2  py-1 rounded-3 text-center ${theme === 'dark' ? 'bg-primary-dark' : 'bg-primary'}`}> <s>${product.price}</s> ${product.price - (product.price * product.discount) / 100}</span>
                                            </div>
                                            <button className={` btn ${theme === 'dark' ? 'bg-primary-dark' : 'bg-primary'} p-1 text-white`} style={{maxHeight: '35px', marginTop: '37px'}}>Agregar al carrito</button>
                                        </>
                                    ) : (
                                        <>
                                            <div className='d-flex flex-column' >
                                                <span className={`product-price text-white px-2  py-1 rounded-3 text-center ${theme === 'dark' ? 'bg-primary-dark' : 'bg-primary'}`}> ${product.price}</span>
                                            </div>
                                            <button className={` btn ${theme === 'dark' ? 'bg-primary-dark' : 'bg-primary'} p-1 m-0 text-white`}>Agregar al carrito</button>
                                        </>
                                    )}

                                </div>
                            </div>
                        </div>
                    ))}

                    <div className='d-flex justify-content-center mb-4'>
                        <button className={`btn ${theme === 'dark' ? 'bg-primary-dark' : 'bg-primary'} text-white mx-2`} onClick={prevpage}>Anterior</button>
                        <button className={`btn ${theme === 'dark' ? 'bg-primary-dark' : 'bg-primary'} text-white  mx-2`} onClick={nextpage}>Siguiente</button>
                    </div>
                </div>
            </main>
            <footer><Footer /></footer>
        </div>
    )
}

export default Productos