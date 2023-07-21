import "./TodoButton.css";
function CreateTodoButton(){
    return(
      <button className="todoButton" onClick={(event) => {
        console.log('hola')
        console.log(event)
      }}>+</button>
    );
  }

export { CreateTodoButton };