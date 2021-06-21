const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { validationResult } = require("express-validator");
require("dotenv").config();

exports.register = async (req, res) => {
  try {
    let error = validationResult(req);
    if (!error.isEmpty()) {
      console.log(error.array()[0].msg);
      return res
        .json({
          error: error.array()[0].msg,
        })
        .status(422);
    }

    const {
      sponser_id,
      user_name,
      date_of_birth,
      mobile_number,
      email,
      password,
      sponser_name,
    } = req.body;

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res
        .json({ message: "User already registered. Use different email id." })
        .status(422);
    }

    const lastUser = await User.findOne({}).sort({ _id: -1 });
    if (!lastUser) {
      return res.json({ message: "Some error occurred" });
    }
    const userId = "TRL" + (Number(lastUser.user_id.substring(3)) + 1);

    const hash = await bcrypt.genSalt(10);
    const encryptPassword = await bcrypt.hash(password, hash);
    let newUser = User({
      sponser_id: sponser_id,
      sponser_name: sponser_name,
      user_name: user_name,
      date_of_birth: date_of_birth,
      mobile_number: mobile_number,
      email: email,
      password: encryptPassword,
      user_id: userId,
    });
    await newUser.save();
    return res
      .json({ message: "User registerd successfully", user_id: userId })
      .status(200);
  } catch (err) {
    console.log(err.message);
  }
};

exports.login = async (req, res) => {
  try {
    let error = validationResult(req);
    if (!error.isEmpty()) {
      console.log(error.array()[0].msg);
      return res
        .json({
          error: error.array()[0].msg,
        })
        .status(422);
    }

    const { user_id, password } = req.body;
    const user = await User.findOne({ user_id: user_id });
    if (!user) {
      return res.json({ message: "Invalid login credentials" });
    }
    const verifyPassword = await bcrypt.compare(password, user.password);
    if (!verifyPassword) {
      return res.json({ message: "Invalid login credentials" });
    }
    const payload = {
      user: {
        id: user._id,
        user_id: user_id,
        sponser_id: user.sponser_id,
        sponser_name: user.sponser_name,
        user_name: user.user_name,
        date_of_birth: user.date_of_birth,
        mobile_number: user.mobile_number,
        email: user.email,
      },
    };
    const accessToken = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: 30 * 60,
    });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_KEY, {
      expiresIn: 30 * 60 * 60,
    });

    return res.json({
      message: "Login successfully",
      access_token: accessToken,
      refresh_token: refreshToken,
      user: payload.user,
    });
  } catch (err) {
    console.log(err.message);
  }
};

exports.refreshToken = async (req, res) => {
  try {
    const { refresh_token } = req.body;
    if (!refresh_token) {
      return res.json({ message: "Unauthorized" }).status(422);
    }
    const jwtData = await jwt.verify(refresh_token, process.env.REFRESH_KEY);
    if (!jwtData) {
      return res.json({ message: "Unauthorized" }).status(401);
    }
    const payload = { user: jwtData.user };

    let accessToken = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: 30 * 60,
    });
    let RefreshToken = jwt.sign(payload, process.env.REFRESH_KEY, {
      expiresIn: 35 * 60 * 60,
    });
    return res
      .json({
        message: "session refreshed",
        accessToken: accessToken,
        refreshToken: RefreshToken,
        user: jwtData.user
      })
      .status(200);
  } catch (err) {
    console.log(err.message);
  }
};
