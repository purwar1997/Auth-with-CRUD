require('dotenv').config({ path: './.env' });
require('./config/DBconnection').connect();
const express = require('express');
const cookieParser = require('cookie-parser');
const router = require('./routes/routes');
const loginAuth = require('./middlewares/loginAuth');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(router);
app.use('/logout', loginAuth);
app.use('/getUser', loginAuth);
app.use('/editUser', loginAuth);
app.use('/deleteUser', loginAuth);

module.exports = app;
