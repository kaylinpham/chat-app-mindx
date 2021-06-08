const Conversation = require("../models/conversation");
const mongoose = require("mongoose");

async function validConversation(userId, receiver) {
  const con = await Conversation.findOne({
    usersId: {
      $all: [
        mongoose.Types.ObjectId(userId),
        mongoose.Types.ObjectId(receiver),
      ],
    },
  });
  return con;
}

module.exports = validConversation;
