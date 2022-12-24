const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstname: {
    type: String,
    default: null,
    required: [true, 'Firstname is required'],
    lowercase: true,
    trim: true,
  },
  lastname: {
    type: String,
    default: null,
    required: [true, 'Lastname is required'],
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    default: null,
    required: [true, 'Email is required'],
    trim: true,
    unique: true,
  },
  phoneNo: {
    type: String,
    default: null,
    required: [true, 'Phone No is required'],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    default: null,
    required: [true, 'Password is required'],
    unique: true,
    minLength: 6,
    maxLength: 20,
  },
  hashedPassword: {
    type: String,
    default: null,
    unique: true,
  },
  isLogged: {
    type: Boolean,
    default: false,
  },
  token: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model('user', userSchema);
