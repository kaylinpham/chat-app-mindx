const mongoose = require("mongoose");
const Message = require("../models/message");

function messageController() {
  return {
    async saveMessageToConversation(req, res) {
      const { userId } = req.user;
      const { conversationId, content } = req.body;
      const message = new Message({
        conversationId,
        content,
        sender: userId,
      });

      message
        .save()
        .then((msg) => {
          res.status(200).json({
            error: false,
            message: "save message successfully",
            msg,
          });
        })
        .catch((error) => {
          return res.status(401).json({
            error: true,
            message: error.message,
          });
        });
    },
    async getAllMessageByConversationId(req, res) {
      const { id_conversation } = req.params;
      console.log(id_conversation);
      const messages = await Message.find({
        conversationId: mongoose.Types.ObjectId(id_conversation),
      });
      return res.status(200).json({
        error: false,
        message: "get all message successfully",
        data: messages,
      });
    },
  };
}

module.exports = messageController;
