import React from "react";
import { Link } from "react-router-dom";

import homeIcon from "../../assets/images/home1.png";
import "./style.scss";

const SearchBar = ({ handleSearching }) => {
  return (
    <div className="search-bar">
      <Link to="/home" className="home">
        <img src={homeIcon} alt="home" id="home__icon" />
      </Link>
      <input
        className="search-bar__input"
        type="text"
        placeholder="Tìm kiếm bạn bè"
        onChange={handleSearching}
      />
    </div>
  );
};

export default SearchBar;
