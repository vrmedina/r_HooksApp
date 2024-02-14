import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("Pruebas en <HomePage />", () => {
  const user = {
    id: 1,
    name: "Victor",
  };

  test("debe mostrar el componente sin el nombre de usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preElement = screen.getByLabelText("pre");
    expect(preElement.innerHTML).toBe("null");
  });

  test("debe mostrar el componente con el nombre de usuario", () => {
    render(
      <UserContext.Provider value={{ user: user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preElement = screen.getByLabelText("pre");
    expect(preElement.innerHTML).toContain(user.name);
    expect(preElement.innerHTML).toContain(user.id.toString());
    screen.debug()
  });
});
