import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#">Notaria Wendt</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <Link to={"/tramites"} className="nav-link">Tramites</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Preguntas Frecuentes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Contacto</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sitios de interes
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="https://www.cbrvalpo.cl/" target='_blank'>Conservador Valparaiso</a></li>
                                <li><a className="dropdown-item" href="">Registro Civil</a></li>
                                <li><a className="dropdown-item" href="">Tesoreria General </a></li>
                                <li><a className="dropdown-item" href="">SII</a></li>
                                <li><a className="dropdown-item" href=''>Banco Central</a> </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}