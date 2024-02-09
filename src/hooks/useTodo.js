import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = ({ initialState }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  const countTodos = todos.length;

  const pendingTodos = todos.filter((todo) => !todo.done).length;

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (todo) => {
    const action = {
      type: "[TODO] Delete Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleToggleTodo = (todo) => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: todo,
    };

    dispatch(action);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    countTodos,
    pendingTodos,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
  };
};
