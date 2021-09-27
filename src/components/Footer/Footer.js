import "./Footer.css";

import "bootstrap/dist/css/bootstrap.min.css";

import LanBtn from "../LanBtn/LanBtn";

import PropTypes from "prop-types"; // storybook dependency

const Footer = ({
  phoneNumber,
  doubtText,
  links,
  linksInterval,
  textColor,
  bgColor,
  lanBtnWidth,
  lanBtnHeight,
  lanBtnFontSize,
  lanGlobeIconMaxHeight,
}) => {
  if (!linksInterval) linksInterval = [[0, links.length]];
  return (
    <div
      className="footer-container"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="footer-content-container mx-auto text-start">
        <h2>
          {doubtText} {phoneNumber}
        </h2>
        <div className="footer-links-container container-fluid">
          <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4">
            {links.map(
              (link, index) =>
                linksInterval.find(
                  (interval) => index >= interval[0] && index <= interval[1]
                ) && (
                  <div key={index} className="col px-0 mb-3">
                    {link}
                  </div>
                )
            )}
          </div>
        </div>
        <div className="language-button-container">
          <LanBtn
            selectBgColor={bgColor}
            textColor={textColor}
            width={lanBtnWidth}
            height={lanBtnHeight}
            fontSize={lanBtnFontSize}
            globeIconMaxHeight={lanGlobeIconMaxHeight}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

//STORY BOOK SETTINGS----------------------

Footer.propTypes = {
  phoneNumber: PropTypes.string,
  doubtText: PropTypes.string,
  links: PropTypes.array,
  linksInterval: PropTypes.arrayOf(PropTypes.array),
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  lanBtnWidth: PropTypes.string,
  lanBtnHeight: PropTypes.string,
  lanBtnFontSize: PropTypes.string,
  lanGlobeIconMaxHeight: PropTypes.string,
};

Footer.defaultProps = {
  phoneNumber: "0800 000 000",
  doubtText: "Dúvidas? Ligue já para ",
  links: [
    "FAQ",
    "Help Center",
    "Account",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Redeem Gift Cards",
    "Buy Gift Cards",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix",
  ],
  textColor: "#757575",
  bgColor: "black",
};
