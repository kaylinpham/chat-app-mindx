const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      default: "",
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      default: "",
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
