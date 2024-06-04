import { useEffect, useState } from "react";

const baseUrl = import.meta.env.VITE_DB_URL;

const defaultOptions = {
  method: "GET",
  headers: { "Content-Type": "application/json" },
};

const useFetchData = (options = {}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    setIsLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(baseUrl, {
          ...defaultOptions,
          ...options,
          signal: abortController.signal,
        });
        const responseData = await response.json();

        setData(responseData);
      } catch (error) {
        if (!(error instanceof DOMException)) {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  return { data, isLoading, error };
};

export default useFetchData;
