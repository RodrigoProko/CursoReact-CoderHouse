import React from 'react';
import './Categories.css';

const Categories = ({ onCategoryClick }) => {
  return (
    <div className="category-buttons">
      <button onClick={() => onCategoryClick()}>Todos</button>
      <button className="verano" onClick={() => onCategoryClick('verano')}>Verano</button>
      <button className="invierno" onClick={() => onCategoryClick('invierno')}>Invierno</button>
      <button className="otono" onClick={() => onCategoryClick('otoño')}>Otoño</button>
    </div>
  );
};

export default Categories;
