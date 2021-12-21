const conversationService = require("../service/conversationService");

function conversationSocket(socket, onlineUsers, io) {
  socket.on("create_room", (data) => {
    const result = conversationService().create({ ...data });

    const receiver = onlineUsers.find((user) => user.id === data.receiverId);
    io.to(receiver.socketId).emit("request_create", { data: result });
  });
}

module.exports = conversationSocket;
