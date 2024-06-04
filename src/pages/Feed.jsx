import { useEffect } from "react";
import FeedList from "@/components/Feed/FeedList";
import SearchBox from "../components/Feed/SearchBox";
import useFetchData from "../hooks/useFetchData";
import useFeedStore from "../hooks/useFeedStore";

const Feed = () => {
  const { data, isLoading, error } = useFetchData();
  const { setData, setIsLoading } = useFeedStore();

  useEffect(() => {
    setData(data);
    setIsLoading(isLoading);
  }, [data, isLoading, setData, setIsLoading]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <SearchBox />
      <FeedList />
    </>
  );
};

export default Feed;
