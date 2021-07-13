import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./style.css";
import defaultImg from "../../assets/images/default.png";
import { addConversation } from "../../redux/conversation/conversationActions";

const Default = () => {
  const inputContainer = useRef(null);
  const isFound = useSelector((state) => state.conversation.isFound);
  const { token } = useSelector((state) => state.user.user.token);
  const dispatch = useDispatch();

  const handleFinding = (e) => {
    if (e.keyCode === 13) {
      handleBtn();
    }
  };

  const handleAddFriend = (userName) => {
    const addConversationThunk = addConversation(token, userName);
    dispatch(addConversationThunk);
  };

  const handleBtn = () => {
    const text = inputContainer.current.value;
    if (text.trim() !== "") {
      handleAddFriend(text.trim());
    }
    inputContainer.current.value = "";
  };

  return (
    <div className="default">
      <img src={defaultImg} alt="monster-finds-friend" />
      <div className="typing">
        <input
          type="text"
          placeholder="Nhập tên đăng nhập"
          className="add-friend-typing"
          onKeyUp={handleFinding}
          ref={inputContainer}
        />
        <button id="add-friend__btn" className="btn" onClick={handleBtn}>
          + Thêm bạn
        </button>
        <br />
        <br />
        <p style={{ color: "#ee5253" }} className={isFound ? "hide-text" : ""}>
          Không tồn tại người dùng
        </p>
      </div>
    </div>
  );
};

export default Default;
