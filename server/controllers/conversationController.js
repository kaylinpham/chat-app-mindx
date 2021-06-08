const conversationService = require("../service/conversationService");
const validConversation = require("../utils/validConversation");
const User = require("../models/user");
function conversationController() {
  return {
    async getConversationOfCurrentUser(req, res) {
      const { id } = req.params;
      const data = await conversationService().get(id);
      return res.status(200).json(data);
    },
    async createConversation(req, res) {
      const { userId } = req.user;
      const { userName } = req.body;
      const receiverUser = await User.find({ userName });
      if (receiverUser.length !== 0) {
        const { fullName, avatar, _id: receiver } = receiverUser[0];
        let validCon = await validConversation(userId, receiver);
        if (validCon == null) {
          const data = await conversationService().create({
            userId,
            receiver,
          });
          if (data.error) {
            res.status(401).json(data);
          } else {
            res.status(200).json({
              error: false,
              message: "save conversation successfully",
              ...data,
              fullName,
              avatar,
              receiver,
            });
          }
        } else {
          res.status(401).json({
            error: true,
            message: "conversation already exist",
          });
        }
      } else {
        res.status(401).json({
          error: true,
          message: "This user could not be found",
        });
      }
    },
  };
}

module.exports = conversationController;
