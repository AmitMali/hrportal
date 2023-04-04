const jwt = require("jsonwebtoken");
require("dotenv").config();
const isLoggedIn = (req, res, next) => {
  const token = req.headers.authorization;
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.id = user.id;
    req.role = user.role;
    next();
  });
};

module.exports = { isLoggedIn };
