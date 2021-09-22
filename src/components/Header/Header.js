import React from "react";
import "./Header.css";

import GetStarted from "../GetStarted/GetStarted";
import LanBtn from "../LanBtn/LanBtn";

import PropTypes from "prop-types"; // storybook dependency

const Header = ({
  imgLogoTag,
  selectBgColor,
  textColor,
  buttonBgColor,
  borderColor,
  bgImage,
  loginText,
  introText01,
  introText02,
  getStartedBtn,
  getStartedText,
}) => {
  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${bgImage})`, borderColor: borderColor }}
    >
      <div className="header-background-image">
        <div className="header-nav">
          {imgLogoTag}
          <div className="language-login-container">
            <LanBtn selectBgColor={selectBgColor} textColor={textColor} />
            <button
              style={{ color: textColor, backgroundColor: buttonBgColor }}
              className="login-button"
            >
              {loginText}
            </button>
          </div>
        </div>
        <div className="intro-text-container" style={{ color: textColor }}>
          <h2>{introText01}</h2>
          <h4>{introText02}</h4>
          <GetStarted
            getStartedBtn={getStartedBtn}
            getStartedText={getStartedText}
            textColor={textColor}
            buttonBgColor={buttonBgColor}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

//STORY BOOK SETTINGS----------------------

Header.propTypes = {
  imgLogoTag: PropTypes.string,
  selectBgColor: PropTypes.string,
  textColor: PropTypes.string,
  buttonBgColor: PropTypes.string,
  borderColor: PropTypes.string,
  bgImage: PropTypes.string,
  loginText: PropTypes.string,
  introText01: PropTypes.string,
  introText02: PropTypes.string,
  getStartedBtn: PropTypes.string,
  getStartedText: PropTypes.string,
};

Header.defaultProps = {
  imgLogoTag: "",
  selectBgColor: "grey",
  textColor: "white",
  buttonBgColor: "red",
  borderColor: "#222",
  bgImage:
    "https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/a00b1fb9-c99b-4016-8d52-ba364c881a20/BR-pt-20210823-popsignuptwoweeks-perspective_alpha_website_small.jpg",
  loginText: "Login",
  introText01: "Unlimited movies, TV shows, and more.",
  introText02: "Watch anywhere. Cancel anytime.",
  getStartedText: "Get Started",
  emailText:
    "Ready to watch? Enter your email to create or restart your membership.",
};
