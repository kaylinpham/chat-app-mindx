import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getUserById } from "../../utils/api";
import "./style.css";

import titleIcon from "../../assets/images/title-icon.png";
import videoIcon from "../../assets/images/video.png";
import callIcon from "../../assets/images/call.png";
const Title = () => {
  const { receiverId } = useParams();
  const [receiverInfo, setReceiverInfo] = useState({
    fullName: "",
    avatar: "",
  });
  // let history = useHistory();

  useEffect(() => {
    (async () => {
      const { fullName, avatar } = await getUserById(receiverId);
      setReceiverInfo({ fullName, avatar });
    })();
  }, [receiverId]);

  let avatar = receiverInfo.avatar
    ? `http://localhost:8080/public/images/${receiverInfo.avatar}`
    : titleIcon;
  return (
    <div className="title">
      <div className="title-username__wrapper">
        <img className="title-img avatar" src={avatar} alt="" />
        <span className="title-username">
          {receiverInfo.fullName || "Anonymous"}
        </span>
      </div>
      <div className="toolbar">
        <div className="toolbar-item__wrapper">
          <img
            src={callIcon}
            id="toolbar-phone"
            className="toolbar-item"
            alt="call Icon"
          />
        </div>
        <div className="toolbar-item__wrapper">
          <img
            alt="video Icon"
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
