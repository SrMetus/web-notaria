import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Notaria Wendt
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tramites" className="nav-link">
                Tramites
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Preguntas Frecuentes
              </a>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link">
                Contacto
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sitios de interés
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="https://www.cbrvalpo.cl/" target="_blank">
                    Conservador Valparaiso
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Registro Civil
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Tesoreria General
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    SII
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Banco Central
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
