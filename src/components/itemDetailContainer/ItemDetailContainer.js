import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import products from '../productList/Products';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      const foundProduct = products.find((p) => p.id === parseInt(id, 10));
      setProduct(foundProduct);
    }, [id]);
  
    const handleAddToCart = () => {
      // lógica para agregar el producto al carrito
      console.log('Producto agregado al carrito:', product);
    };
  
    if (!product) {
      return <div>Producto no encontrado</div>;
    }
  
    return (
      <div className="item-detail-container">
        <h2>Detalles del producto</h2>
        <h3>{product.name}</h3>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
        <button onClick={handleAddToCart}>Agregar al carrito</button> 
      </div>
    );
  };
  
  export default ItemDetailContainer;