require("dotenv").config();
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");
const socket = require("socket.io");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 8080;
const initRoute = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");

// connect database
mongoose
  .connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log("Connection failed...");
  });

// Assets
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  "/public/images",
  express.static(path.join(__dirname, "public/images"))
);
// route
initRoute(app);

// error handler
// app.all("*", (req, res, next) => {
//   const err = new Error("The route can not found");
//   err.statusCode = 404;
//   next(err);
// });

// app.use(errorHandler);

server.listen(PORT, (_) => console.log(`Server running on port ${PORT}`));

// socketio
const io = socket(server, {
  cors: {
    origin: "*",
  },
});

const chatSocket = require("./socket.io/chatSocket");
const conversationSocket = require("./socket.io/conversationSocket");
const onlineUsers = [];

io.on("connection", (socket) => {
  socket.on("new_user", (user) => {
    onlineUsers.push({ socketId: socket.id, ...user });
  });

  // conversation
  conversationSocket(socket, onlineUsers, io);

  // chat
  chatSocket(socket);

  // disconnect
  socket.on("disconnect", () => {
    "user disconnect";
  });
});
