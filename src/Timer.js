import React from "react";
import { Card } from "antd";
import "antd/dist/antd.css";

export default function Timer({ timerState, handleChange }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    //TODO: post data to server and update id
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={timerState.value} onChange={handleChange} />
        <label>Project</label>
        <input type="text" value={timerState.project} onChange={handleChange} />
      </form>
      <Card></Card>
    </div>
  );
}
