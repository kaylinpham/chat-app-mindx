import React from "react";
import "./style.css";
import titleIcon from "../../assets/images/title-icon.png";
import videoIcon from "../../assets/images/video.png";
import callIcon from "../../assets/images/call.png";
const Title = () => {
  return (
    <div className="title">
      <div className="title-username__wrapper">
        <img className="title-img" src={titleIcon} />
        <span className="title-username">giang</span>
      </div>
      <div className="toolbar">
        <div className="toolbar-item__wrapper">
          <img src={callIcon} id="toolbar-phone" className="toolbar-item" />
        </div>
        <div className="toolbar-item__wrapper">
          <img
            src={videoIcon}
            id="toolbar-videocall"
            className="toolbar-item "
          />
        </div>
      </div>
    </div>
  );
};

export default Title;
