import React from "react";
import "./style.css";
const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        type="text"
        placeholder="Tìm kiếm bạn bè"
      />
    </div>
  );
};

export default SearchBar;
