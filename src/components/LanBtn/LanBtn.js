import { useContext } from "react";

import "./LanBtn.css";

import { FaGlobe } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";

import LanguageCtx from "../LanguageCtx";

import PropTypes from "prop-types"; // storybook dependency

const retrieveLanguages = (languagePack = {}, selectBgColor) => {
  return Object.keys(languagePack).map((language, index) => (
    <option
      key={index}
      style={{ backgroundColor: selectBgColor }}
      value={language}
    >
      {language}
    </option>
  ));
};

const LanBtn = ({
  selectBgColor,
  textColor,
  width,
  height,
  fontSize,
  lanPack,
  lan,
}) => {
  const { languagePack, language, setLanguage } = useContext(LanguageCtx) || {
    languagePack: lanPack,
    language: lan,
  };

  return (
    <div className="language-select-container" style={{ fontSize: fontSize }}>
      <FaGlobe style={{ color: textColor }} className="language-icon-globe" />
      <select
        style={{
          color: textColor,
          height: height,
          width: width,
        }}
        name="languages"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        {retrieveLanguages(languagePack, selectBgColor)}
      </select>
      <RiArrowDownSFill
        style={{ color: textColor }}
        className="language-icon-arrow"
      />
    </div>
  );
};

export default LanBtn;

//STORY BOOK SETTINGS----------------------

LanBtn.propTypes = {
  selectBgColor: PropTypes.string,
  textColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  lanPack: PropTypes.object,
  lan: PropTypes.string,
};

LanBtn.defaultProps = {
  selectBgColor: "grey",
  textColor: "white",
  width: "113px",
  height: "36px",
  fontSize: "0.9em",
  lanPack: { Português: "", English: "" },
  lan: "Português",
};
