const authController = require("../controllers/authController");
const messageController = require("../controllers/messageController");
const conversationController = require("../controllers/conversationController");
const userController = require("../controllers/userController");
// middlewares
const verifyToken = require("../middlewares/verifyToken");
const { uploadImage } = require("../utils/upload");

function initRoute(app) {
  const ROOT_URL = "/api/v1";
  // auth
  app.post(`${ROOT_URL}/user/login`, authController().postLogin);
  app.post(
    `${ROOT_URL}/user/register`,
    uploadImage,
    authController().postRegister
  );

  // message
  app.get(
    `${ROOT_URL}/message/:id_conversation`,
    verifyToken,
    messageController().getAllMessageByConversationId
  );
  app.post(
    `${ROOT_URL}/message`,
    verifyToken,
    messageController().saveMessageToConversation
  );

  // conversation
  app.get(
    `${ROOT_URL}/conversation/:id`,
    conversationController().getConversationOfCurrentUser
  );
  app.post(
    `${ROOT_URL}/conversation`,
    verifyToken,
    conversationController().createConversation
  );

  // user
  app.get(`${ROOT_URL}/user/:userId`, userController().getUserById);
}

module.exports = initRoute;
