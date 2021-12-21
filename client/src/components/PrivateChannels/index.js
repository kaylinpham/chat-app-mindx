import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./style.scss";
import SearchBar from "../SearchBar";
import FriendScroller from "../FriendScroller";

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
