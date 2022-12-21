const User = require('../models/user');

module.exports = async (req, res, next) => {
  const user = await User.findById(req.params.userId);

  if (user.isLogged) {
    res.user = user;
  } else {
    res.status(401).send('User is not logged in');
  }

  next();
};
