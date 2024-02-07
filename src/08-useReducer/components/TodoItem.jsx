export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li onClick={ () => onToggleTodo(todo)} 
    className={`list-group-item d-flex justify-content-between ${ todo.done ? "bg-success bg-gradient text-white":""}`}>
      <span className={`align-self-center ${ todo.done ? "text-decoration-line-through":""}`}>{todo.description}</span>
      <button
        onClick={() => onDeleteTodo(todo)}
        className="btn btn-danger mx-3"
      >
        Borrar
      </button>
    </li>
  );
};
