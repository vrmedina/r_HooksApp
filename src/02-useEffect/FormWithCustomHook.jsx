// import { useState, useEffect } from "react";
import { useForm } from "./hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, email, password } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  // const { username, email, password } = formState;

  return (
    <>
      <h1>Simple Form With Custom Hook</h1>
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

      <input
        type="password"
        name="password"
        placeholder="Password"
        className="form-control mb-2 w-25"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary">
        Borrar
      </button>
    </>
  );
};
