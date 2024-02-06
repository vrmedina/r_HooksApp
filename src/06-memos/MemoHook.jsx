import { useState } from "react";
import { useCounter } from "../05-useLayoutEffect/hooks/useCounter";

export const MemoHook = () => {
  const { counter, increment } = useCounter(3);
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <button onClick={() => increment()} className="btn btn-primary">
        +1
      </button>
      <button onClick={() => setShow(!show)} className="btn btn-outline-primary">
        Show / Hide: {JSON.stringify(show)}
      </button>
    </>
  );
};
