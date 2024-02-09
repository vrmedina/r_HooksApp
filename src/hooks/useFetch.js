import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    try {
      const resp = await fetch(url);
      const data = await resp.json();

      setState({
        data,
        isLoading: false,
        hasError: true,
      });
    } catch (error) {
      setState({
        data: { error: error },
        isLoading: false,
        hasError: true,
      });
    }
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
