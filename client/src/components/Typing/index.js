import React from "react";
import "./style.css";
import emojisIcon from "../../assets/images/emojis.png";
const Typing = () => {
  return (
    <div className="typing">
      <input
        type="text"
        placeholder="Nhập tin nhắn"
        className="message-typing"
      />
      <img id="emojis-icon" src={emojisIcon} />
    </div>
  );
};

export default Typing;
