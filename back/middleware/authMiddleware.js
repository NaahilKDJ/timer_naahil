const jwt = require("jsonwebtoken");
require('dotenv').config();
const sKey = process.env.JWT_SECRET;

exports.authenticate = (req, res, next) => {
  const authHeader = req.header?.('Authorization');
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ msg: 'No token, authorization denied' })
  }
  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' })
  }

};

// ``;
