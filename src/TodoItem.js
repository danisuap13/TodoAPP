import "./TodoItem.css";
function TodoItem({ texto }){
    return(
      <li className="todoList__todoItem">
        <span className="todoList__todoItem_completedIcon">V</span>
        <p>{texto}</p>
        <span className="todoList__todoItem_deleteIcon">X</span>
      </li>
    );
  }

export { TodoItem }