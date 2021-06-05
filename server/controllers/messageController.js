const messageService = require("../service/messageService");

function messageController() {
  return {
    async saveMessageToConversation(req, res) {
      try {
        const { userId } = req.user;
        const { conversationId, content } = req.body;
        const data = await messageService().save({
          conversationId,
          content,
          sender: userId,
        });
        res.status(200).json(data);
      } catch (error) {
        res.status(401).json({
          error: true,
          message: error.message,
        });
      }
    },
    async getAllMessageByConversationId(req, res) {
      try {
        const { id_conversation } = req.params;
        const data = await messageService().getAll(id_conversation);
        res.status(200).json(data);
      } catch (error) {
        res.status(401).json({
          error: true,
          message: "something error",
        });
      }
    },
  };
}

module.exports = messageController;
