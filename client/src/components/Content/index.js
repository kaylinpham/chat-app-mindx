import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";

import Conversation from "../Conversation";
import Typing from "../Typing";
import "./style.css";

import { getAllMessage } from "../../utils/api";
import { CONNECTION_PORT } from "../../constants/global";

let socket;

const Content = () => {
  const [messages, setMessages] = useState([]);
  const { conversationId } = useParams();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    socket = io(CONNECTION_PORT);
    console.log("2");
  }, []);

  useEffect(() => {
    socket.emit("join_room", conversationId);
    getAllMessage(conversationId, user.token).then((data) => {
      setMessages(data);
    });
    console.log("3");
  }, [conversationId, user.token]);

  useEffect(() => {
    socket.on("receiver_message", (data) => {
      setMessages([...messages, data]);
    });
  }, [messages]);

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
