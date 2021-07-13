import React from "react";

import Content from "../Content";
import Title from "../Title";

import "./style.scss";

const ChatBox = () => {
  return (
    <div className="chatbox">
      <Title />
      <Content />
    </div>
  );
};

export default ChatBox;
