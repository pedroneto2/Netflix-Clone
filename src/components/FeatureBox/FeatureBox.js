import React from "react";
import "./FeatureBox.css";

import useMediaQuery from "@mui/material/useMediaQuery";

import PropTypes from "prop-types"; // storybook dependency

const insertElements = (elements, reverse, matches) => {
  reverse && matches && elements.reverse();
  return elements;
};

const FeatureBox = ({
  title,
  description,
  textColor,
  bgColor,
  borderColor,
  reverse,
  children,
}) => {
  const matches = useMediaQuery("(min-width:950px)");

  const elements = [
    <div
      key={1}
      style={{ color: textColor }}
      className="feature-text-container"
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>,
    <div key={2} className="feature-media-container">
      {children}
    </div>,
  ];

  return (
    <div
      className="feature-box-container"
      style={{ backgroundColor: bgColor, borderColor: borderColor }}
    >
      <div className="feature-content-container">
        {insertElements(elements, reverse, matches)}
      </div>
    </div>
  );
};

export default FeatureBox;

//STORY BOOK SETTINGS----------------------

FeatureBox.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  reverse: PropTypes.bool,
};

FeatureBox.defaultProps = {
  title: "E-sports",
  description:
    "Todos os dias, milhões de jogadores ao redor do mundo entram na batalha como um dos mais de 100 heróis de Dota em uma batalha entre equipes de cinco jogadores.",
  textColor: "white",
  bgColor: "black",
  reverse: false,
};
