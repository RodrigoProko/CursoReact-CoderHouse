import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import CartWidget from '../cartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Mi Proyecto React</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to="/acerca" className="nav-link">Acerca de</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto" className="nav-link">Contacto</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
