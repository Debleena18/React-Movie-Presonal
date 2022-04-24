const jwt = require("jsonwebtoken");

//next here mean if the operation is valid it shall go to nest () ie.users.js
function verify(req, res, next) {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1]; //in postman - it is an [] Bearer 123j313el12j3kl12j3kl

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
}

module.exports = verify;