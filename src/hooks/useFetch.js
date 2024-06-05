import { useEffect, useState } from "react";


const useFetch = () => {
  const BASE_URL = import.meta.env.VITE_DB_URL;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(BASE_URL, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const responseData = await response.json();

        setData(responseData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetch;
