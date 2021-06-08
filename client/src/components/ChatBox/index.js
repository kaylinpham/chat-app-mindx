import React from "react";

import Content from "../Content";
import Title from "../Title";

import "./style.css";

const ChatBox = () => {
  console.log("chatbox");

  return (
    <div className="chatbox">
      <Title />
      <Content />
    </div>
  );
};

export default ChatBox;
