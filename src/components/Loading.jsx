import React from "react";
import "../App.css";

var FontAwesome = require("react-fontawesome");

const Loading = () => {
  return (
    <div>
      <FontAwesome
        className="super-crazy-colors"
        name="rocket"
        size="5x"
        spin
        style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
      />
    </div>
  );
};

export default Loading;
