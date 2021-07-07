import React from "react";
import { useParams } from "react-router-dom";

import Content from "../Content";
import Title from "../Title";

import "./style.css";

const ChatBox = () => {
  const { conversationId, receiverId } = useParams();

  return (
    <div className="chatbox">
      <Title />
      <Content />
    </div>
  );
};

export default ChatBox;
