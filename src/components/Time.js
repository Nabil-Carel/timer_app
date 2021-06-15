import React, { useState, useEffect } from "react";
import "./Time.css";
import PropTypes from "prop-types";
export default function Time({
  elapsedTime,
  timerRunning,
  onTimerStartedOrStopped,
  runningSince,
  reset,
  //reinitializeReset,
}) {
  const [elapsed, setElapsed] = useState(getElapsed);

  useEffect(() => {
    let interval;

    if (reset) {
      //reinitializeReset();
      setElapsed(0);
    } else {
      const updateTimer = () => {
        if (timerRunning) {
          //console.log("current val", Number(elapsed) + 1000, "elapsed", elapsed);
          interval = setInterval(
            () => setElapsed((Number(elapsed) + 1000).toString()),
            1000
          );
        }
      };

      //console.log(updateTimer);
      updateTimer();
    }

    return function cleanup() {
      clearInterval(interval);
    };
  }, [elapsed, timerRunning, reset]);

  useEffect(() => {
    onTimerStartedOrStopped(elapsed);
  }, [timerRunning]);

  const formatTimeComponents = (value) => (value <= 9 ? `0${value}` : value);

  const msToTime = (duration) => {
    //let milliseconds = parseInt((duration % 1000) / 100),
    //let seconds = Math.floor((Number(duration) / 1000) % 60),
    //minutes = Math.floor((Number(duration) / (1000 * 60)) % 60),
    //hours = Math.floor((Number(duration) / (1000 * 60 * 60)) % 24);
    /* hours = Math.floor(Number(duration) / (1000 * 60 * 60));

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;*/

    const days = Math.floor(duration / (24 * 60 * 60 * 1000));
    const daysms = duration % (24 * 60 * 60 * 1000);
    const hours = Math.floor(daysms / (60 * 60 * 1000));
    const hoursms = duration % (60 * 60 * 1000);
    const minutes = Math.floor(hoursms / (60 * 1000));
    const minutesms = duration % (60 * 1000);
    const sec = Math.floor(minutesms / 1000);

    const formattedDays = formatTimeComponents(days);
    const formattedHours = formatTimeComponents(hours);
    const formattedMinutes = formatTimeComponents(minutes);
    const formattedSeconds = formatTimeComponents(sec);
    return (
      formattedDays +
      "d " +
      formattedHours +
      ":" +
      formattedMinutes +
      ":" +
      formattedSeconds
    );
  };

  function getElapsed() {
    let time;
    if (reset) {
      time = 0;
    } else {
      time = runningSince
        ? (
            Number(Date.now()) -
            Number(runningSince) +
            Number(elapsedTime)
          ).toString()
        : elapsedTime;
    }
    return time;
  }
  return <h2 id="time">{msToTime(elapsed)}</h2>;
}

Time.propTypes = {
  elapsedTime: PropTypes.string.isRequired,
  timerRunning: PropTypes.bool.isRequired,
  onTimerStartedOrStopped: PropTypes.func.isRequired,
  runningSince: PropTypes.string.isRequired,
  reset: PropTypes.bool.isRequired,
};
