import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import { getProducts } from '../../services/firebase/firestore/products';
import { CartContext } from '../contexts/CartContext'; 

const ItemDetailContainer = () => {
  const { nombre } = useParams();
  const { cart, setCart } = useContext(CartContext); // Accede a cart y setCart de CartContext

  const [allProducts, setAllProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showMessage, setShowMessage] = useState(false); // Nuevo estado para controlar la visibilidad del mensaje

  useEffect(() => {
    const fetchProducts = async () => {
      const productsList = await getProducts();
      setAllProducts(productsList);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (allProducts.length) {
      const foundProduct = allProducts.find((p) => p.nombre === nombre);
      setSelectedProduct(foundProduct);
    }
  }, [nombre, allProducts]);

  const handleAddToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.nombre === product.nombre
    );

    if (existingProductIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setShowMessage(true); // Muestra el mensaje
    setTimeout(() => setShowMessage(false), 2000); // Oculta el mensaje después de 2 segundos
  };

  if (!selectedProduct) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="item-detail-container">
      <h2>Detalles del producto</h2>
      <h3>{selectedProduct.nombre}</h3>
      <img src={selectedProduct.portada} alt={selectedProduct.nombre} />
      <p>{selectedProduct.descripcion}</p>
      <p className='precio'>Precio: ${selectedProduct.precio}</p>
      <button onClick={() => handleAddToCart(selectedProduct)}>Agregar al carrito</button>
      {showMessage && 
        <div className="floating-message">Producto agregado al carrito</div>
      } 
    </div>
  );
};

export default ItemDetailContainer;
