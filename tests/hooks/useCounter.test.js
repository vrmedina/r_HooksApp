import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("Pruebas en custom hook useCounter", () => {
  test("debe retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(1);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("debe retornar el counter con el valor de 100", () => {
    const initialValue = 100;
    const { result } = renderHook(() => useCounter(initialValue));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test("debe incrementar el contador", () => {
    const { result } = renderHook(() => useCounter(50));
    const { counter, increment } = result.current;

    act(() => {
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(53);
  });

  test("debe decrementar el contador", () => {
    const { result } = renderHook(() => useCounter(50));
    const { counter, decrement } = result.current;

    act(() => {
      decrement();
      decrement(2);
    });

    expect(result.current.counter).toBe(47);
  });

  test("debe reiniciar el contador al valor inicial", () => {
    const { result } = renderHook(() => useCounter(20));
    const { counter, increment, reset } = result.current;

    act(() => {
      increment(500);
      reset();
    });

    expect(result.current.counter).toBe(20);
  });
});
