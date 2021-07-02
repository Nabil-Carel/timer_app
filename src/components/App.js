import React, { useState, useEffect } from "react";
import "./App.css";
import Timer from "./Timer";
import ToggleableTimerForm from "./ToggleableTimerForm";
import Loading from "./Loading";
import { Col, Divider } from "antd";
import "antd/dist/antd.css";
import { getTimers } from "../api";

function App() {
  const [timers, setTimers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTimers = async () => {
      const result = await getTimers();
      setTimers(result);
      console.log(result);
    };
    fetchTimers();
  }, []);

  const dividerAndH1Style = { margin: 0 };
  const newTimer = (timer) => {
    setTimers([...timers, timer]);
  };

  const updateTimer = (updatedTimer) => {
    const index = timers.findIndex((timer) => timer.id === updatedTimer.id);

    const updatedTimerList = [...timers];
    //console.log("before", updatedTimerList);
    updatedTimerList[index] = updatedTimer;
    //console.log("after", updatedTimerList);
    setTimers(updatedTimerList);
  };

  const removeTimer = (id) => {
    console.log("removed");
    const filteredTimers = timers.filter((timer) => id !== timer._id);
    console.log("filtered timers", filteredTimers);
    setTimers(filteredTimers);
  };

  const renderedTimers =
    timers.length > 0 ? (
      timers.map((timerData) => (
        <Timer
          timer={timerData}
          key={timerData._id}
          onTimerUpdate={updateTimer}
          onTimerDelete={removeTimer}
        />
      ))
    ) : (
      <Loading loading={loading} setLoading={setLoading} />
    );
  return (
    <div className="dashboard">
      <Col align="center">
        <h1 style={dividerAndH1Style}>Timers</h1>
        <Divider style={dividerAndH1Style} />
        {renderedTimers}
        <ToggleableTimerForm onTimerCreate={newTimer} loading={loading} />
      </Col>
    </div>
  );
}

export default App;
