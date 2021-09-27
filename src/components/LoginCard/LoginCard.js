import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import "./LoginCard.css";

import Spinner from "../Spinner/Spinner";

import AuthCtx from "../../store/context/AuthCtx";

const fakeValidateCredentials = (loginCredentials) => {
  const { email, password } = loginCredentials;
  if (email === "admin@admin" && password === "admin") {
    return true;
  }
  return false;
};

const handleSubmit = (e, loginCredentials, handleLogin) => {
  e.preventDefault();
  const validation = fakeValidateCredentials(loginCredentials);
  if (validation) {
    return handleLogin();
  }
  return window.alert("Invalid Credentials!");
};

const handleChange = (e, credentials, setCredentials) => {
  const { name, value } = e.target;
  setCredentials({ ...credentials, [name]: value });
};

const LoginCard = ({
  signin,
  emailText,
  passwordText,
  signinBtn,
  rememberMe,
  help,
}) => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const { loading, handleLogin } = useContext(AuthCtx);

  return (
    <div className="login-card-container">
      <div className="card-container">
        <h2>{signin}</h2>
        <form
          className="form-container"
          onSubmit={(e) => handleSubmit(e, loginCredentials, handleLogin)}
        >
          <label className="login-label" htmlFor="login">
            <span>{emailText}</span>
            <input
              id="login"
              type="email"
              name="email"
              value={loginCredentials.email}
              onChange={(e) =>
                handleChange(e, loginCredentials, setLoginCredentials)
              }
            />
          </label>
          <label className="password-label" htmlFor="password">
            <span>{passwordText}</span>
            <input
              id="password"
              type="password"
              name="password"
              value={loginCredentials.password}
              onChange={(e) =>
                handleChange(e, loginCredentials, setLoginCredentials)
              }
            />
          </label>
          <button>{loading ? <Spinner /> : signinBtn}</button>
          <div className="form-details">
            <label className="remember-me-container" htmlFor="remember-me">
              <input id="remember-me" type="checkbox" />
              <span>{rememberMe}</span>
            </label>
            <Link to="/">{help}</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
