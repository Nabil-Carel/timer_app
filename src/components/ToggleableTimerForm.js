import React, { useState } from "react";
import TimerForm from "./TimerForm";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { createTimer } from "../api";
import PropTypes from "prop-types";
/**
 * Component used to add a new timer. By default, a button is displayed.
 *  Once that button is clicked, a TimerForm is displayed instead.
 */
export default function ToggleableTimerForm({ onTimerCreate, loading }) {
  //Form Status: formOpened == true => TimerForm displayed, else Button is displayed.

  //Styles
  const buttonStyle = { marginTop: 10 };

  const [formStatus, setFormStatus] = useState({ formOpened: false });

  const [timerData, setTimerData] = useState({
    title: "", //Timer Title
    description: "", //Timer Description
    runningSince: "", //When timer was created; equals to 0 if timer stopped
    elapsedTime: "", //Elapsed time since timer creation
  });

  /**
   * Update state to store title changes
   * @param {*} event: key press
   */
  const handleTitleChange = (event) => {
    const newTimer = { ...timerData, title: event.target.value };
    setTimerData(newTimer);
  };

  /**
   * Update state to store description changes
   * @param {*} event: key press
   */
  const handleDescriptionChange = (event) => {
    setTimerData({
      ...timerData,
      description: event.target.value,
    });
  };

  /**
   * Change formStatus to it's opposite value
   */
  const handleButtonClick = () => {
    setFormStatus({ formOpened: !formStatus.formOpened });
  };

  const handleTimerSubmit = async () => {
    console.log("timer", timerData);
    const result = await createTimer(timerData);

    if (result) {
      onTimerCreate(result);
    }
    //onTimerCreate ? onTimerCreate(timer) : onTimerUpdate(timer);

    handleButtonClick();
  };

  const addTimerButton = !loading ? (
    <Button
      type="default"
      style={buttonStyle}
      onClick={handleButtonClick}
      icon={<PlusOutlined className="button" />}
    />
  ) : null;
  return (
    <div>
      {formStatus.formOpened ? (
        <TimerForm
          onTitleChange={handleTitleChange}
          onDescriptionChange={handleDescriptionChange}
          onCancelClick={handleButtonClick}
          onTimerSubmit={handleTimerSubmit}
          id={timerData._id || ""}
          title={timerData.title}
          description={timerData.description}
        />
      ) : (
        addTimerButton
      )}
    </div>
  );
}
ToggleableTimerForm.propTypes = {
  onTimerCreate: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
