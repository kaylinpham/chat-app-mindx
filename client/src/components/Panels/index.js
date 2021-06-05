import React from "react";
import defaultAvt from "../../assets/images/defaultAvatar.png";
import logoutIcon from "../../assets/images/logout.png";
import "./style.css";
const Panels = () => {
  return (
    <section className="panels">
      <div className="panels__img">
        <img src={defaultAvt} className="avatar sidebar-avt" />
      </div>
      <div className="panels-username">
        <p>giang</p>
        <p className="blur-color__text">#4554</p>
      </div>
      <div className="logout">
        <img src={logoutIcon} id="logout__icon" />
      </div>
    </section>
  );
};

export default Panels;
