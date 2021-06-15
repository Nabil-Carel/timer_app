import React from "react";
import "./TimerDisplay.css";
import { Card } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

import ActionButton from "./ActionButton";
import Time from "./Time";
import TimerMainButton from "./TimerMainButton";
import PropTypes from "prop-types";
export default function TimerDisplay({
  title,
  description,
  elapsedTime,
  runningSince,
  onTimerEdit,
  onTimerStart,
  onTimerStop,
  onTimerDelete,
  onTimerStartedOrStopped,
  timerRunning,
  setTimerRunning,
  onTimerReset,
  reset,
  id,
}) {
  //Styles
  const cardStyle = { width: 300, marginTop: 16, borderColor: "#dcdcdc" };

  //const [timerRunning, setTimerRunning] = useState(Boolean(runningSince));

  const deletePopConfirmText = "Are you sure you want to delete this timer?";
  const editPopConfirmText = "Are you sure you want to edit this timer?";
  const resetPopConfirmText = "Are you sure you want to reset this timer";
  const startTimer = () => {
    //setInterval(updateElapsedTime, 1000);
    //setElapsed(elapsed);
    //reinitializeReset();
    setTimerRunning(true);
    onTimerStart();
  };
  const stopTimer = () => {
    setTimerRunning(false);
    onTimerStop();
  };

  const handleButtonClick = () => (!timerRunning ? startTimer() : stopTimer());
  return (
    <div>
      <Card
        className="Card"
        hoverable
        size="small"
        antd="true"
        style={cardStyle}
        actions={[
          <TimerMainButton
            onButtonClick={handleButtonClick}
            timerRunning={timerRunning}
            reset={reset}
            key="1"
          />,
        ]}
      >
        <h2 id="t">
          <b>{title}</b>
        </h2>
        <h4 id="t" className="ant-card-meta-description">
          {description}
        </h4>
        <Time
          elapsedTime={elapsedTime}
          timerRunning={timerRunning}
          runningSince={runningSince}
          onTimerStartedOrStopped={onTimerStartedOrStopped}
          reset={reset}
        />
        <div className="actionButtonBar">
          <ActionButton
            onButtonClick={onTimerEdit}
            iconComponent={EditOutlined}
            text={editPopConfirmText}
          />
          <ActionButton
            onButtonClick={onTimerReset}
            iconComponent={ReloadOutlined}
            text={resetPopConfirmText}
          />

          <ActionButton
            iconComponent={DeleteOutlined}
            onButtonClick={onTimerDelete}
            text={deletePopConfirmText}
            id={id}
          />
        </div>
      </Card>
    </div>
  );
}
//TimerDisplay.whyDidYouRender = true;
TimerDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  elapsedTime: PropTypes.string.isRequired,
  runningSince: PropTypes.string.isRequired,
  onTimerEdit: PropTypes.func.isRequired,
  onTimerStart: PropTypes.func.isRequired,
  onTimerStop: PropTypes.func.isRequired,
  onTimerDelete: PropTypes.func.isRequired,
  onTimerStartedOrStopped: PropTypes.func.isRequired,
  timerRunning: PropTypes.bool.isRequired,
  setTimerRunning: PropTypes.func.isRequired,
  onTimerReset: PropTypes.func.isRequired,
  reset: PropTypes.bool.isRequired,
  id: PropTypes.string,
};
