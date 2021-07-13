import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import "./style.scss";
import {
  EMAIL_PATTERN,
  NO_DIGITS,
  PASSSWORD,
  REQUEST_URL,
  USERNAME,
} from "../../constants/global";

const SignUp = () => {
  const [person, setPerson] = useState({
    fullName: "",
    email: "",
    password: "",
    userName: "",
    avatar: "",
  });
  const [isValid, setIsValid] = useState(true);
  const [validSignup, setValidSignup] = useState(true);

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("fullName", person.fullName);
    formData.append("email", person.email);
    formData.append("password", person.password);
    formData.append("userName", person.userName);
    formData.append("avatar", person.avatar);

    if (validSignup) {
      axios
        .post(`${REQUEST_URL}/user/register`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          history.push("/log-in");
        })
        .catch((err) => {
          console.log(err);
          setIsValid(false);
        });
    } else {
      setIsValid(false);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = name === "avatar" ? e.target.files[0] : e.target.value;
    setPerson((person) => {
      return { ...person, [name]: value };
    });
  };

  const handlePattern = (e) => {
    const value = e.target.value;
    const pattern = new RegExp(e.target.pattern);
    if (value === "" || !pattern.test(value)) {
      e.target.classList.add("form__input-wrong");
      setValidSignup(() => false);
    } else {
      e.target.classList.remove("form__input-wrong");
      setValidSignup(() => true);
    }
  };

  return (
    <div className="signup__container">
      <article className="form">
        <form onSubmit={handleSubmit}>
          <h1 className="text__center">Tạo tài khoản</h1>
          <div className="form-control">
            <label htmlFor="email">Email*: </label>
            <input
              pattern={EMAIL_PATTERN}
              className="form__input"
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={(e) => {
                handleChange(e);
                handlePattern(e);
              }}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="fullName">Họ và tên*: </label>
            <input
              pattern={NO_DIGITS}
              className="form__input"
              type="text"
              id="fullName"
              name="fullName"
              value={person.fullName}
              onChange={(e) => {
                handleChange(e);
                handlePattern(e);
              }}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="userName">Tên đăng nhập*: </label>
            <input
              pattern={USERNAME}
              className="form__input"
              type="text"
              id="userName"
              name="userName"
              value={person.userName}
              onChange={(e) => {
                handleChange(e);
                handlePattern(e);
              }}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Mật khẩu*: </label>
            <input
              pattern={PASSSWORD}
              className="form__input"
              type="password"
              id="password"
              name="password"
              placeholder="Ít nhất 6 kí tự"
              value={person.password}
              onChange={(e) => {
                handleChange(e);
                handlePattern(e);
              }}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="avatar">Avatar*: </label>
            <input
              className="form__input"
              type="file"
              id="avatar"
              name="avatar"
              onChange={handleChange}
            />
          </div>
          <div
            className={isValid ? "hide-text" : "block"}
            style={{ color: "#ee5253" }}
          >
            <p>Điền đầy đủ các thông tin</p>
            <p>Email hoặc username có thể đã tồn tại!</p>
          </div>
          <button onClick={handleSubmit}>Đăng ký</button>
          <Link className="link block" to="/log-in">
            Đã có tài khoản?
          </Link>
        </form>
      </article>
    </div>
  );
};

export default React.memo(SignUp);
