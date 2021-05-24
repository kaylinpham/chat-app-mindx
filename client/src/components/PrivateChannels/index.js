import React from "react";
import FriendScroller from "../FriendScroller";
import SearchBar from "../SearchBar";
import "./style.css";
const PrivateChannels = () => {
  return (
    <nav className="private-channels">
      <SearchBar />
      <FriendScroller />
    </nav>
  );
};

export default PrivateChannels;
