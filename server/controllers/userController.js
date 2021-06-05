const User = require("../models/user");

function userController() {
  return {
    async getUserById(req, res) {
      const { userId } = req.params;
      const user = await User.findById({ _id: userId });
      res.status(200).json(user);
    },
  };
}

module.exports = userController;
