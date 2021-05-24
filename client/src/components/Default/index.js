import React from "react";
import "./style.css";
import defaultImg from "../../assets/images/default.png";
const Default = () => {
  return (
    <div className="default">
      <img src={defaultImg} />
      <div className="typing">
        <input
          type="text"
          placeholder="Tìm kiếm bạn bè"
          className="add-friend-typing"
        />
        <p style={{ color: "#ee5253" }}>Không tồn tại người dùng</p>
      </div>
      <button id="add-friend__btn" className="btn">
        + Add friend
      </button>
    </div>
  );
};

export default Default;
