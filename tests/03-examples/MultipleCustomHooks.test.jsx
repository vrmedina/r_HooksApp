const { render, screen, fireEvent } = require("@testing-library/react");
const { MultipleCustomHooks } = require("../../src/03-examples/MultipleCustomHooks");
const { useFetch } = require("../../src/03-examples/hooks/useFetch");
const { useCounter } = require("../../src/03-examples/hooks/useCounter");

jest.mock("../../src/03-examples/hooks/useFetch");
jest.mock("../../src/03-examples/hooks/useCounter");

describe("Pruebas en <MultipleCustomHooks />", () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  })

  test("debe mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("Rick and Morty Characters App"));
    expect(screen.getByText("Loading Character..."));
    const nextButton = screen.getByRole("button", { name: "Next Character" });
    expect(nextButton.innerHTML).toBe("Next Character");
  });

  test("debe mostrar un personaje", () => {
    useFetch.mockReturnValue({
      data: {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        location: {
          name: "Citadel of Ricks",
          url: "https://rickandmortyapi.com/api/location/3",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("Rick Sanchez")).toBeTruthy();
    expect(screen.getByText("Human")).toBeTruthy();
  });

  test("debe llamar la funcion de incrementar", () => {
    useFetch.mockReturnValue({
      data: {
        id: 1,
        name: "Rick Alvarez",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        location: {
          name: "Citadel of Ricks",
          url: "https://rickandmortyapi.com/api/location/3",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Next Character" });
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalled();
  });
});
