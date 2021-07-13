import React, { useRef, useState } from "react";
import "./style.css";
import emojisIcon from "../../assets/images/emojis.png";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

const Typing = ({ sendMessage }) => {
  const inputContainer = useRef(null);
  const [isShow, setIsShow] = useState(false);

  const handleSending = (e) => {
    const text = inputContainer.current.value;
    if (e.keyCode === 13) {
      if (text.trim() !== "") {
        sendMessage(text);
      }
      inputContainer.current.value = "";
    }
  };

  const handleEmoji = (e) => {
    inputContainer.current.value += e.native;
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
      <img
        id="emojis-icon"
        src={emojisIcon}
        alt="icons"
        onClick={() => setIsShow(!isShow)}
      />
      {isShow && (
        <Picker
          style={{ position: "absolute", bottom: "5rem", right: "1rem" }}
          onSelect={handleEmoji}
        />
      )}
    </div>
  );
};

export default Typing;
