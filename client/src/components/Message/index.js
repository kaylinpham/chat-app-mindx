import React, { useState } from "react";
import reactionIcon from "../../assets/images/reaction-icon.png";
import "./style.scss";
const Message = ({ isYours, content }) => {
  // const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="message__container"
      // onMouseOver={() => setIsHover(true)}
      // onMouseOut={() => setIsHover(false)}
    >
      <p className={isYours ? "right right-message" : "left left-message"}>
        {content}
      </p>
      {/* <div
        className={isHover ? "block reaction-icon__container" : "none"}
        
      >
        <img
          alt="reaction icon"
          src={reactionIcon}
          className={
            isYours
              ? "reaction-icon right-relative right"
              : "reaction-icon left-relative left"
          }
        />
      </div> */}
    </div>
  );
};

export default React.memo(Message);
