import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "kakaroto",
    email: "correo@correo.com",
  });

  const { username, email } = formState;

  const onInputChange = ({target}) => {
    const {name, value} = target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  useEffect(() => {
    return () => {
      console.log('Se cargó el componente SimpleForm!');
    };
  }, []);

  useEffect(() => {
    return () => {
      console.log('Se cambió algun valor del formulario');
    };
  }, [formState]);

  useEffect(() => {
    return () => {
      console.log('Se cambió email del formulario');
    };
  }, [email]);
  
  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="form-control mb-2 w-25"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        name="email"
        placeholder="user@email.com"
        className="form-control mb-2 w-25"
        value={email}
        onChange={onInputChange}
      />

      {
        (username === 'kakaroto2') && <Message />
      }

    </>
  );
};
