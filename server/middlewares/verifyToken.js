const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const Authorization = req.header("authorization");
  if (!Authorization) {
    // handle error
  }

  const token = Authorization.replace("Bearer ", "");
  const { userId } = jwt.verify(token, process.env.APP_SECRET);
  req.user = { userId };
  next();
}

module.exports = verifyToken;
