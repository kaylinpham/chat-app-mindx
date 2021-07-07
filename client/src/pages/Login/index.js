import React, { useState, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import { REQUEST_URL } from "../../constants/global";
import "./style.css";

const Login = () => {
  const [person, setPerson] = useState({
    password: "",
    email: "",
  });
  const [isValid, setIsValid] = useState(true);

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${REQUEST_URL}/user/login`, person, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.status !== 200) {
          console.log(res);
          setIsValid(false);
          setPerson({
            password: "",
            email: "",
          });
        } else {
          console.log(res);
          localStorage.setItem("user", JSON.stringify(res.data.data));
          history.push("/home");
        }
      })
      .catch((err) => {
        setIsValid(false);
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson((person) => {
      return { ...person, [name]: value };
    });
  };
  return (
    <div className="login__container">
      <article className="form">
        <form>
          <h3>Chào mừng trở lại</h3>
          <p className="blur-color__text mt05">Rất vui khi được gặp lại bạn!</p>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Mật khẩu: </label>
            <input
              type="password"
              id="password"
              name="password"
              value={person.password}
              onChange={handleChange}
            />
          </div>
          {/* <a className="link block" href="#">
            Quên mật khẩu?
          </a> */}
          <p
            className={isValid ? "hide-text" : "block"}
            style={{ color: "#ee5253" }}
          >
            Thông tin không phù hợp
          </p>
          <button onClick={handleSubmit}>Đăng nhập</button>
          <p className="blur-color__text fs08">
            Cần một tài khoản?{" "}
            <Link to="/sign-up" className="link">
              Đăng ký
            </Link>
          </p>
        </form>
      </article>
    </div>
  );
};

export default React.memo(Login);
