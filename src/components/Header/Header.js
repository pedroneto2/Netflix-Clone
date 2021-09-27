import React from "react";
import "./Header.css";

import StyledBackGround from "../StyledBackGround/StyledBackGround";
import GetStarted from "../GetStarted/GetStarted";
import LanBtn from "../LanBtn/LanBtn";
import LogInOutBtn from "../LogInOutBtn/LogInOutBtn";

import PropTypes from "prop-types"; // storybook dependency

const Header = ({
  imgLogoTag,
  selectBgColor,
  textColor,
  buttonBgColor,
  borderColor,
  bgColorOverlay01,
  bgColorOverlay02,
  bgImage,
  introText01,
  introText02,
  getStartedBtn,
  getStartedText,
  lanGlobeIconMaxHeight,
}) => {
  return (
    <StyledBackGround
      bgImage={bgImage}
      borderColor={borderColor}
      bgColorOverlay01={bgColorOverlay01}
      bgColorOverlay02={bgColorOverlay02}
    >
      <div className="header-nav">
        {imgLogoTag}
        <div className="language-login-container">
          <LanBtn
            selectBgColor={selectBgColor}
            textColor={textColor}
            globeIconMaxHeight={lanGlobeIconMaxHeight}
          />
          <LogInOutBtn textColor={textColor} buttonBgColor={buttonBgColor} />
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
    </StyledBackGround>
  );
};

export default Header;

//STORY BOOK SETTINGS----------------------

Header.propTypes = {
  selectBgColor: PropTypes.string,
  textColor: PropTypes.string,
  buttonBgColor: PropTypes.string,
  borderColor: PropTypes.string,
  bgColorOverlay01: PropTypes.string,
  bgColorOverlay02: PropTypes.string,
  bgImage: PropTypes.string,
  introText01: PropTypes.string,
  introText02: PropTypes.string,
  getStartedBtn: PropTypes.string,
  getStartedText: PropTypes.string,
  lanGlobeIconMaxHeight: PropTypes.string,
};

Header.defaultProps = {
  selectBgColor: "grey",
  textColor: "white",
  buttonBgColor: "red",
  borderColor: "#222",
  bgColorOverlay01: "rgba(0, 0, 0, 0.4)",
  bgColorOverlay02:
    "linear-gradient(to top,rgba(0, 0, 0, 0.8) 0,rgba(0, 0, 0, 0) 40%,rgba(0, 0, 0, 0) 75%,rgba(0, 0, 0, 0.8)100%)",
  bgImage:
    "https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/a00b1fb9-c99b-4016-8d52-ba364c881a20/BR-pt-20210823-popsignuptwoweeks-perspective_alpha_website_small.jpg",
  introText01: "Unlimited movies, TV shows, and more.",
  introText02: "Watch anywhere. Cancel anytime.",
  getStartedText: "Get Started",
  emailText:
    "Ready to watch? Enter your email to create or restart your membership.",
  lanGlobeIconMaxHeight: "10px",
};
