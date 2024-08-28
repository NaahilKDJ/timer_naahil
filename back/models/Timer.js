const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timerSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
  time: { type: Number, required: true }, // time in milliseconds
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Timer", timerSchema);
