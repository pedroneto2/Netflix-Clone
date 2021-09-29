import React, { useEffect, useState } from "react";
import "./GetStarted.css";

import { AiOutlineRight } from "react-icons/ai";

import TextField from "@mui/material/TextField";

const validateEmail = (email, emailError, setError) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const error = emailRegex.test(email) ? "" : emailError;
  setError(error);
};

const GetStarted = ({
  getStartedBtn,
  getStartedText,
  emailError,
  textColor,
  buttonBgColor,
}) => {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    validateEmail(email, emailError, setError);
  }, [email, emailError]);

  return (
    <React.Fragment>
      <h4 className="get-started-text" style={{ color: textColor }}>
        {getStartedText}
      </h4>
      <div className="email-container">
        <TextField
          type="email"
          label="Email"
          variant="filled"
          value={email}
          onBlur={() => setTouched(true)}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          helperText={touched && error}
          InputProps={{
            disableUnderline: true,
            style: {
              borderBottom: !touched || !error ? "none" : "2px solid #ed6c02",
            },
          }}
        />
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
