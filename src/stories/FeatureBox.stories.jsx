import React from "react";

import FeatureBox from "../components/FeatureBox/FeatureBox";

const tranformToTag = (img) => {
  const link =
    img ||
    //default Value - Img link from google images
    "https://marcas-logos.net/wp-content/uploads/2020/03/DOTA-2-LOGO.png";
  return (
    <img
      style={{ maxHeight: "300px" }}
      className="feature-img-01"
      src={link}
      alt="feature one"
    />
  );
};

export default {
  title: "Netflix Clone Components/Landing Page/FeatureBox",
  component: FeatureBox,
  argTypes: {
    textColor: { control: "color" },
    bgColor: { control: "color" },
    borderColor: { control: "color" },
    reverse: {
      options: [true, false],
      control: { type: "boolean" },
    },
    children: {
      control: { type: "text" },
    },
  },
};

const Template = ({ children, ...rest }) => {
  const imgTag = tranformToTag(children);

  return <FeatureBox children={imgTag} {...rest} />;
};

// const Template = (args) => <FeatureBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
