import React from "react";
import { Card, Input, Button } from "antd";
import "antd/dist/antd.css";
import "./TimerForm.css";

export default function TimerForm() {
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
            <Button type="default" block="true" id="button">
              Create
            </Button>
            <Button type="default" block="true" danger>
              Cancel
            </Button>
          </Button.Group>,
        ]}
      >
        <label>
          <b>Title</b>
        </label>
        <Input placeholder="Title" style={{ marginBottom: 16 }} />
        <label>
          <b>Description</b>
        </label>
        <Input placeholder="Description" style={{ marginBottom: 0 }} />
      </Card>
    </div>
  );
}
