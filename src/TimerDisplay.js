import React, { useState } from "react";
import "./TimerDisplay.css";
import "antd/dist/antd.css";
import { Card, Button } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";

export default function TimerDisplay() {
  const [editHoverStyle, setEditHoverStyle] = useState({
    borderColor: "transparent",
  });

  const [deleteHoverStyle, setDeleteHoverStyle] = useState({
    borderColor: "transparent",
  });
  return (
    <div>
      <Card
        className="Card"
        hoverable
        size="small"
        antd="true"
        style={{ width: 300, marginTop: 16, borderColor: "#dcdcdc" }}
        actions={[
          <Button type="default" block id="button">
            Create
          </Button>,
        ]}
      >
        <Card.Meta title="Title" description="Description" />
        <h2 id="time">Time</h2>
        <p>
          <Button
            type="default"
            style={editHoverStyle}
            onMouseEnter={() =>
              setEditHoverStyle({
                borderColor: "#40a9ff",
              })
            }
            onMouseLeave={() =>
              setEditHoverStyle({ borderColor: "transparent" })
            }
            icon={<EditFilled />}
          />
          <Button
            type="default"
            style={deleteHoverStyle}
            onMouseEnter={() => setDeleteHoverStyle({ borderColor: "#40a9ff" })}
            onMouseLeave={() =>
              setDeleteHoverStyle({ borderColor: "transparent" })
            }
            icon={<DeleteFilled />}
          />
        </p>
      </Card>
    </div>
  );
}
