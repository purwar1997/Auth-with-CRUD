require('dotenv').config({ path: './.env' });
require('./config/DBconnection').connect();
const express = require('express');
const cookieParser = require('cookie-parser');
const router = require('./routes/routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(router);

app.get('/');

module.exports = app;
