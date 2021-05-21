const mongoose = require("mongoose");
const Conversation = require("../models/conversation");

function conversationController() {
  return {
    async getConversationOfCurrentUser(req, res) {
      const { id } = req.params;
      const allConversation = await Conversation.find({
        usersId: mongoose.Types.ObjectId(id),
      });
      return res.status(200).json({
        error: false,
        message: "get all conversation successfully",
        data: allConversation,
      });
    },
    createConversation(req, res) {
      const { userId } = req.user;
      const { receiver, lastMsg } = req.body;
      const conversation = new Conversation({
        usersId: [
          mongoose.Types.ObjectId(userId),
          mongoose.Types.ObjectId(receiver),
        ],
        lastMsg,
      });
      conversation
        .save()
        .then((con) => {
          return res.status(200).json({
            error: false,
            message: "save conversation successfully",
            data: {
              conversationId: con._id,
              lastMsg: con.lastMsg,
            },
          });
        })
        .catch((error) => {
          return res.status(401).json({
            error: true,
            message: error.message,
          });
        });
    },
  };
}

module.exports = conversationController;
