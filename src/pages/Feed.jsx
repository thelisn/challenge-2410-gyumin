import { useEffect, useState } from "react";
import FeedList from "@/components/Feed/FeedList";
import SearchBox from "@/components/Feed/SearchBox";
import useFetchData from "@/hooks/useFetchData";
import useFeedStore from "@/store/useFeedStore";
import Button from "../components/Feed/Button";

const Feed = () => {
  const { data, isLoading, error } = useFetchData();
  const { setData, setRenderData, setIsLoading } = useFeedStore();
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    setData(data);
    setRenderData(data);
    setIsLoading(isLoading);
  }, [data, isLoading, setData, setIsLoading, setRenderData]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleClickSearchButton = () => {
    setIsSearch(!isSearch);
  };

  const handleClickWriteButton = () => {
    console.log("click");
  };

  return (
    <div className="mx-4">
      <div className="flex justify-between mt-4 mb-3">
        <Button onClick={handleClickSearchButton} text="검색" className="font-bold border-2 hover:border-blue-500" />
        <Button onClick={handleClickWriteButton} text="글쓰기" className="font-bold border-2 hover:border-blue-500" />
      </div>
      {isSearch && <SearchBox />}

      <FeedList />
    </div>
  );
};

export default Feed;
