import React, { useEffect, useState, useContext } from "react";
import FriendScroller from "../FriendScroller";
import SearchBar from "../SearchBar";
import "./style.css";
import { getConversationByUserId } from "../../utils/api";
import { AuthContext } from "../../pages/Home";

const PrivateChannels = () => {
  const [conversations, setConversations] = useState([]);
  const [keyWord, setKeyWord] = useState("");
  const newConversations = useContext(AuthContext).conversations;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    getConversationByUserId(user.userId).then((data) => {
      setConversations(data);
    });
  }, []);

  useEffect(() => {
    if (
      newConversations &&
      JSON.stringify(newConversations) !== JSON.stringify(conversations)
    ) {
      setConversations(newConversations);
    }
  });

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
