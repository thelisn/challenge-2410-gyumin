import { useState } from "react";
import useFeedStore from "@/store/useFeedStore";
import Input from "../Input";
import Button from "../Button";
import debounce from "@/utils/debounce";

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
    <div className="flex flex-col gap-2 transition-all">
      <div className="mt-2 flex flex-col">
        <Input
          label="제목 검색"
          type="text"
          id="search-title"
          role="searchbox"
          placeholder="검색어를 입력해주세요"
          onChange={debounce((e) => setSearchTerm(e.target.value))}
        />
      </div>

      <div className="flex flex-col">
        <p className="px-2 font-semibold">날짜 검색</p>
        <div className="flex gap-2">
          <Input
            label="날짜 검색 시작 범위"
            type="date"
            id="search-start-date"
            role="searchbox"
            onChange={debounce((e) => setStartDate(e.target.value))}
            hiddenLabel={true}
          />
          <Input
            label="날짜 검색 종료 범위"
            type="date"
            id="search-end-date"
            role="searchbox"
            onChange={debounce((e) => setEndDate(e.target.value))}
            hiddenLabel={true}
          />
        </div>
      </div>

      <div className="flex gap-2 justify-end mt-1 mb-2">
        <Button onClick={filterData} className="execute-button" text="검색" />
        <Button onClick={resetData} className="execute-button" text="초기화" />
      </div>
    </div>
  );
};

export default SearchBox;
