import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const btnClick = () => {
    // document.querySelector('input').select();
    // console.log(inputRef);
    inputRef.current.select();
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef} 
        type="text" 
        name="name" 
        placeholder="Ingrese su nombre" 
        className="form-control w-25"  
      />

      <button 
        onClick={btnClick}
        className="btn btn-secondary mt-2"
      >Set Focus</button>
    </>
  );
};
