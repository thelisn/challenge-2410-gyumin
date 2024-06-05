import { useState } from "react";
import useFeedStore from "../../store/useFeedStore";
import SearchInput from "./SearchInput";

const SearchBox = () => {
  const { data, setRenderData } = useFeedStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filterData = () => {
    const filteredByTitle = searchTerm ? data.filter((post) => post.title.includes(searchTerm)) : data;

    const filteredByDate = filteredByTitle.filter((post) => {
      const postDate = new Date(post.date);
      const start = new Date(startDate);
      const end = new Date(endDate);

      return (!startDate || postDate >= start) && (!endDate || postDate <= end);
    });

    setRenderData(filteredByDate);
  };

  return (
    <>
      <SearchInput
        config={{ label: "제목 검색", type: "text", id: "search-title", placeholder: "검색어를 입력해주세요" }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <p>날짜 검색</p>
      <SearchInput
        config={{ label: "날짜 검색 시작 범위", type: "date", id: "search-start-date" }}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <SearchInput
        config={{ label: "날짜 검색 종료 범위", type: "date", id: "search-end-date" }}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <button type="button" onClick={filterData}>
        검색
      </button>
    </>
  );
};

export default SearchBox;
