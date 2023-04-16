import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

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