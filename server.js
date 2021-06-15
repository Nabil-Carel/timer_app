const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Timer = require("./src/model/model");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8080;

//Database connection
const connectionString = process.env.DB_CONNECTION_STRING;
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
  //console.log("params", req.params);
  Timer.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      res.status(500).send(err.message);
      console.log("err", err);
    });
});

app.listen(port, () => {
  console.log("Server started.");
});
