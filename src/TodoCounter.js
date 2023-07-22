import './TodoCounter.css';

function TodoCounter({ total, completed }){
    return(
      total == completed & total != 0 ?
      
      <h1 className='counter'>
        Felicidades por completar los TODOs
      </h1>
      
      :

      <h1 className='counter'>
        Has completado {completed} de {total} TODOs
      </h1>
    );
}

export { TodoCounter } ;
