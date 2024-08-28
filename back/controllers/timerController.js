const Timer = require("../models/Timer");

exports.submitReactionTime = async (req, res) => {
  const {userId, time} = req.body;

  try{
    const newTimer = new Timer({ user_id: userId, time });
    await newTimer.save();
    res.status(201).json({ message: "Reaction time submitted successfully" });
  }catch(error){
    res.status(400).json({ error: error.message });
  }
};

exports.getReactionTimes = async (req, res) => {
  const {userId} = req.params;
  const {sort = "date", order = "desc"} = req.query; // Sorting and ordering options

  try{
    const reactionTimes = await Timer.find({user_id: userId}).sort({[sort]: order === "asc" ? 1 : -1, });
    
    res.json(reactionTimes);
  }catch(error){
    res.status(400).json({error: error.message});
  }
};
