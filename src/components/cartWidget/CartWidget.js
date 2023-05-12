import React, { useContext } from 'react';
import './CartWidget.css';
import { CartContext } from '../contexts/CartContext';

const CartWidget = ({ onClick }) => {
  const { cart } = useContext(CartContext);

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-widget" onClick={onClick}>
      <span role="img" aria-label="carrito">🛒</span>
      <span className="cart-widget-notification">{itemCount}</span>
    </div>
  );
};

export default CartWidget;
