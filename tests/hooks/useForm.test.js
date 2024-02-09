import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";
import { act } from "react-dom/test-utils";

describe("Pruebas en custom hook useForm", () => {
  const initialForm = {
    username: "vrmedina",
    email: "vrmedina@email.com",
  };

  test("debe regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      username: initialForm.username,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("debe cambiar el nombre del formulario ", () => {
    const newValue = "Juan";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    const target = { name: "username", value: newValue };

    act(() => {
      onInputChange({ target });
    });

    expect(result.current.username).toBe(newValue);
    expect(result.current.formState.username).toBe(newValue);
  });

  test("debe reiniciar el formulario", () => {
    const newValue = "Juan";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    const target = { name: "username", value: newValue };

    act(() => {
      onInputChange({ target });
      onResetForm();
    });

    expect(result.current.username).toBe(initialForm.username);
    expect(result.current.formState.username).toBe(initialForm.username);
    expect(result.current.formState).toEqual(initialForm);
  });
});