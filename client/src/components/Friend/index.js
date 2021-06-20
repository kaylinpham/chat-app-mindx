import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import defaultAvt from "../../assets/images/defaultAvatar.png";
import { IMAGE_URL } from "../../constants/global";
import { AuthContext } from "../../pages/Home";
import "./style.css";

const Friend = ({ conversation }) => {
  const { url } = useContext(AuthContext);

  return (
    <NavLink
      to={`${url}/conversation/${conversation.conversationId}&&${conversation.receiverId}`}
      className="friend-item"
      activeClassName="friend-item-selected"
    >
      <div className="friend-avt__wrapper">
        <img
          src={
            conversation.avatar
              ? `${IMAGE_URL + conversation.avatar}`
              : defaultAvt
          }
          className="avatar sidebar-avt"
        />
      </div>
      <div className="friend-username">
        <p>{conversation.fullName}</p>
      </div>
    </NavLink>
  );
};

export default React.memo(Friend);
