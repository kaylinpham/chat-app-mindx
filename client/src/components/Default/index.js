import React, { useState } from "react";
import "./style.css";
import defaultImg from "../../assets/images/default.png";
const Default = () => {
  const [isFound, setIsFound] = useState(true);

  return (
    <div className="default">
      <img src={defaultImg} />
      <div className="typing">
        <input
          type="text"
          placeholder="Tìm kiếm mọi người"
          className="add-friend-typing"
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
