const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { SECRET: secret } = process.env;

exports.home = (req, res) => {
  res.status(201).send('<h1 style="text-align: center">CRUD with Authentication</h1>');
};

exports.register = async (req, res) => {
  try {
    const { firstname, lastname, email, phoneNo, password, confirmPassword } = req.body;

    if (!(firstname && lastname && email && phoneNo && password && confirmPassword)) {
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

    if (
      !(phoneNo.length === 10 && phoneNo.split().every(digit => Number.isInteger(Number(digit))))
    ) {
      throw new Error('PhoneNo should be 10 characters long');
    }

    if (password.length < 6) {
      throw new Error('Password should be atleast 6 characters long');
    }

    if (password !== confirmPassword) {
      throw new Error("Confirmed password doesn't match with original password");
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
      password,
      hashedPassword,
    });

    const token = jwt.sign({ id: newUser._id }, secret, { expiresIn: '24h' });
    newUser.token = token;
    await newUser.save();

    res.status(201).cookie('token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    });

    newUser.hashedPassword = undefined;
    newUser.token = undefined;
    res.status(201).json({
      success: true,
      message: 'User has been successfully registered',
      newUser,
    });
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
      if (await bcrypt.compare(password, user.hashedPassword)) {
        const token = jwt.sign({ id: user._id }, secret, { expiresIn: '24h' });
        user.token = token;
        user.isLogged = true;
        await user.save();

        res.status(201).cookie('token', token, {
          httpOnly: true,
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        });

        res.status(201).json({
          success: true,
          message: 'User has successfully logged in',
        });
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

exports.logout = async (req, res) => {
  try {
    await User.findByIdAndUpdate(res.user._id, { isLogged: false });

    res.status(201).json({
      success: true,
      message: 'User has successfully logged out',
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: 'Unable to logout',
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    let users = await User.find();

    users = users.map(user => {
      user.hashedPassword = undefined;
      user.token = undefined;
      return user;
    });

    res.status(201).json({
      success: true,
      message: 'All the users have been successfully fetched',
      users,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: 'Cannot fetch users',
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = res.user;
    user.hashedPassword = undefined;
    user.token = undefined;

    res.status(201).json({
      success: true,
      message: 'User has been successfully fetched',
      user,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: 'Cannot fetch user',
    });
  }
};

exports.editUser = async (req, res) => {
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

    if (
      !(phoneNo.length === 10 && phoneNo.split().every(digit => Number.isInteger(Number(digit))))
    ) {
      throw new Error('PhoneNo should be 10 characters long');
    }

    if (password.length < 6) {
      throw new Error('Password should be atleast 6 characters long');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = res.user;

    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.phoneNo = phoneNo;
    user.password = password;
    user.hashedPassword = hashedPassword;

    const updatedUser = await user.save();
    updatedUser.hashedPassword = undefined;
    updatedUser.token = undefined;

    res.status(201).json({
      success: true,
      message: 'User has been successfully updated',
      updatedUser,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: err.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(res.user._id);

    res.status(201).json({
      success: true,
      message: 'User has been successfully deleted',
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: 'Cannot delete user',
    });
  }
};
