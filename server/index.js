require("dotenv").config();
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");
const io = require("socket.io");

const PORT = process.env.PORT || 8080;
const initRoute = require("./routes/index");

// Assets
app.use(cors());
app.use(express.json());

// route
initRoute(app);

server.listen(PORT, (_) => console.log(`Server running on port ${PORT}`));
