import React from "react";
import './BackgroundColor.css'

const BackgroundColor = ({style}) => {
  const cardStyle = {
    backgroundColor: style,
  };
  return <div className="bgcolor" style={cardStyle}></div>;
};

export default BackgroundColor;
