import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Pruebas en todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "demo todo",
      done: false,
    },
    {
      id: 2,
      description: "demo todo number 2",
      done: false,
    },
  ];

  test("debe regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("debe agregar un TODO", () => {
    const action = {
      type: "[TODO] Add Todo",
      payload: {
        id: 2,
        description: "Nuevo todo 2",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(3);
    expect(newState).toContain(action.payload);
  });

  test("debe eliminar un TODO", () => {
    const action = {
      type: "[TODO] Delete Todo",
      payload: {
        id: 2,
        description: "demo todo number 2",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(1);
  });

  test("debe realizar el toggle del TODO", () => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: {
        id: 1,
        description: "demo todo",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBeTruthy();

    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBeFalsy();
  });
});
