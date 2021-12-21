import React from "react";

import "./style.scss";
import Panels from "../Panels";
import PrivateChannels from "../PrivateChannels";

const SideBar = () => {
  return (
    <div className="sidebar">
      <PrivateChannels />
      <Panels />
    </div>
  );
};

export default SideBar;
