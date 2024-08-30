
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {
  const { email, password, role } = req.body;
  try{
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword, role });
    await newUser.save();
    res.status(201).json({message: "User registered successfully"});
  }catch(error){
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  
  try{
    const usr = await User.findOne({email});
    if(!usr){
      return res.status(400).json({ message: "Invalid credentials" });
    }
    
    const isMatch = await bcrypt.compare(password, usr.password);
    
    if (!isMatch){
      return res.status(400).json({ message: "Invalid credentials" });
    }
    console.log(isMatch);
    console.log(usr);
    require('dotenv').config();
    // console.log('JWT_SECRET:', process.env.JWT_SECRET);
    const token = jwt.sign({ id: usr._id, role: usr.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
    console.log(token);
    
    res.json({token, userId: usr._id});
  }catch (error) {
    res.status(500).json({ error: error.message });
  }
};
