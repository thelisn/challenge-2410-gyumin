import { useEffect, useState } from "react";
import useFetchData from "@/hooks/useFetchData";
import FeedItem from "./FeedItem";

const FeedList = () => {
  const { data: fetchData, isLoading } = useFetchData();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(fetchData);
  }, [fetchData]);

  if (isLoading) return <p>Loading...</p>;

  return data.map((post, index) => {
    return <FeedItem key={index} post={post} />;
  });
};

export default FeedList;
