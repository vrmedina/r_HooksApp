import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
import { useTodo } from "./hooks/useTodo";

export const ToDoApp = () => {
  const {
    todos,
    countTodos,
    pendingTodos,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
  } = useTodo([]);

  return (
    <>
      <h1>
        Todo App{" "}
        <span className="border border-primary rounded p-2 mx-3">
          Tareas: {countTodos}
        </span>{" "}
        <span className="border border-danger rounded p-2 mx-3">
          Pendientes: {pendingTodos}
        </span>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar Tarea</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
