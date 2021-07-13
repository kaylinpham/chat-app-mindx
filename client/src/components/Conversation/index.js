import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

import { useSelector } from "react-redux";
import Message from "../Message";
import "./style.scss";

const Conversation = ({ messages }) => {
  const user = useSelector((state) => state.user.user);
  const { userId } = useSelector((state) => state.user.user);
  const divContainer = useRef(null);
  let history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/error");
    }
  }, []);

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
