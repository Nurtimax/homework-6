import React from "react";
import "./CardLayout.css";

const CardLayout = ({ children }) => {
  return (
    <div>
      <div className="watch users">Watch users</div>
      <div className="CardLayout">{children}</div>
    </div>
  );
};

export default CardLayout;
