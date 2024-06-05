import { useEffect, useState } from "react";
import FeedList from "@/components/Feed/FeedList";
import SearchBox from "@/components/Feed/SearchBox";
import useFetch from "@/hooks/useFetch";
import useFeedStore from "@/store/useFeedStore";
import Button from "@/components/Button";
import { useNavigate } from "react-router";

const Feed = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useFetch();
  const { setData, setRenderData, setIsLoading } = useFeedStore();
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    setData(data);
    setRenderData(data);
    setIsLoading(isLoading);
  }, [data, isLoading, setData, setIsLoading, setRenderData]);

  const handleClickSearchButton = () => {
    setIsSearch(!isSearch);
  };

  const handleClickWriteButton = () => {
    navigate("/write");
  };

  return (
    <div className="mx-4">
      <div className="flex justify-between mt-4 mb-3">
        <Button onClick={handleClickSearchButton} text="검색" className="font-bold border-2 hover:border-blue-500" />
        <Button onClick={handleClickWriteButton} text="글쓰기" className="font-bold border-2 hover:border-blue-500" />
      </div>
      {isSearch && <SearchBox />}

      <FeedList />

      {isLoading && <p>로딩 중...</p>}
      {error && <p>에러 발생: {error.message}</p>}
    </div>
  );
};

export default Feed;
