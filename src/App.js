import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true},
  { text: 'Llorar en la lloreria', completed: true},
  { text: 'Completar el curso de React', completed: true},
  { text: 'lalalalalsl', completed: true}
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter    completed={14} total={25}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} texto ={todo.text}/>
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
