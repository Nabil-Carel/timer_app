const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const express = require("express");
const mongoose = require("mongoose");
// const Timer = require("./model");
const models = require("./model");
const Timer = models.timerData;
const TaskList = models.tasks;
const RoommateList = models.roommate;

const cors = require("cors");
const app = express();

// Database connection
console.log(functions.config());
const connectionString = functions.config().someservice.db_connection_string;
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const con = mongoose.connection;
app.use(cors());
app.use(express.json());

try {
  con.on("open", () => {
    console.log("connected");
  });
} catch (error) {
  console.log("Error", error);
}

app.get("/", (req, res) => {
  Timer.find((err, timers) => {
    if (err) {
      console.log("Error", err);
    } else {
      res.json(timers);
    }
  });
});

app.post("/create", (req, res) => {
  const timer = new Timer(req.body);
  console.log("received");
  timer
    .save()
    .then((timer) => {
      console.log(timer);
      res.status(200).json(timer);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
});

app.put("/:id", (req, res, next) => {
  const timer = new Timer(req.body);
  console.log("params", req.params);
  Timer.findByIdAndUpdate(
    req.params.id,
    timer,
    {
      new: true,
      useFindAndModify: false,
    },
    (err, newTimer) => {
      if (!err) {
        res.status(200).json(newTimer);
      } else {
        console.log(err.message);
        res.status(500).send(err.message);
      }
    }
  );
});

app.delete("/:id", (req, res, next) => {
  // console.log("params", req.params);
  Timer.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      res.status(500).send(err.message);
      console.log("err", err);
    });
});

app.get("/tasks", (req, res) => {
  TaskList.find((err, tasks) => {
    if (err) {
      console.log("Error", err);
    } else {
      res.json(tasks);
    }
  });
});
app.get("/roommates", (req, res) => {
  RoommateList.find((err, roommates) => {
    if (err) {
      console.log("Error", err);
    } else {
      res.json(roommates);
    }
  });
  // const roommateList = new RoommateList();
  // console.log("received");
  // roommateList
  //   .save()
  //   .then((roommateList) => {
  //     console.log(roommateList);
  //     res.status(200).json(roommateList);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).send(err.message);
  //   });
});
app.listen(4040, () => {
  console.log("Server started.");
});
exports.app = functions.https.onRequest(app);
