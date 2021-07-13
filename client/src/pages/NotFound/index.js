import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";
import errorImg from "../../assets/images/error.png";

const NotFound = () => {
  return (
    <div className="not-found">
      4
      <img src={errorImg} alt="Page not found" className="not-found__img" />4
      <p>Page not found</p>
      <Link to={localStorage.getItem("user") ? "/home" : "/log-in"}>
        <button className="btn not-found__btn">Back</button>
      </Link>
    </div>
  );
};

export default React.memo(NotFound);
