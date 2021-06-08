import React from "react";
import "./style.css";
import defaultAvt from "../../assets/images/defaultAvatar.png";

const Friend = ({ conversation }) => {
  return (
    <div className="friend-item">
      <div className="friend-avt__wrapper">
        <img
          src={conversation.avatar || defaultAvt}
          className="avatar sidebar-avt"
        />
      </div>
      <div className="friend-username">
        <p>{conversation.fullName}</p>
      </div>
    </div>
  );
};

export default React.memo(Friend);
