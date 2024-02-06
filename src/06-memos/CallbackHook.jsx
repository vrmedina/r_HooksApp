import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // useCallback soluciona ese problema, esta funcion ocupa el mismo espacio en memoria siempre
  const incrementFather = useCallback((value = 1) => {
    setCounter((c) => c + value);
  }, []);

  // Apunta a distintos espacios de memoria cada vez que se redibuja el componente
  //   const incrementFather = () => {
  //     setCounter(counter + 1);
  //   }

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
};
