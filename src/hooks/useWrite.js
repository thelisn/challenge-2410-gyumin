import { useState } from "react";

const useWrite = () => {
  const BASE_URL = import.meta.env.VITE_DB_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const writePost = async (postData) => {
    setIsLoading(true);

    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });
      const responseData = await response.json();

      return responseData;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { writePost, isLoading, error };
};

export default useWrite;
