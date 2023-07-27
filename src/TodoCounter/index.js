import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  if (total === completed) {
    if (total !== 0) {
      return (
      <h1 className="TodoCounter">¡Felicitaciones por completar los TODOS! </h1>
      );
    }
    return (
      <h1 className="TodoCounter">
        <strong>
          ¡Crea tu primer TODO!
        </strong>
      </h1>
    );
  } else {
    return (
      <h1 className="TodoCounter">
        Has completado <span>{completed}</span> de <span>{total}</span> TODOs
      </h1>
    );
  }
}

export { TodoCounter };
