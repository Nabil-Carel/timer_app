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

const roommateSchema = new mongoose.Schema({
  tasks: {
    type: [
      {
        type: String,
      },
    ],
    required: true,
    default: ["Phil", "Brogan", "Nabil", "Félicie"],
    validate: [arrayLimit, "{PATH} exceeds the limit of 4"],
  },
});

const taskSchema = new mongoose.Schema({
  tasks: {
    type: [
      {
        type: String,
      },
    ],
    required: true,
    default: [
      "Cuisine",
      "Salon/Couloir",
      "Douche/Toilette",
      "Poubelles/Vaisselle",
    ],
    validate: [arrayLimit, "{PATH} exceeds the limit of 4"],
  },
});

function arrayLimit(val) {
  return val.length === 4;
}
const timerData = mongoose.model("timerData", timerSchema);
const roommate = mongoose.model("roommate", roommateSchema);
const tasks = mongoose.model("tasks", taskSchema);
module.exports = { timerData, roommate, tasks };
