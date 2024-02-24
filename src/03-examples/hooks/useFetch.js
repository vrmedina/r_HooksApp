import { useEffect, useState } from 'react';

const localCache = {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    if (localCache[url]) {
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
      });
      return;
    }

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

      localCache[url] = data;
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
