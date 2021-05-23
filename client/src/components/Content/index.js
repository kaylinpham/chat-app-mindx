import React from "react";
import Conversation from "../Conversation";
import Typing from "../Typing";
import "./style.css";
const Content = () => {
  return (
    <div className="content">
      <Conversation />
      <Typing />
    </div>
  );
};

export default Content;
