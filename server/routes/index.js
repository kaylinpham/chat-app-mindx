const authController = require("../controllers/authController");
const messageController = require("../controllers/messageController");
const conversationController = require("../controllers/conversationController");
const userController = require("../controllers/userController");
// middlewares
const verifyToken = require("../middlewares/verifyToken");

function initRoute(app) {
  const ROOT_URL = "/api/v1";
  // auth
  app.post(`${ROOT_URL}/user/login`, authController().postLogin);
  app.post(`${ROOT_URL}/user/register`, authController().postRegister);

  // message
  app.get(
    `${ROOT_URL}/message/:id_conversation`,
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
  app.post(`${ROOT_URL}/user`, userController().getUserById);
}

module.exports = initRoute;
