import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import Friend from "../Friend";
import { AuthContext } from "../../pages/Home";
const FriendScroller = ({ conversations }) => {
  const { url } = useContext(AuthContext);

  return (
    <div className="friend__scroller">
      {conversations.map((conversation) => {
        return (
          <NavLink
            key={conversation.conversationId}
            to={`${url}/conversation/${conversation.conversationId}&&${conversation.receiverId}`}
            activeClassName="friend-item-selected"
          >
            <Friend conversation={conversation} />
          </NavLink>
        );
      })}
    </div>
  );
};

export default FriendScroller;
