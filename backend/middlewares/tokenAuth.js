const jwt = require('jsonwebtoken');
const { SECRET: secret } = process.env;

module.exports = (req, res, next) => {
  const { token } = req.cookies;

  if (token) {
    const { id } = jwt.verify(token, secret);
    res.userId = id;
  } else {
    res.status(401).send('User is not logged in');
  }

  next();
};
