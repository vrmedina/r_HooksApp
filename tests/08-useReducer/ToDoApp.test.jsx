import { render, screen } from "@testing-library/react";
import { ToDoApp } from "../../src/08-useReducer/ToDoApp";
import { useTodo } from "../../src/08-useReducer/hooks/useTodo";

jest.mock("../../src/08-useReducer/hooks/useTodo");

describe("Pruebas en <ToDoApp />", () => {
  useTodo.mockReturnValue({
    todos: [
      { id: 1, description: "Capturar a Pikachu", done: false },
      { id: 2, description: "Capturar a Raichu", done: true },
    ],
    countTodos: 2,
    pendingTodos: 1,
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    handleNewTodo: jest.fn(),
  });

  test("debe mostrar el componente correctamente", () => {
    render(<ToDoApp />);

    expect(screen.getByText("Capturar a Pikachu")).toBeTruthy();
    expect(screen.getByText("Capturar a Raichu")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
