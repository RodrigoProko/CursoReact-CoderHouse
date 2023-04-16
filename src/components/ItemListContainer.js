import Categories from './Categories';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemListContainer.css';

const products = [
  {
    id: 1,
    name: 'Producto 1',
    description: 'Descripción del Producto 1',
    price: 100,
    image: 'https://via.placeholder.com/150',
    category: 'verano',
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Descripción del Producto 2',
    price: 200,
    image: 'https://via.placeholder.com/150',
    category: 'invierno',
  },
  {
    id: 3,
    name: 'Producto 3',
    description: 'Descripción del Producto 3',
    price: 300,
    image: 'https://via.placeholder.com/150',
    category: 'otoño',
  },
  {
    id: 4,
    name: 'Producto 4',
    description: 'Descripción del Producto 4',
    price: 400,
    image: 'https://via.placeholder.com/150',
    category: 'invierno',
  },
  {
    id: 5,
    name: 'Producto 5',
    description: 'Descripción del Producto 5',
    price: 500,
    image: 'https://via.placeholder.com/150',
    category: 'otoño',
  },
  {
    id: 6,
    name: 'Producto 6',
    description: 'Descripción del Producto 6',
    price: 600,
    image: 'https://via.placeholder.com/150',
    category: 'verano',
  },
  {
  id: 7,
  name: 'Producto 7',
  description: 'Descripción del Producto 7',
  price: 700,
  image: 'https://via.placeholder.com/150',
  category: 'otoño',
},
{
  id: 8,
  name: 'Producto 8',
  description: 'Descripción del Producto 8',
  price: 800,
  image: 'https://via.placeholder.com/150',
  category: 'invierno',
},
{
  id: 9,
  name: 'Producto 9',
  description: 'Descripción del Producto 9',
  price: 900,
  image: 'https://via.placeholder.com/150',
  category: 'verano',
},
{
  id: 10,
  name: 'Producto 10',
  description: 'Descripción del Producto 10',
  price: 1000,
  image: 'https://via.placeholder.com/150',
  category: 'verano',
},
{
  id: 11,
  name: 'Producto 11',
  description: 'Descripción del Producto 11',
  price: 1100,
  image: 'https://via.placeholder.com/150',
  category: 'invierno',
},
{
  id: 12,
  name: 'Producto 12',
  description: 'Descripción del Producto 12',
  price: 1200,
  image: 'https://via.placeholder.com/150',
  category: 'verano',
},
];

const ItemListContainer = ({ greeting }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div>
      <h2>{greeting}</h2>
      <Categories onCategoryClick={handleCategoryClick} /> {/* Agrega el componente Categories con su prop */}
      <ul className="item-list-container">
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <h3>{product.name}</h3>
              <img src={product.image} alt={product.name} />
              <p>{product.description}</p>
              <p>Precio: ${product.price}</p>
            </Link>
            <button>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;