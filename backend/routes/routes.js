const loginAuth = require('../middlewares/loginAuth');
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
router.put('/logout/:userId', loginAuth, logout);
router.get('/getUsers', getUsers);
router.get('/getUser/:userId', loginAuth, getUser);
router.put('/editUser/:userId', loginAuth, editUser);
router.delete('/deleteUser/:userId', loginAuth, deleteUser);

module.exports = router;
