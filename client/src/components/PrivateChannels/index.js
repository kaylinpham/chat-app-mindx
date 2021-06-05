import React, { useEffect, useState } from "react";
import FriendScroller from "../FriendScroller";
import SearchBar from "../SearchBar";
import "./style.css";
import { getConversationByUserId } from "../../utils/user";

const PrivateChannels = () => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    getConversationByUserId(user.userId).then((data) => {
      console.log(data);
      setConversations(data);
    });
  }, []);
  console.log(conversations);
  return (
    <nav className="private-channels">
      <SearchBar />
      <FriendScroller />
    </nav>
  );
};

export default PrivateChannels;
