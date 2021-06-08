import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import "./style.css";
import { REQUEST_URL } from "../../constants/global";

const SignUp = () => {
  const [person, setPerson] = useState({
    fullName: "",
    email: "",
    password: "",
    userName: "",
    avatar: "",
  });
  const [isValid, setIsValid] = useState(true);

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("fullName", person.fullName);
    formData.append("email", person.email);
    formData.append("password", person.password);
    formData.append("userName", person.userName);
    formData.append("avatar", person.avatar);

    axios
      .post(`${REQUEST_URL}/user/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.status !== 200) {
          console.log(res);
          setIsValid(false);
          setPerson({
            password: "",
            ...person,
          });
        } else {
          history.push("/log-in");
        }
      })
      .catch((err) => {
        // alert(err);
        setIsValid(false);
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = name === "avatar" ? e.target.files[0] : e.target.value;
    setPerson((person) => {
      return { ...person, [name]: value };
    });
  };

  return (
    <div className="signup__container">
      <article className="form">
        <form>
          <h1 className="text__center">Tạo tài khoản</h1>
          <div className="form-control">
            <label htmlFor="email">Email*: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="fullName">Họ và tên*: </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={person.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="userName">Tên đăng nhập*: </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={person.userName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Mật khẩu*: </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ít nhất 6 kí tự"
              value={person.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="avatar">Avatar: </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              onChange={handleChange}
            />
          </div>
          <p
            className={isValid ? "hide-text" : "block"}
            style={{ color: "#ee5253" }}
          >
            Thông tin không phù hợp
          </p>
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
