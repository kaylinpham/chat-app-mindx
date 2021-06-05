const conversationService = require("../service/conversationService");

function conversationController() {
  return {
    async getConversationOfCurrentUser(req, res) {
      const { id } = req.params;
      const data = await conversationService().get(id);
      return res.status(200).json(data);
    },
    async createConversation(req, res) {
      const { userId } = req.user;
      const { receiver, lastMsg } = req.body;
      const data = await conversationService().create({
        userId,
        receiver,
        lastMsg,
      });
      if (data.error) {
        res.status(401).json(data);
      } else {
        res.status(200).json(data);
      }
    },
  };
}

module.exports = conversationController;
