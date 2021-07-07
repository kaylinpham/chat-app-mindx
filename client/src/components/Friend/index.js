import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import defaultAvt from "../../assets/images/defaultAvatar.png";
import { IMAGE_URL } from "../../constants/global";
import { AuthContext } from "../../pages/Home";
import "./style.css";

const Friend = ({ conversation }) => {
  const { url } = useContext(AuthContext);
  const { avatar, fullName, receiverId, conversationId } = conversation;
  return (
    <NavLink
      to={`${url}/conversation/${conversationId}&&${receiverId}`}
      className="friend-item"
      activeClassName="friend-item-selected"
    >
      <div className="friend-avt__wrapper">
        <img
          alt={fullName}
          src={conversation.avatar ? `${IMAGE_URL + avatar}` : defaultAvt}
          className="avatar sidebar-avt"
        />
      </div>
      <div className="friend-username">
        <p>{fullName}</p>
      </div>
    </NavLink>
  );
};

export default React.memo(Friend);
