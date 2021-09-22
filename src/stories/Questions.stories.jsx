import React from "react";

import Question from "../components/Question/Question";

export default {
  title: "Netflix Clone Components/Landing Page/Question",
  component: Question,
  argTypes: {
    bgColor: { control: "color" },
    textColor: { control: "color" },
    detailText: { control: "array" },
  },
};

const Template = (args) => <Question {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
