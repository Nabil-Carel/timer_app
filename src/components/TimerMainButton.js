import React from "react";
import { Button } from "antd";
import PropTypes from "prop-types";
export default function TimerMainButton({
  onButtonClick,
  timerRunning,
  reset,
}) {
  const buttonStyle = {
    margin: 0,
    borderColor: !timerRunning || reset ? "#40a9ff" : "#FF726F",
    color: !timerRunning || reset ? "#40a9ff" : "#FF726F",
  };
  return (
    <Button block style={buttonStyle} onClick={onButtonClick}>
      {!timerRunning || reset ? "Start" : "Stop"}
    </Button>
  );
}
TimerMainButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  timerRunning: PropTypes.bool.isRequired,
  reset: PropTypes.bool.isRequired,
};
