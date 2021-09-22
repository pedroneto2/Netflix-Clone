import React, { useEffect, useState } from "react";
import "./FeatureBox.css";

import PropTypes from "prop-types"; // storybook dependency

const insertElements = (elements, reverse) => {
  reverse && window.innerWidth > 950 && elements.reverse();
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
  const [cancelReverse, setCancelReverse] = useState(!reverse);

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

  useEffect(() => {
    const handleResize = () => {
      if (reverse) {
        if (window.innerWidth <= 950 && !cancelReverse) {
          setCancelReverse(true);
        } else if (window.innerWidth > 950 && cancelReverse) {
          setCancelReverse(false);
        }
      }
    };
    window.addEventListener("resize", handleResize);
  }, [cancelReverse]);

  return (
    <div
      className="feature-box-container"
      style={{ backgroundColor: bgColor, borderColor: borderColor }}
    >
      <div className="feature-content-container">
        {insertElements(elements, reverse)}
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
  children: PropTypes.string,
};

FeatureBox.defaultProps = {
  title: "E-sports",
  description:
    "Todos os dias, milhões de jogadores ao redor do mundo entram na batalha como um dos mais de 100 heróis de Dota em uma batalha entre equipes de cinco jogadores.",
  textColor: "white",
  bgColor: "black",
  reverse: false,
};
