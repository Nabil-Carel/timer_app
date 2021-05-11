import React, { useState } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerForm from "./TimerForm";
import PropTypes from "prop-types";

/**
 *
 * Stateful component display timer data. FormState is used to display
 * either TimerForm or TimerDisplay
 *
 */
export default function Timer({ timerData, newTimer, updateTimer }) {
  /**
   * A timer has two states:
   *  - formClosed == true: TimerDisplay is displayed
   *  - formClosed == false: TimerForm is displayed
   */
  const [formState, setFormState] = useState({ formClosed: true });

  /**
   * Change formState to the opposite of it's current value
   */
  const changeFormState = () => {
    setFormState({ formClosed: !formState.formClosed });
  };

  return (
    <div>
      {formState.formClosed ? (
        <TimerForm onCancelClick={changeFormState} />
      ) : (
        <TimerDisplay timerData={timerData} />
      )}
    </div>
  );
}

Timer.propTypes = {
  //Timer data to display
  timerData: PropTypes.object.isRequired,
};
