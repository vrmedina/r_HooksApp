import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("medibuje");
  return (
    <button onClick={() => increment(4)} className="btn btn-primary">
      Incrementar
    </button>
  );
});
