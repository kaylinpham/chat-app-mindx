const mongoose = require("mongoose");
const conversationSchema = new mongoose.Schema(
  {
    usersId: { type: Array, default: [] },
    lastMsg: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Conversation", conversationSchema);
