import { useState } from "react";
import useFeedStore from "@/store/useFeedStore";
import SearchInput from "./SearchInput";
import Button from "./Button";

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

  const resetData = () => {
    setSearchTerm("");
    setStartDate("");
    setEndDate("");
    setRenderData(data);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <SearchInput
          config={{ label: "제목 검색", type: "text", id: "search-title", placeholder: "검색어를 입력해주세요" }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <p className="px-2">날짜 검색</p>
        <div className="flex gap-2">
          <SearchInput
            config={{ label: "날짜 검색 시작 범위", type: "date", id: "search-start-date" }}
            onChange={(e) => setStartDate(e.target.value)}
            hiddenLabel={true}
          />
          <SearchInput
            config={{ label: "날짜 검색 종료 범위", type: "date", id: "search-end-date" }}
            onChange={(e) => setEndDate(e.target.value)}
            hiddenLabel={true}
          />
        </div>
      </div>

      <div className="flex gap-2 justify-end mt-1">
        <Button onClick={filterData} className="bg-blue-500 text-white text-base" text="검색" />
        <Button onClick={resetData} className="bg-blue-500 text-white text-base" text="초기화" />
      </div>
      <div className="border-t-2 border-gray-300 mt-1 mb-3" />
    </div>
  );
};

export default SearchBox;
