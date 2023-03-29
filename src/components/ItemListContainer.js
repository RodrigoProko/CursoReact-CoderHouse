import React from 'react';
import './ItemListContainer.css';

const products = [
  {
    id: 1,
    name: 'Producto 1',
    description: 'Descripción del Producto 1',
    price: 100,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Descripción del Producto 2',
    price: 200,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Producto 3',
    description: 'Descripción del Producto 3',
    price: 300,
    image: 'https://via.placeholder.com/150',
  },
];

const ItemListContainer = ({ greeting }) => {
    return (
      <div>
        <h2>{greeting}</h2>
        <ul className="item-list-container">
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <img src={product.image} alt={product.name} />
              <p>{product.description}</p>
              <p>Precio: ${product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    );
};
export default ItemListContainer;
