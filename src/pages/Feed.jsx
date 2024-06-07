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

  const handleToggleSearch = () => {
    setIsSearch(!isSearch);
  };

  const handleClickWriteButton = () => {
    navigate("/write");
  };

  return (
    <div className="mx-4">
      <div className="flex justify-between mt-4 mb-2">
        <Button onClick={handleToggleSearch} text="검색" className="nav-button" />
        <Button onClick={handleClickWriteButton} text="글쓰기" className="nav-button" />
      </div>

      {isSearch && <SearchBox />}

      <div className="boundary-line" />

      {isLoading ? <p>로딩 중...</p> : <FeedList />}
      {error && <p>에러 발생: {error.message}</p>}
    </div>
  );
};

export default Feed;
