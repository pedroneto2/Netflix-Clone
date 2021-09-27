import React from "react";
import "./StyledBackGround.css";

const StyledBackGround = ({
  bgImage,
  borderColor,
  bgColorOverlay01,
  bgColorOverlay02,
  children,
}) => {
  return (
    <div
      className="styled-background-container"
      style={{ backgroundImage: `url(${bgImage})`, borderColor: borderColor }}
    >
      <div
        className="styled-background-image"
        style={{
          backgroundColor: bgColorOverlay01,
          backgroundImage: bgColorOverlay02,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default StyledBackGround;
