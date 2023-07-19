function TodoItem({ texto }){
    return(
      <li>
        <span>V</span>
        <p>{texto}</p>
        <span>X</span>
      </li>
    );
  }

export { TodoItem }