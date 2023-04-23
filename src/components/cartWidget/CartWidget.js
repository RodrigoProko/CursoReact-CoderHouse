import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
  const itemCount = 3; 

  return (
    <div className="cart-widget">
      <span role="img" aria-label="carrito">🛒</span>
      <span className="cart-widget-notification">{itemCount}</span>
    </div>
  );
};

export default CartWidget;
