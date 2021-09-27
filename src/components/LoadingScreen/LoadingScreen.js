import React from "react";
import "./LoadingScreen.css";

import logo from "../../imgs/logos/netflix-logo.png";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <img src={logo} alt="loading" />
    </div>
  );
};

export default LoadingScreen;
