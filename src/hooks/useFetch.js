import { useQuery } from "@tanstack/react-query";

const useFetch = () => {
  const BASE_URL = import.meta.env.VITE_DB_URL;

  async function fetchData() {
    try {
      const response = await fetch(BASE_URL, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchData(),
  });

  return { data, isLoading, error };
};

export default useFetch;
