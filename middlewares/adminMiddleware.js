const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function (req, res, next) {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.isAdmin) {
      req.admin = decoded;
      next();
    } else {
      res.status(403).json({ code:403, message: 'Access denied' });
    }
  } catch (error) {
    res.status(401).json({ code:401, message: 'Token is not valid' });
  }
};
