import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Login = () => {
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
              // value={person.firstName}
              // onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Mật khẩu: </label>
            <input
              type="password"
              id="password"
              name="password"
              // value={person.firstName}
              // onChange={handleChange}
            />
          </div>
          <a className="link block" href="#">
            Quên mật khẩu?
          </a>
          <button>Đăng nhập</button>
          <p className="blur-color__text fs08">
            Cần một tài khoản?{" "}
            <a href="#" className="link">
              Đăng ký
            </a>
          </p>
        </form>
      </article>
    </div>
  );
};

export default Login;
