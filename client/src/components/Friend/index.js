import React, { useContext } from "react";
import "./style.css";
import defaultAvt from "../../assets/images/defaultAvatar.jpeg";
import { IMAGE_URL } from "../../constants/global";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../pages/Home";

const Friend = ({ conversation }) => {
  const { url } = useContext(AuthContext);

  return (
    <NavLink
      key={conversation.conversationId}
      to={`${url}/conversation/${conversation.conversationId}&&${conversation.receiverId}`}
      activeClassName="friend-item-selected"
      className="friend-item"
    >
      <div className="friend-avt__wrapper">
        <img
          src={
            conversation.avatar
              ? `${IMAGE_URL + conversation.avatar}`
              : defaultAvt
          }
          alt="avatar"
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
