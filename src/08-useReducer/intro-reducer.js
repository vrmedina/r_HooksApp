const initialState = [
  {
    id: 1,
    todo: "Obtener la Gema del Alma",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] Add new ToDo task") {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

// console.log(todos);

const newTodo = {
  id: 2,
  todo: "Obtener la Gema del Tiempo",
  done: false,
};

const addTodoAction = {
  type: "[TODO] Add new ToDo task",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);
