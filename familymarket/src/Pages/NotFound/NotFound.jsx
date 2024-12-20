import React from 'react'
import NotFoundicon from '../../Assets/Images/NotFound.png'
import logo from '../../Assets/Icons/Logo.png'
import './NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-third">
            <div className="d-flex align-items-center justify-content-center position-relative">
                <img src={logo} className="notfound-logo position-absolute" alt="Logo" />
                <img src={NotFoundicon} className="img-notfound" alt="Not Found" />
            </div>

            <div className="text-center mt-4">
                <h1 className="fs-1">404</h1>
                <p className="fs-3">Page Not Found</p>
                <Link to="/" className="btn bg-secondary text-white rounded-4 px-5 py-2">
                    Go Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound
