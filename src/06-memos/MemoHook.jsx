import { useMemo, useState } from "react";
import { useCounter } from "../05-useLayoutEffect/hooks/useCounter";

const heavyFunction = ( n = 100 ) => {
  for (let i = 0; i < n; i++) {
    console.log("Ahi vamos! ...");
  }
  return `${n} iteraciones...`
}

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);
  const memorizedValue = useMemo(() => heavyFunction(counter), [counter])

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4>{ memorizedValue }</h4>
      <button onClick={() => increment()} className="btn btn-primary">
        +1
      </button>
      <button onClick={() => setShow(!show)} className="btn btn-outline-primary">
        Show / Hide: {JSON.stringify(show)}
      </button>
    </>
  );
};
