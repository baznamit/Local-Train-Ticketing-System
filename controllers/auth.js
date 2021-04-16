const User = require("../models/User");

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password is provided
  if (!email || !password) {
    return next();
  }

  try {
    // Check that user exists by email
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next();
    }

    sendToken(user, 200, res);
  } catch (err) {
    next(err);
  }
};

// @desc    Register user
exports.register = async (req, res, next) => {
  const { first, username, last, email, mobile, gender, password } = req.body;

  console.log(req.body);

  try {
    const user = await User.create({
        first,
      username,
      last,
      email,
      mobile,
      gender,
      password
    });

    sendToken(user, 200, res);
  } catch (err) {
    next(err);
  }
};

const sendToken = (user, statusCode, res) => {
  res.status(statusCode).json({ sucess: true, id: user._id });
};
