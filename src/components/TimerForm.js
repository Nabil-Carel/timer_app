import React from "react";
import { Card, Input, Button } from "antd";
import "./TimerForm.css";
import PropTypes from "prop-types";

export default function TimerForm({
  onTitleChange,
  onDescriptionChange,
  onCancelClick,
  onTimerSubmit,
  id,
  title,
  description,
}) {
  //Styles
  const cardStyle = { width: 300, marginTop: 16, borderColor: "#dcdcdc" };
  const titleStyle = { marginBottom: 16 };
  const descriptionStyle = { marginBottom: 0 };
  const buttonGroupStyle = { width: 280 };
  /**
   * Close TimerForm
   */
  const handleCancelClick = () => {
    onCancelClick();
  };

  const handleTitleChange = (e) => {
    onTitleChange(e);
  };

  const handleDescriptionChange = (e) => {
    onDescriptionChange(e);
  };

  const handleTimerSubmit = () => {
    onTimerSubmit();
  };

  return (
    <div>
      <Card
        className="Card"
        hoverable
        size="small"
        antd="true"
        style={cardStyle}
        actions={[
          <Button.Group style={buttonGroupStyle} key="buttonGroup">
            <Button
              type="default"
              block="true"
              id="button"
              onClick={handleTimerSubmit}
              key="create"
            >
              {
                id
                  ? "Update"
                  : "Create" /*timers don't have ids until they are stored in db*/
              }
            </Button>

            <Button
              type="default"
              block="true"
              key="cancel"
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
          style={titleStyle}
          onChange={(e) => handleTitleChange(e)}
          value={title}
        />
        <label>
          <b>Description</b>
        </label>
        <Input
          placeholder="Description"
          style={descriptionStyle}
          onChange={(e) => handleDescriptionChange(e)}
          value={description}
        />
      </Card>
    </div>
  );
}

TimerForm.propTypes = {
  /**
   * Handle cancel button Click
   *
   */
  onCancelClick: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  onTimerSubmit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
