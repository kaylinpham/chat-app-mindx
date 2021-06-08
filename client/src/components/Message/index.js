import React from "react";
import "./style.css";
const Message = ({ isYours, content }) => {
  return (
    <div className="message__container">
      <p className={isYours ? "right" : "left"}>{content}</p>
    </div>
  );
};

export default React.memo(Message);
