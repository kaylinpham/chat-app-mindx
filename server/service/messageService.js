const mongoose = require("mongoose");
const Message = require("../models/message");

function messageService() {
  return {
    async save({ conversationId, content, sender: userId }) {
      try {
        const message = new Message({
          conversationId,
          content,
          sender: userId,
        });

        const data = await message.save().then((msg) => {
          return {
            error: false,
            message: "save message successfully",
            data: msg,
          };
        });
        return data;
      } catch (error) {
        return {
          error: true,
          message: error.message,
        };
      }
    },

    async getAll(id_conversation) {
      try {
        const messages = await Message.find({
          conversationId: mongoose.Types.ObjectId(id_conversation),
        });

        return {
          error: false,
          message: "get all message successfully",
          data: messages,
        };
      } catch (error) {
        return {
          error: true,
          message: error.message,
        };
      }
    },
  };
}

module.exports = messageService;
