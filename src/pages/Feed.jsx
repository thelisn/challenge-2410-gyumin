import { useEffect } from "react";
import FeedList from "@/components/Feed/FeedList";
import SearchBox from "@/components/Feed/SearchBox";
import useFetchData from "@/hooks/useFetchData";
import useFeedStore from "@/store/useFeedStore";

const Feed = () => {
  // data fetch
  const { data, isLoading, error } = useFetchData();
  
  // data store
  const { setData, setRenderData, setIsLoading } = useFeedStore();

  useEffect(() => {
    setData(data);
    setRenderData(data);
    setIsLoading(isLoading);
  }, [data, isLoading, setData, setIsLoading, setRenderData]);

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
