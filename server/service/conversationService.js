const mongoose = require("mongoose");
const Conversation = require("../models/conversation");

function conversationService() {
  return {
    async get(userId) {
      const allConversation = await Conversation.find({
        usersId: mongoose.Types.ObjectId(userId),
      });
      return {
        error: false,
        message: "get all conversation successfully",
        data: allConversation,
      };
    },
    async create({ userId, receiver, lastMsg }) {
      const conversation = new Conversation({
        usersId: [
          mongoose.Types.ObjectId(userId),
          mongoose.Types.ObjectId(receiver),
        ],
        lastMsg,
      });
      const data = await conversation
        .save()
        .then((con) => {
          return {
            error: false,
            message: "save conversation successfully",
            data: {
              conversationId: con._id,
              lastMsg: con.lastMsg,
            },
          };
        })
        .catch((error) => {
          return {
            error: true,
            message: error.message,
          };
        });
      return data;
    },
  };
}

module.exports = conversationService;
