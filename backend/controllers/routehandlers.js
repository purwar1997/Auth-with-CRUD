const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const { SECRET: secret } = process.env;

exports.home = (req, res) => {
  res.status(201).send('<h1 style="text-align: center">Auth with CRUD</h1>');
};

exports.register = async (req, res) => {
  try {
    const { firstname, lastname, email, phoneNo, password } = req.body;

    if (!(firstname && lastname && email && phoneNo && password)) {
      throw new Error('Please enter all the details');
    }

    if (
      !(
        email.endsWith('@gmail.com') ||
        email.endsWith('@outlook.com') ||
        email.endsWith('@hotmail.com')
      )
    ) {
      throw new Error('Email should be in correct format');
    }

    if (phoneNo.length === 10) {
      for (const digit of phoneNo) {
        if (!Number.isInteger(Number(digit))) {
          throw new Error('Phone No should be in correct format');
        }
      }
    } else {
      throw new Error('PhoneNo should be in correct format');
    }

    const user = await User.findOne({ email });

    if (user) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstname,
      lastname,
      email,
      phoneNo,
      password: hashedPassword,
    });

    newUser.password = undefined;
    res.status(201).json(newUser);
  } catch (err) {
    res.status(401).json({
      success: false,
      message: err.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      throw new Error('Please enter all the details');
    }

    if (
      !(
        email.endsWith('@gmail.com') ||
        email.endsWith('@outlook.com') ||
        email.endsWith('@hotmail.com')
      )
    ) {
      throw new Error('Email should be in correct format');
    }

    const user = await User.findOne({ email });

    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user._id }, secret, { expiresIn: '1d' });
        user.token = token;
        user.loggedIn = true;
        await user.save();

        res.status(201).cookie('token', token, {
          httpOnly: true,
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        });

        user.password = undefined;
        user.token = undefined;
        res.status(201).json(user);
      } else {
        throw new Error('Please enter correct password');
      }
    } else {
      throw new Error("User doesn't exist");
    }
  } catch (err) {
    res.status(401).json({
      success: false,
      message: err.message,
    });
  }
};

exports.logout = () => {};

exports.getUsers = () => {};
exports.getUser = () => {};
exports.deleteUser = () => {};
exports.editUser = () => {};
exports.getUser = () => {};
