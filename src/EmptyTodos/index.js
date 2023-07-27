import React from 'react';
import './EmptyTodos.css'

function EmptyTodos() {
  return (
    <div className='empty-list-container'>
      <p className='empty-list'>¡LA LISTA DE TODOS ESTÁ VACIA!</p>
    </div>
  );
}

export { EmptyTodos };