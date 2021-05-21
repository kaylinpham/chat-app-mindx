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

      message.save().then((msg) => {
        res.status(200).json({
          error: false,
          message: "save message succsessful",
          msg,
        });
      });
    },
    getAllMessageByConversationId(req, res) {
      const { consersationId } = req.body;
    },
  };
}

module.exports = messageController;
