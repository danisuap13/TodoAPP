import "./TodoItem.css";
function TodoItem(props) {
    return(
      <li 
      className={`todoList__todoItem ${props.completado && "todoList__todoItem--active"}`}>
        <span 
        className={`todoList__todoItem_completedIcon ${ props.completado && "Icon-check--active"}`}
        onClick={props.onComplete}>V</span>
        
        <p className={`todoList__todoItem_text ${ props.completado && "Text-check--active"}`}>{props.texto}</p>
        <span className="todoList__todoItem_deleteIcon" onClick={props.onDelete}>X</span>
      </li>
    );
  }

export { TodoItem }