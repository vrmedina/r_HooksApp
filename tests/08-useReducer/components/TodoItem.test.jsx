import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/08-useReducer/components/TodoItem";

describe("Pruebas en <TodoItem /> >", () => {
  const todo = {
    id: 1,
    description: "Capturar a Pikachu",
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("debe mostrar el TODO pendiente", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toContain("list-group-item d-flex justify-content-between");
    expect(liElement.className).not.toContain("bg-success bg-gradient text-white");

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  });

  test("debe mostrar el TODO completado", () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toContain("bg-success bg-gradient text-white");

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("debe llamar el toggleTodo al hacer click en el li", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    fireEvent.click(liElement);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo);
  });

  test("debe llamar el deleteTodo al hacer click en el boton", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo);
  });
});
