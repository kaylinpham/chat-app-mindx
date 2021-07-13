import React from "react";
import "./style.scss";
import Friend from "../Friend";
const FriendScroller = ({ conversations }) => {
  return (
    <div className="friend__scroller">
      {conversations.map((conversation) => {
        return (
          <Friend
            key={conversation.conversationId}
            conversation={conversation}
          />
        );
      })}
    </div>
  );
};

export default FriendScroller;
