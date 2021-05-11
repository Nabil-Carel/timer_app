import React, { useState } from "react";
import { Card, Input, Button } from "antd";
import "antd/dist/antd.css";
import "./TimerForm.css";
import PropTypes from "prop-types";

export default function TimerForm({ onCancelClick }) {
  const [timerData, setTimerData] = useState({
    title: "", //Timer Title
    description: "", //Timer Description
    startTime: 0, //Timer creation time
    elapsedTime: 0, //Elapsed time since timer creation
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
   * Close TimerForm
   */
  const handleCancelClick = () => {
    onCancelClick();
  };

  return (
    <div>
      <Card
        className="Card"
        hoverable
        size="small"
        antd="true"
        style={{ width: 300, marginTop: 16, borderColor: "#dcdcdc" }}
        actions={[
          <Button.Group style={{ width: 280 }}>
            <Button type="default" htmlType="submit" block="true" id="button">
              {timerData.id ? "Update" : "Create"}
            </Button>

            <Button
              type="default"
              block="true"
              danger
              onClick={handleCancelClick}
            >
              Cancel
            </Button>
          </Button.Group>,
        ]}
      >
        <label>
          <b>Title</b>
        </label>
        <Input
          placeholder="Title"
          style={{ marginBottom: 16 }}
          onChange={(e) => handleTitleChange}
        />
        <label>
          <b>Description</b>
        </label>
        <Input
          placeholder="Description"
          style={{ marginBottom: 0 }}
          onChange={(e) => handleDescriptionChange}
        />
      </Card>
    </div>
  );
}

TimerForm.propTypes = {
  /**
   * Handle cancel button Click
   */
  onCancelClick: PropTypes.func.isRequired,
};
