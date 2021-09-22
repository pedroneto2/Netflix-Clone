import React from "react";
import "./GetStarted.css";

import { AiOutlineRight } from "react-icons/ai";

const GetStarted = ({
  getStartedBtn,
  getStartedText,
  textColor,
  buttonBgColor,
}) => {
  return (
    <React.Fragment>
      <h4 className="get-started-text" style={{ color: textColor }}>
        {getStartedText}
      </h4>
      <div className="email-container">
        <input className="email-input" type="email" placeholder="Email" />
        <button
          className="email-button"
          style={{ color: textColor, backgroundColor: buttonBgColor }}
        >
          {getStartedBtn}
          <AiOutlineRight className="email-button-icon" />
        </button>
      </div>
    </React.Fragment>
  );
};

export default GetStarted;
