import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import "./LoginCard.css";

import Spinner from "../Spinner/Spinner";

import AuthCtx from "../../store/context/AuthCtx";

const credentialsInitialState = {
  email: "",
  password: "",
};

const fakeValidateCredentials = (loginCredentials) => {
  const { email, password } = loginCredentials;
  if (email === "admin@admin.com" && password === "admin") {
    return true;
  }
  return false;
};

const validateForm = (
  loginCredentials,
  errors,
  setErrors,
  emailError,
  passwordError
) => {
  let newErrors = { ...credentialsInitialState };

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const invalidCredentials = {
    email: [
      {
        invalidCredentials: !emailRegex.test(loginCredentials.email),
        errorMsg: emailError,
      },
    ],
    password: [
      {
        invalidCredentials: loginCredentials.password.length < 4,
        errorMsg: passwordError,
      },
      {
        invalidCredentials: loginCredentials.password.length > 60,
        errorMsg: passwordError,
      },
    ],
  };

  Object.keys(invalidCredentials).forEach((key) =>
    invalidCredentials[key].find((inputCase) => {
      if (inputCase.invalidCredentials) {
        newErrors[key] = inputCase.errorMsg;
        return true;
      }
      return false;
    })
  );

  Object.assign(errors, newErrors);

  setErrors({ ...errors });
};

const handleSubmit = (
  e,
  loginCredentials,
  handleLogin,
  errors,
  values,
  setValues
) => {
  e.preventDefault();
  const thereIsError = Object.values(errors).some((error) => error);
  if (thereIsError) {
    return;
  }
  const validation = fakeValidateCredentials(loginCredentials);
  if (validation) {
    return handleLogin();
  }
  setValues({ ...values, incorrectPassword: true });
  return;
};

const handleChange = (e, credentials, setCredentials) => {
  const { name, value } = e.target;
  setCredentials({ ...credentials, [name]: value });
};

const handleClickShowPassword = (values, setValues) => {
  setValues({
    ...values,
    showPassword: !values.showPassword,
  });
};

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

const LoginCard = ({
  signin,
  emailText,
  passwordText,
  hide,
  show,
  signinBtn,
  rememberMe,
  help,
  emailError,
  passwordError,
}) => {
  const [loginCredentials, setLoginCredentials] = useState({
    ...credentialsInitialState,
  });

  const [values, setValues] = useState({
    showPassword: false,
    incorrectPassword: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const { loading, handleLogin } = useContext(AuthCtx);

  useEffect(() => {
    validateForm(
      loginCredentials,
      errors,
      setErrors,
      emailError,
      passwordError
    );
  }, [loginCredentials]);

  return (
    <div className="login-card-container">
      <div className="card-container">
        <h2>{signin}</h2>
        <form
          className="form-container"
          onSubmit={(e) =>
            handleSubmit(
              e,
              loginCredentials,
              handleLogin,
              errors,
              values,
              setValues
            )
          }
        >
          <div
            className="incorrect-password"
            style={{ display: values.incorrectPassword ? "block" : "none" }}
          >
            <p>
              Credenciais incorretos! Tente: <br />
              <strong>Email</strong>: admin@admin.com / <strong>senha</strong>:
              admin
            </p>
          </div>
          <TextField
            fullWidth
            helperText={touched.email && errors.email}
            color="warning"
            label={emailText}
            variant="filled"
            type="text"
            name="email"
            value={loginCredentials.email}
            onChange={(e) =>
              handleChange(e, loginCredentials, setLoginCredentials)
            }
            onBlur={(e) => setTouched({ ...touched, [e.target.name]: true })}
            InputProps={{
              disableUnderline: true,
              style: {
                borderBottom:
                  touched.email && errors.email ? "2px solid #ed6c02" : "none",
              },
            }}
          />
          <TextField
            fullWidth
            helperText={touched.password && errors.password}
            color="warning"
            label={passwordText}
            variant="filled"
            type={values.showPassword ? "text" : "password"}
            name="password"
            value={loginCredentials.password}
            onChange={(e) =>
              handleChange(e, loginCredentials, setLoginCredentials)
            }
            onBlur={(e) => setTouched({ ...touched, [e.target.name]: true })}
            InputProps={{
              style: {
                borderBottom:
                  touched.password && errors.password
                    ? "2px solid #ed6c02"
                    : "none",
              },
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleClickShowPassword(values, setValues)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? hide : show}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <button>
            <div>{loading ? <Spinner /> : signinBtn}</div>
          </button>
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
