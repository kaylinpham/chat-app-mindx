import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Message from "../Message";
import "./style.css";
const Conversation = ({ messages }) => {
  const { userId } = useSelector((state) => state.user.user);
  const divContainer = useRef(null);

  useEffect(() => {
    divContainer.current.scrollIntoView({ block: "start" });
  }, [messages]);

  return (
    <div className="conversation">
      {messages.map((message) => {
        return (
          <Message
            key={message._id}
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
