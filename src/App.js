import { useState } from "react";
import "./App.css";
import Timer from "./Timer";
import ToggleableTimerForm from "./ToggleableTimerForm";
import { Col, Divider } from "antd";

function App() {
  const [timers, setTimers] = useState([]);
  let id = 0;

  const createTimer = () => {
    const timer = {
      id: id++,
      title: "",
      description: "",
      startTime: 0,
      pauseTime: 0,
    };
    setTimers([...timers, timer]);
  };

  const updateTimer = (updatedTimer) => {
    const filteredTimers = timers.filter(
      (timer) => timer.id !== updatedTimer.id
    );
    filteredTimers.push(updatedTimer);
    setTimers(filteredTimers);
  };

  const removeTimer = (id) => {
    const filteredTimers = timers.filter((timer) => id !== timer.id);
    setTimers(filteredTimers);
  };

  const renderedTimers = timers.map((timerData) => (
    <Timer
      newTimer={true}
      timerData={timerData}
      key={timerData.id}
      updateTimer={updateTimer}
    />
  ));
  return (
    <div className="dashboard">
      <Col align="center">
        <h1 style={{ marginBottom: 0 }}>Timers</h1>
        <Divider />
        {renderedTimers}
        <ToggleableTimerForm />
      </Col>
    </div>
  );
}

export default App;
