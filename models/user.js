const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  first: {
    type: String,
    required: [true, "Please provide First Name"],
  },
  last: {
    type: String,
    required: [true, "Please provide Last Name"],
  },
  username: {
    type: String,
    required: [true, "Please provide Username"],
  },
  email: {
    type: String,
    required: [true, "Please provide email address"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  gender: {
    type: String,
    required: [true, "Please provide Gender"],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    select: false,
  },
  mobile: {
    type: Number,
    required: [true, "Please enter your mobile number"]
  },
},
{ timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
