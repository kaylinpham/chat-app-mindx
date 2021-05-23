import React from "react";
import "./style.css";
const SignUp = () => {
  return (
    <div className="signup__container">
      <article className="form">
        <form>
          <h1 className="text__center">Tạo tài khoản</h1>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-control">
            <label htmlFor="username">Tên đăng nhập: </label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-control">
            <label htmlFor="password">Mật khẩu: </label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-control">
            <label htmlFor="dob">Ngày sinh: </label>
            <input
              type="date"
              id="dob"
              name="dob"
              max={new Date().toISOString().split("T")[0]}
              min="1900-01-01"
            />
          </div>
          <button>Đăng ký</button>
          <a className="link block" href="#">
            Đã có tài khoản?
          </a>
        </form>
      </article>
    </div>
  );
};

export default SignUp;
