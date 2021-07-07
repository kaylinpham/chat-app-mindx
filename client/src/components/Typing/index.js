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
        alt=""
        id="emojis-icon"
        src={emojisIcon}
        onClick={() => setIsShow(!isShow)}
      />
      {isShow && (
        <div className="emoji__wrapper" onClick={() => setIsShow(false)}>
          <Picker
            style={{ position: "absolute", bottom: "4.3rem", right: "1rem" }}
            onSelect={handleEmoji}
          />
        </div>
      )}
    </div>
  );
};

export default Typing;
