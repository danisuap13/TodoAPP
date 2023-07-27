import React from 'react';
import './TodosLoading.css';
import cargando from './images.png'
function TodosLoading() {
  return (
    <div className='loading-container'>
      <div className='loading-image-container'>
          <img src={ cargando } className = "loading-image"></img>
      </div>
      <span>Cargando...</span>
    </div>
  );
}

export { TodosLoading };