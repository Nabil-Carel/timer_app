import React, { useEffect } from "react";
import "./Loading.css";
import { LoadingOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
export default function Loading({ loading, setLoading }) {
  useEffect(() => setTimeout(() => setLoading(false), 10000), []);

  return (
    <div>
      {loading ? (
        <LoadingOutlined
          style={{ fontSize: "5vw" }}
          className="center-screen"
        />
      ) : (
        <h4>Nothing to display</h4>
      )}
    </div>
  );
}

Loading.propTypes = {
  setLoading: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
