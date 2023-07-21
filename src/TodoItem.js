import "./TodoItem.css";
function TodoItem({ texto, completado }){
    return(
      <li className="todoList__todoItem">
        <span className={`todoList__todoItem_completedIcon ${ completado && "Icon-check--active"}`}>V</span>
        <p className={`todoList__todoItem_text ${ completado && "Text-check--active"}`}>{texto}</p>
        <span className="todoList__todoItem_deleteIcon">X</span>
      </li>
    );
  }

export { TodoItem }