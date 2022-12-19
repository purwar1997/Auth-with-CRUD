const express = require('express');
const router = express.Router();

const {
  home,
  register,
  login,
  logout,
  getUsers,
  getUser,
  editUser,
  deleteUser,
} = require('../controllers/routehandlers');

router.get('/', home);
router.post('/register', register);
router.post('/login', login);
router.put('/logout', logout);
router.get('/getUsers', getUsers);
router.get('/getUser', getUser);
router.put('/editUser', editUser);
router.delete('/deleteUser', deleteUser);

module.exports = router;
