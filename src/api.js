import { message } from "antd";
const baseUrl = "https://us-central1-timer-app-81306.cloudfunctions.net/app/";
export const getTimers = () =>
  fetch(baseUrl, { method: "GET", mode: "cors" }).then((res) => res.json());

export const createTimer = (timer) =>
  fetch(`${baseUrl}create`, {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(timer),
  })
    .then((res) => res.json())
    .catch((err) => {
      message.error("Something went wrong. Could not create timer.");
      console.log(err.message);
      return null;
    });

export const updateTimer = (timer) =>
  fetch(`${baseUrl}${timer._id}`, {
    method: "PUT",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(timer),
  })
    .then((res) => {
      console.log("success");
      return res.json();
    })
    .catch((err) => {
      //console.log("Error put failed");
      message.error("Something went wrong. Could not update timer.");
      console.log(err.message, timer);
      return null;
    });

export const deleteTimer = (id) =>
  fetch(`${baseUrl}${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res)
    .catch((err) => {
      console.log(err.message);
      message.error("Something went wrong. Could not delete timer.");
    });
