import React, { useContext } from "react";
import "./LandingPage.css";

import Header from "../Header/Header";
import FeatureBox from "../FeatureBox/FeatureBox";
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";

import logo from "../../imgs/logos/netflix-logo.png";
import featureImg01 from "../../imgs/features/tv.png";
import featureVideo01 from "../../videos/features/video01.m4v";
import feature02Img01 from "../../imgs/features/mobile.jpg";
import feature02Img02 from "../../imgs/features/stranger_things.png";
import feature03Img01 from "../../imgs/features/devices.png";
import feature03Video01 from "../../videos/features/video02.m4v";
import feature04Img01 from "../../imgs/features/kids.png";

import LanguageCtx from "../../store/context/LanguageCtx";

const LandingPage = () => {
  const { languagePack, language } = useContext(LanguageCtx);

  return (
    <div className="landing-page-container">
      <Header
        imgLogoTag={<img className="header-logo" src={logo} alt="Netflix" />}
        selectBgColor="grey"
        textColor="white"
        buttonBgColor="red"
        borderColor="#222"
        bgColorOverlay01="rgba(0, 0, 0, 0.4)"
        bgColorOverlay02="linear-gradient(to top,rgba(0, 0, 0, 0.8) 0,rgba(0, 0, 0, 0) 40%,rgba(0, 0, 0, 0) 75%,rgba(0, 0, 0, 0.8)100%)"
        bgImage="https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/a00b1fb9-c99b-4016-8d52-ba364c881a20/BR-pt-20210823-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        introText01={languagePack[language].header.introText01}
        introText02={languagePack[language].header.introText02}
        getStartedBtn={languagePack[language].getStarted.getStartedBtn}
        getStartedText={languagePack[language].getStarted.text}
        emailError={languagePack[language].getStarted.emailError}
        lanGlobeIconMaxHeight="12px"
      />
      <FeatureBox
        textColor="white"
        bgColor="black"
        borderColor="#222"
        title={languagePack[language].featureOne.title}
        description={languagePack[language].featureOne.description}
      >
        <img
          className="feature-image-01"
          src={featureImg01}
          alt="feature one"
        />
        <video className="feature-video-01" autoPlay muted loop>
          <source src={featureVideo01} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </FeatureBox>
      <FeatureBox
        reverse
        textColor="white"
        bgColor="black"
        borderColor="#222"
        title={languagePack[language].featureTwo.title}
        description={languagePack[language].featureTwo.description}
      >
        <img
          className="feature-image-02"
          src={feature02Img01}
          alt="feature two"
        />
        <div className="download-feature-container">
          <img src={feature02Img02} alt="download" />
          <div className="download-feature-content">
            <h3>Stranger Things</h3>
            <p>{languagePack[language].featureTwo.downloadText}</p>
          </div>
        </div>
      </FeatureBox>
      <FeatureBox
        textColor="white"
        bgColor="black"
        borderColor="#222"
        title={languagePack[language].featureThree.title}
        description={languagePack[language].featureThree.description}
      >
        <img
          className="feature-image-03"
          src={feature03Img01}
          alt="feature three"
        />
        <video className="feature-video-02" autoPlay muted loop>
          <source src={feature03Video01} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </FeatureBox>
      <FeatureBox
        reverse
        textColor="white"
        bgColor="black"
        borderColor="#222"
        title={languagePack[language].featureFour.title}
        description={languagePack[language].featureFour.description}
      >
        <img
          className="feature-image-04"
          src={feature04Img01}
          alt="feature four"
        />
      </FeatureBox>
      <FAQ
        borderColor="#222"
        FAQText={languagePack[language].FAQ}
        getStartedBtn={languagePack[language].getStarted.getStartedBtn}
        getStartedText={languagePack[language].getStarted.text}
        emailError={languagePack[language].getStarted.emailError}
        textColor="white"
        buttonBgColor="red"
      />
      <Footer
        phoneNumber={
          { Português: "0800-761-4631", English: "0800-761-4632" }[language]
        }
        doubtText={languagePack[language].footer.doubtsText}
        links={languagePack[language].footer.links}
        textColor="#757575"
        bgColor="black"
        lanBtnWidth="154px"
        lanBtnHeight="53px"
        lanBtnFontSize="1.2em"
        lanGlobeIconMaxHeight="15px"
      />
    </div>
  );
};

export default LandingPage;
