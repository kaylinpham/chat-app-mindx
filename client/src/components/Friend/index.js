import React from "react";
import "./style.css";
import defaultAvt from "../../assets/images/defaultAvatar.png";

const Friend = () => {
  return (
    <div className="friend-item">
      <div className="friend-avt__wrapper">
        <img src={defaultAvt} className="avatar sidebar-avt" />
      </div>
      <div className="friend-username">
        <p>giang</p>
      </div>
    </div>
  );
};

export default Friend;
