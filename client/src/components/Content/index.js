import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";

import Conversation from "../Conversation";
import Typing from "../Typing";
import "./style.scss";

import { getAllMessage } from "../../utils/api";
import { SocketContext } from "../../utils/socket";

const Content = () => {
  const [messages, setMessages] = useState([]);
  const { conversationId } = useParams();
  let history = useHistory();

  const user = JSON.parse(localStorage.getItem("user"));
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.on("receiver_message", (data) => {
      setMessages([...messages, data]);
    });
  }, [messages]);

  useEffect(() => {
    socket.emit("join_room", conversationId);
    if (user) {
      getAllMessage(conversationId, user.token).then((data) => {
        setMessages(data);
      });
    } else {
      history.push("/error");
    }
  }, [conversationId]);

  const sendMessage = (message) => {
    let newMessage = {
      conversationId: conversationId,
      content: message,
      sender: user.userId,
    };
    socket.emit("send_message", newMessage);
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="content">
      <Conversation messages={messages} />
      <Typing sendMessage={sendMessage} />
    </div>
  );
};

export default Content;
