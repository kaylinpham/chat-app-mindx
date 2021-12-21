import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import "./style.scss";
import { getUserById } from "../../utils/api";
import titleIcon from "../../assets/images/title-icon.png";

const Title = () => {
  const { receiverId } = useParams();
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      const { fullName } = await getUserById(receiverId);
      setName(fullName);
    })();
  }, [receiverId]);

  return (
    <div className="title">
      <div className="title-username__wrapper">
        <img className="title-img" src={titleIcon} alt="@" />
        <span className="title-username">{name}</span>
      </div>
    </div>
  );
};

export default Title;
