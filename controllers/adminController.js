const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const admin = new Admin({ name, email, password });
    const adminCheck = await Admin.findOne({ email });
    if(adminCheck) return res.json({code: 400 , message: "admin alreday exits"})
    await admin.save();
    res.status(200).json({ code:200, message: 'Admin registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    const adminCheck = await Admin.findOne({ email });
    if(!adminCheck) return res.json({code: 400 , message: "user not found"})

    if (!admin || !(await admin.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign( { id: admin._id, isAdmin: true }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ code: 200 , token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
