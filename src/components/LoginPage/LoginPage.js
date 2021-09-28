import React, { useContext } from "react";
import "./LoginPage.css";

import logo from "../../imgs/logos/netflix-logo.png";

import LoginCard from "../LoginCard/LoginCard";
import StyledBackGround from "../StyledBackGround/StyledBackGround";
import Footer from "../Footer/Footer";

import LanguageCtx from "../../store/context/LanguageCtx";

const LoginPage = () => {
  const { languagePack, language } = useContext(LanguageCtx);

  return (
    <StyledBackGround
      bgImage="https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/a00b1fb9-c99b-4016-8d52-ba364c881a20/BR-pt-20210823-popsignuptwoweeks-perspective_alpha_website_small.jpg"
      borderColor="black"
      bgColorOverlay01="rgba(0, 0, 0, 0.4)"
    >
      <div className="login-page-container">
        <img className="netflix-logo" src={logo} alt="netflix" />
        <LoginCard
          signin={languagePack[language].login.signin}
          emailText={languagePack[language].login.emailText}
          passwordText={languagePack[language].login.passwordText}
          signinBtn={languagePack[language].login.signinBtn}
          rememberMe={languagePack[language].login.rememberMe}
          help={languagePack[language].login.help}
          hide={languagePack[language].login.hide}
          show={languagePack[language].login.show}
          emailError={languagePack[language].login.emailError}
          passwordError={languagePack[language].login.passwordError}
        />
        <Footer
          phoneNumber={
            { Português: "0800-761-4631", English: "0800-761-4632" }[language]
          }
          doubtText={languagePack[language].footer.doubtsText}
          links={languagePack[language].footer.links}
          linksInterval={[
            [0, 1],
            [9, 12],
          ]}
          textColor="#757575"
          bgColor="rgba(0,0,0,0.75)"
          lanBtnWidth="154px"
          lanBtnHeight="53px"
          lanBtnFontSize="1.2em"
          lanGlobeIconMaxHeight="15px"
        />
      </div>
    </StyledBackGround>
  );
};

export default LoginPage;
