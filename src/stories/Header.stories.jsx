import React from "react";

import Header from "../components/Header/Header";

const tranformToTag = (logoLink) => {
  const link =
    logoLink ||
    //default Value - Img link from google images
    "http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png";
  return <img className="header-logo" src={link} alt="Netflix" />;
};

export default {
  title: "Netflix Clone Components/Landing Page/Header",
  component: Header,
  argTypes: {
    selectBgColor: { control: "color" },
    textColor: { control: "color" },
    buttonBgColor: { control: "color" },
    borderColor: { control: "color" },
    bgColorOverlay01: { control: "color" },
    bgColorOverlay02: { control: "text" },
    imgLogoTag: {
      control: { type: "text" },
    },
  },
};
const Template = ({ imgLogoTag, ...rest }) => {
  const imgTag = tranformToTag(imgLogoTag);
  return <Header imgLogoTag={imgTag} {...rest} />;
};

export const PrimaryColors = Template.bind({});
PrimaryColors.args = {};
