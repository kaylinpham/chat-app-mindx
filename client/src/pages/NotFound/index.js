import React from "react";
import "./style.css";
import errorImg from "../../assets/images/error.png";
const NotFound = () => {
  return (
    <div className="not-found">
      {/* <img src="./back.png" className="direct-back" /> */}
      4
      <img src={errorImg} alt="Page not found" className="not-found__img" />4
      <p>Page not found</p>
      <button className="btn not-found__btn">Back</button>
    </div>
  );
};

export default NotFound;
