import React, { useState, useEffect } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerForm from "./TimerForm";
import PropTypes from "prop-types";
import { updateTimer, deleteTimer } from "../api";
import { message } from "antd";

/**
 *
 * Stateful component display timer data. FormState is used to display
 * either TimerForm or TimerDisplay
 *
 */
export default function Timer({ timer, /*onTimerUpdate,*/ onTimerDelete }) {
  /* -------------------------------------------------------------------------- */
  /*                                    Hooks                                   */
  /* -------------------------------------------------------------------------- */
  /**
   * A timer has two states:
   *  - formClosed == true: TimerDisplay is displayed
   *  - formClosed == false: TimerForm is displayed
   */
  const [formState, setFormState] = useState({ formClosed: true });
  const [timerData, setTimerData] = useState(timer);
  const [elapsed, setElapsed] = useState(timerData.elapsedTime);
  const [timerRunning, setTimerRunning] = useState(
    Boolean(timerData.runningSince)
  );
  const [reset, setReset] = useState(false);

  useEffect(() => {
    let newTimer;

    if (!timerRunning) {
      setReset(false);
    }
    if (reset) {
      newTimer = {
        ...timerData,
        runningSince: "",
        elapsedTime: "",
      };
    } else {
      newTimer = {
        ...timerData,
        elapsedTime: timerRunning ? timerData.elapsedTime : elapsed,
        runningSince: timerRunning
          ? timerData.runningSince || Date.now().toString()
          : "",
      };
    }
    // console.log("nre Yimrt running since", newTimer.runningSince);
    if (!deepEqual(timerData, newTimer)) {
      updateTimerInDB(newTimer).then(() => {
        if (reset) {
          message.success("Timer reset.");
        }
      });
    }
  }, [elapsed, timerRunning, reset]);

  /* -------------------------------- End Hooks ------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */
  /**
   * Change formState to the opposite of it's current value.
   * * formState is used to display either TimerDisplay or TimerForm depending
   * * the state value
   */
  const changeFormState = () => {
    setFormState({ formClosed: !formState.formClosed });
  };

  const updateTimerInDB = async (timer) => {
    const result = await updateTimer(timer);
    //console.log("update result", result);
    if (result) {
      setTimerData(result);
      return true;
    } else {
      message.error("Couldn't update timer.");
      message.error(timer.title);
      return false;
    }
  };

  /**
   */
  const handleTimerStart = () => {
    //const newTimer = { ...timerData, runningSince: Date.now().toString() };
    //setReset(false);
    setTimerRunning(true);
    //updateTimerInDB(newTimer);
  };

  const handleTimerStop = () => {
    setTimerRunning(false);
    //updateTimerInDB(newTimer);
  };

  /**
   * Update state to store title changes
   * @param {*} event: key press
   */
  const handleTitleChange = (event) => {
    const newTimer = { _id: timerData._id, title: event.target.value };
    setTimerData(newTimer);
    //updateTimerInDB(newTimer);
  };

  /**
   * Update state to store description changes
   * @param {*} event: key press
   */
  const handleDescriptionChange = (event) => {
    const newTimer = {
      _id: timerData._id,
      description: event.target.value,
    };
    setTimerData(newTimer);
    //updateTimerInDB(newTimer);
  };
  /**
   * @param  {Object} timer
   */
  const handleTitleOrDescriptionUpdate = (timer) => {
    const result = updateTimerInDB(timer);
    if (result) {
      setFormState({ formClosed: !formState.formClosed });
      message.success("Timer sucessfully updated.");
    }
  };

  const handleTimerReset = () => {
    setReset(true);
    setTimerRunning(false);
  };

  const handleTimerDelete = async (id) => {
    const result = await deleteTimer(id);
    //console.log("result", result);
    if (result.ok) {
      console.log("ok", result.ok);
      onTimerDelete(id);
      message.success("Timer sucessfully deleted.");
    } else {
      message.error("Couldn't delete timer.");
    }
  };

  function deepEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key of keys1) {
      const val1 = object1[key];
      const val2 = object2[key];
      const areObjects = isObject(val1) && isObject(val2);
      if (
        (areObjects && !deepEqual(val1, val2)) ||
        (!areObjects && val1 !== val2)
      ) {
        return false;
      }
    }

    return true;
  }

  function isObject(object) {
    return object != null && typeof object === "object";
  }
  /* ------------------------------ End Functions ----------------------------- */

  return (
    <div>
      {formState.formClosed ? (
        <TimerDisplay
          title={timerData.title}
          description={timerData.description}
          id={timerData._id}
          elapsedTime={timerData.elapsedTime}
          runningSince={timerData.runningSince}
          timerRunning={timerRunning}
          setTimerRunning={setTimerRunning}
          onTimerEdit={changeFormState}
          onTimerStart={handleTimerStart}
          onTimerStop={handleTimerStop}
          onTimerDelete={() => handleTimerDelete(timerData._id)}
          onTimerReset={handleTimerReset}
          onTimerStartedOrStopped={setElapsed}
          reset={reset}
        />
      ) : (
        <TimerForm
          onTitleChange={handleTitleChange}
          onDescriptionChange={handleDescriptionChange}
          onCancelClick={changeFormState}
          onTimerSubmit={() => handleTitleOrDescriptionUpdate(timerData)}
          //onTimerSubmit={handleTimerSubmit}//add put handler
          id={timerData._id}
          title={timerData.title}
          description={timerData.description}
        />
      )}
    </div>
  );
}

Timer.propTypes = {
  //Timer data to display
  timer: PropTypes.object.isRequired,
  onTimerUpdate: PropTypes.func.isRequired,
  onTimerDelete: PropTypes.func.isRequired,
};
