const messageService = require("../service/messageService");

function chatSocket(socket) {
  socket.on("join_room", (roomId) => {
    socket.join(roomId);
  });

  socket.on("send_message", (data) => {
    messageService().save({ ...data });
    socket.to(data.conversationId).emit("receiver_message", data);
  });
}

module.exports = chatSocket;
