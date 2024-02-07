// Nota: React Hook Form es una libreria muy completa de manejo de formularios con hooks
import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState( initialForm );
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
