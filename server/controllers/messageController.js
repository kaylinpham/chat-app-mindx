const messageService = require("../service/messageService");

function messageController() {
  return {
    async saveMessageToConversation(req, res) {
      try {
        const { userId } = req.user;
        console.log(userId, req.body);
        // const { conversationId, content } = req.body;
        // const data = await messageService().save({
        //   conversationId,
        //   content,
        //   sender: userId,
        // });
        // res.status(200).json(data);
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

// const mongoose = require("mongoose");
// const Message = require("../models/message");

// function messageController() {
//   return {
//     async saveMessageToConversation(req, res) {
//       const { userId } = req.user;
//       const { conversationId, content } = req.body;
//       const message = new Message({
//         conversationId,
//         content,
//         sender: userId,
//       });

//       message
//         .save()
//         .then((msg) => {
//           res.status(200).json({
//             error: false,
//             message: "save message successfully",
//             msg,
//           });
//         })
//         .catch((error) => {
//           return res.status(401).json({
//             error: true,
//             message: error.message,
//           });
//         });
//     },
//     async getAllMessageByConversationId(req, res) {
//       const { id_conversation } = req.params;
//       console.log(id_conversation);
//       const messages = await Message.find({
//         conversationId: mongoose.Types.ObjectId(id_conversation),
//       });
//       return res.status(200).json({
//         error: false,
//         message: "get all message successfully",
//         data: messages,
//       });
//     },
//   };
// }

// module.exports = messageController;
