import "./LogInOutBtn.css";
import { useHistory } from "react-router-dom";
import { useContext } from "react";

import LanguageCtx from "../../store/context/LanguageCtx";
import AuthCtx from "../../store/context/AuthCtx";

//for storybook usage:
const storyBookLanguageCtx = {
  languagePack: {
    English: {
      header: {
        login: "Log In",
        logout: "Log Out",
      },
    },
  },
  language: "English",
};

const handleClick = (authenticated, history, handleLogout) => {
  authenticated ? handleLogout() : history.push("/login");
};

const LogInOutBtn = ({ textColor, buttonBgColor }) => {
  const { languagePack, language } =useContext(LanguageCtx) || storyBookLanguageCtx;
  const { authenticated, handleLogout } = useContext(AuthCtx) || {};

  const { login, logout } = languagePack[language].header;

  const history = useHistory();

  return (
    <button
      style={{ color: textColor, backgroundColor: buttonBgColor }}
      className="login-button"
      onClick={() => handleClick(authenticated, history, handleLogout)}
    >
      {authenticated ? logout : login}
    </button>
  );
};

export default LogInOutBtn;
