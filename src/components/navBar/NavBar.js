import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Alert } from 'react-bootstrap';
import './NavBar.css';
import CartWidget from '../cartWidget/CartWidget';
import { CartContext } from '../contexts/CartContext';

const NavBar = () => {
  const { cart, setCart } = useContext(CartContext); // Accede al estado del carrito utilizando CartContext
  const [showModal, setShowModal] = useState(false); // Controla la visibilidad del modal
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Controla la visibilidad del mensaje de éxito

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
  };

  const handleFinishPurchase = () => {
    setCart([]); // Elimina los elementos del carrito
    setShowSuccessMessage(true); // Muestra el mensaje de éxito
    setTimeout(() => setShowSuccessMessage(false), 2000); // Oculta el mensaje de éxito después de 2 segundos
    handleCloseModal(); // Cierra el modal
  };

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
      <CartWidget onClick={handleShowModal} /> 
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.map((item) => (
            <div key={item.nombre} className="cart-item">
              <img src={item.portada} alt={item.nombre} width="50" />
              <span>{item.nombre}</span>
              <span>Cantidad: {item.quantity}</span>
              <span>Precio total: ${item.precio * item.quantity}</span>
            </div>
          ))}
          <div className="cart-total">
            Monto total: ${getTotalPrice()}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleFinishPurchase}>
            Finalizar compra
          </Button>
        </Modal.Footer>
      </Modal>
      
      {showSuccessMessage && (
        <Alert variant="success" className="floating-message">
          La compra se realizó con éxito
        </Alert>
      )}
    </nav>
  );
};

export default NavBar;
