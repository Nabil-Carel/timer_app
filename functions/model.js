const mongoose = require("mongoose");

const timerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  runningSince: {
    type: String,
  },
  elapsedTime: {
    type: String,
  },
});

const timerData = mongoose.model("timerData", timerSchema);
module.exports = timerData;
