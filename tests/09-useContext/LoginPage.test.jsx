import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe("Pruebas en <LoginPage />", () => {
  test("debe mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preElement = screen.getByLabelText("pre");
    expect(preElement.innerHTML).toBe("null");
  });

  test("debe llamar la funcion setUser con sus args al hacer click", () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    expect(setUserMock).toHaveBeenCalledWith({"email": "victor@mundo.com", "id": 1, "name": "Victor Medina", "username": "victor"});
  });
});
