import React, { useState } from "react";
import TimerForm from "./TimerForm";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

/**
 * Component used to add a new timer. By default, a button is displayed.
 *  Once that button is clicked, a TimerForm is displayed instead.
 */
export default function ToggleableTimerForm() {
  //Form Status: formOpened == true => TimerForm displayed, else Button is displayed.
  const [formStatus, setFormStatus] = useState({ formOpened: false });

  /**
   * Change formStatus to it's opposite value
   */
  const handleButtonClick = () => {
    setFormStatus({ formOpened: !formStatus.formOpened });
  };
  return (
    <div>
      {formStatus.formOpened ? (
        <TimerForm onCancelClick={handleButtonClick} />
      ) : (
        <Button
          type="default"
          style={{ marginTop: 10 }}
          onClick={handleButtonClick}
          icon={<PlusOutlined className="button" />}
        />
      )}
    </div>
  );
}
