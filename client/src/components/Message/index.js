import React from "react";
import "./style.css";
const Message = (props) => {
  return (
    <div className="message__container">
      <p className={props.isYours ? "right" : "left"}>haha</p>
    </div>
  );
};

export default Message;
