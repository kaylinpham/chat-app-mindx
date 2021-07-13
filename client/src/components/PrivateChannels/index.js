import React, { useState } from "react";
import FriendScroller from "../FriendScroller";
import SearchBar from "../SearchBar";

import "./style.css";
import { useSelector } from "react-redux";

const PrivateChannels = () => {
  const conversations = useSelector(
    (state) => state.conversation.conversations
  );
  const [keyWord, setKeyWord] = useState("");

  const handleSearching = (e) => {
    setKeyWord(() => e.target.value);
  };

  return (
    <nav className="private-channels">
      <SearchBar handleSearching={handleSearching} />
      <FriendScroller
        conversations={
          keyWord
            ? conversations.filter((conversation) =>
                conversation.fullName
                  .toLowerCase()
                  .includes(keyWord.toLowerCase())
              )
            : conversations
        }
      />
    </nav>
  );
};

export default PrivateChannels;
