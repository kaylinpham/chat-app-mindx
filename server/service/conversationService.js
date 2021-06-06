const mongoose = require("mongoose");
const Conversation = require("../models/conversation");

function conversationService() {
  return {
    async get(userId) {
      try {
        const allConversation = await Conversation.find({
          usersId: mongoose.Types.ObjectId(userId),
        });
        return {
          error: false,
          message: "get all conversation successfully",
          data: allConversation,
        };
      } catch (error) {
        console.log(error);
      }
    },
    async create({ userId, receiver }) {
      const conversation = new Conversation({
        usersId: [
          mongoose.Types.ObjectId(userId),
          mongoose.Types.ObjectId(receiver),
        ],
      });
      const data = await conversation
        .save()
        .then((con) => {
          return {
            conversationId: con._id,
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
