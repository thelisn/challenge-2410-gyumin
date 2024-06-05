import { useState } from "react";
import useFeedStore from "../../store/useFeedStore";
import SearchInput from "./SearchInput";

const SearchBox = () => {
  const { data, setRenderData } = useFeedStore();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log(searchTerm);

    const filteredData = data.filter((post) => post.title.includes(searchTerm));

    console.log(filteredData);

    setRenderData(filteredData);
  };

  return (
    <>
      <SearchInput
        config={{ label: "검색어", type: "text", id: "search-title", placeholder: "검색어를 입력해주세요" }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="button" onClick={handleSearch}>
        검색
      </button>
    </>
  );
};

export default SearchBox;
