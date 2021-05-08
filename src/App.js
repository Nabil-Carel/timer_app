import "./App.css";
import TimerDisplay from "./TimerDisplay";
import TimerForm from "./TimerForm";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Divider } from "antd";

function App() {
  return (
    <div className="dashboard">
      <Col align="center">
        <h1 style={{ marginBottom: 0 }}>Timers</h1>
        <Divider />
        <TimerForm />
        <TimerDisplay />
        <Button
          type="default"
          style={{ marginTop: 10 }}
          icon={<PlusOutlined className="button" />}
        />
      </Col>
    </div>
  );
}

export default App;
