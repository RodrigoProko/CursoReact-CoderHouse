import Categories from '../categories/Categories';
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './ItemListContainer.css';
import { getProducts } from '../../services/firebase/firestore/products';
import { CartContext } from '../contexts/CartContext'; 


const ItemListContainer = ({ greeting }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { cart, setCart } = useContext(CartContext);


  const handleAddToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.nombre === product.nombre
    );
  
    if (existingProductIndex >= 0) {
      // Incrementa la cantidad del producto existente en el carrito
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // Agrega el producto al carrito con una cantidad inicial de 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  

  const handleCategoryClick = (categoria) => {
    setSelectedCategory(categoria);
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsList = await getProducts();
      setProducts(productsList);
    };
    fetchProducts();
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categoria === selectedCategory)
    : products;

  return (
    <div>
      <h2>{greeting}</h2>
      <Categories onCategoryClick={handleCategoryClick} /> 
      <ul className="item-list-container">
        {filteredProducts.map((product) => (
          <li key={product.nombre}>
            <Link to={`/product/${product.nombre}`}>
              <h3>{product.nombre}</h3>
              <img src={product.portada} alt={product.nombre} />
              <p>Precio: ${product.precio}</p>
            </Link>
            <button onClick={() => handleAddToCart(product)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;