
import React from 'react';
import './Categories.css';

const Categories = ({ onCategoryClick }) => {
  return (
    <div className="category-buttons">
      <button onClick={() => onCategoryClick()}><i className="fa fa-list"></i> Todos</button>
      <button className="aventura" onClick={() => onCategoryClick('Aventura')}><i className="fa fa-compass"></i> Aventura</button>
      <button className="disparos" onClick={() => onCategoryClick('Disparos')}><i className="fa fa-crosshairs"></i> Disparos</button>
      <button className="accion" onClick={() => onCategoryClick('Accion')}><i className="fa fa-fighter-jet"></i> Accion</button>
      <button className="rol" onClick={() => onCategoryClick('Rol')}><i className="fa fa-user-secret"></i> Rol</button>
    </div>
  );
};

export default Categories;
