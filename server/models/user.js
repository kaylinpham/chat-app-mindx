const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "username must be required"],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email must be required"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "password must be required"],
      trim: true,
      minlength: [6, "password must be at least 6 characters"],
    },
    fullName: {
      type: String,
      required: [true, "full name must be required"],
      trim: true,
    },
    avatar: { type: String, default: "" },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  let user = this;
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) {
      return next(err);
    } else {
      user.password = hash;
      next();
    }
  });
});
module.exports = mongoose.model("User", userSchema);
