const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function authController() {
  return {
    async postLogin(req, res) {
      try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
          // handle error
          return res.status(401).json({
            error: true,
            message: "email is not correct",
          });
        }

        if (bcrypt.compareSync(req.body.password, user.password)) {
          const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET);
          return res.status(200).json({
            error: false,
            message: "login successful",
            data: {
              token,
              userName: user.userName,
              fullName: user.fullName,
            },
          });
        } else {
          return res.status(401).json({
            error: true,
            message: "password is not correct",
          });
        }
      } catch (error) {
        res.status(401).json({
          error: true,
          message: error.message,
        });
      }
    },
    async postRegister(req, res) {
      try {
        const user = await User.create(req.body);
        const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET);
        res.status(200).json({
          error: false,
          message: "create user successful",
          data: {
            token,
            userName: user.userName,
            fullName: user.fullName,
          },
        });
      } catch (error) {
        res.status(401).json({
          error: true,
          message: error.message,
        });
      }
    },
  };
}

module.exports = authController;
