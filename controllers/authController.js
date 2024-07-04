const User = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    const userCheck = await User.findOne({ email });
    if(userCheck) return res.json({code: 400 , message: "user alreday exits"})
    await user.save();
    res.status(200).json({ code :200, message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    const userCheck = await User.findOne({ email });
    if(!userCheck) return res.json({code: 400 , message: "user notFound"})
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ code :401, message: 'Invalid email or password' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h', });
    res.json({ code: 200 ,token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
