import React from "react";

import LanBtn from "../components/LanBtn/LanBtn";

export default {
  title: "Netflix Clone Components/LanguageButton",
  component: LanBtn,
  argTypes: {
    selectBgColor: { control: "color" },
    textColor: { control: "color" },
  },
};

const Template = (args) => <LanBtn {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
