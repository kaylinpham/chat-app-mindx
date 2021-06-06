const Conversation = require("../models/conversation");
const mongoose = require("mongoose");
async function validConversation(conversationId) {
  const con = await Conversation.findOne({
    usersId: mongoose.Types.ObjectId(conversationId),
  });
  return con;
}

module.exports = validConversation;
