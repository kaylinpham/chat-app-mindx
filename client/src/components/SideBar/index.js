import React from "react";

import "./style.css";
import Panels from "../Panels";
import PrivateChannels from "../PrivateChannels";

const SideBar = () => {
  console.log("sidebar");
  return (
    <div className="sidebar">
      <PrivateChannels />
      <Panels />
    </div>
  );
};

export default SideBar;
