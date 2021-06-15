import React, { useState } from "react";
import { Button, Popconfirm } from "antd";
import "antd/dist/antd.css";
import PropTypes from "prop-types";
export default function ActionButton({
  onButtonClick,
  iconComponent,
  text,
  id,
}) {
  const [style, setStyle] = useState({
    borderColor: "transparent",
  });

  const Icon = iconComponent;

  //Styles
  const hoverOnStyle = {
    borderColor: "#40a9ff",
  };

  const hoverOffStyle = { borderColor: "transparent" };
  //console.log("id", id);
  return (
    <Popconfirm
      title={text}
      onConfirm={id ? (id) => onButtonClick(id) : onButtonClick}
      okText="Yes"
      cancelText="No"
    >
      <Button
        type="default"
        style={style}
        //onClick={}
        onMouseEnter={() => setStyle(hoverOnStyle)}
        onMouseLeave={() => setStyle(hoverOffStyle)}
        icon={<Icon />}
      />
    </Popconfirm>
  );
}

ActionButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  iconComponent: PropTypes.object.isRequired,
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
};
