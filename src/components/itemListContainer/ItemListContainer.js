import Categories from '../categories/Categories';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemListContainer.css';
import products from '../productList/Products';


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