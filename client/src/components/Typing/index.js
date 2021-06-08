import React, { useRef } from "react";
import "./style.css";
import emojisIcon from "../../assets/images/emojis.png";
const Typing = ({ sendMessage }) => {
  const inputContainer = useRef(null);

  const handleSending = (e) => {
    const text = inputContainer.current.value;
    if (e.keyCode === 13) {
      if (text.trim() !== "") {
        sendMessage(text);
      }
      inputContainer.current.value = "";
    }
  };

  return (
    <div className="typing">
      <input
        type="text"
        placeholder="Nhập tin nhắn"
        className="message-typing"
        ref={inputContainer}
        onKeyUp={handleSending}
      />
      <img id="emojis-icon" src={emojisIcon} />
    </div>
  );
};

export default Typing;
