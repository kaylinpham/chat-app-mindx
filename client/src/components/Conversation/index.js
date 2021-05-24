import React from "react";
import Message from "../Message";
import "./style.css";
const Conversation = () => {
  return (
    <div className="conversation">
      <Message isYours={false} />
      <Message isYours={true} />
      <Message isYours={false} />
      <Message isYours={false} />
    </div>
  );
};

export default Conversation;
