import React, { useEffect, useRef } from "react";
import Message from "../Message";
import "./style.css";
const Conversation = ({ messages }) => {
  const { userId } = JSON.parse(localStorage.getItem("user"));
  const divContainer = useRef(null);

  useEffect(() => {
    divContainer.current.scrollIntoView({ block: "start" });
  }, [messages]);

  return (
    <div className="conversation">
      {messages.map((message) => {
        return (
          <Message
            isYours={message.sender === userId}
            content={message.content}
          />
        );
      })}
      <div id="scroll" ref={divContainer}></div>
    </div>
  );
};

export default Conversation;
