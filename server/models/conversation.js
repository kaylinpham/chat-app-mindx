const mongoose = require("mongoose");
const conversationSchema = new mongoose.Schema(
  {
    usersId: { type: Array, default: [] },
    lastMsgId: {
      type: mongoose.Schema.Types.ObjectId,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Conversation", conversationSchema);
