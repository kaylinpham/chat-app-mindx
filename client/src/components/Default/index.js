import React, { useState, useRef } from "react";

import "./style.css";
import defaultImg from "../../assets/images/default.png";

const Default = ({ handleAddFriend }) => {
  const [isFound, setIsFound] = useState(true);
  const inputContainer = useRef(null);

  const handleFinding = (e) => {
    const text = inputContainer.current.value;
    if (e.keyCode === 13) {
      if (text.trim() !== "") {
        try {
          handleAddFriend(text);
          setIsFound(true);
        } catch (error) {
          console.log(error);
          setIsFound(false);
        }
      }
      inputContainer.current.value = "";
    }
  };

  return (
    <div className="default">
      <img src={defaultImg} />
      <div className="typing">
        <input
          type="text"
          placeholder="Nhập tên đăng nhập"
          className="add-friend-typing"
          onKeyUp={handleFinding}
          ref={inputContainer}
        />
        <button id="add-friend__btn" className="btn">
          + Thêm bạn
        </button>
        <p style={{ color: "#ee5253" }} className={isFound && "hide-text"}>
          Không tồn tại người dùng
        </p>
      </div>
    </div>
  );
};

export default Default;
