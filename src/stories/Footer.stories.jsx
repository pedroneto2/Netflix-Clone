import React from "react";

import Footer from "../components/Footer/Footer";

export default {
  title: "Netflix Clone Components/Footer",
  component: Footer,
  argTypes: {
    bgColor: { control: "color" },
    textColor: { control: "color" },
    links: { control: "array" },
    linksInterval: { control: "array" },
  },
};

const Template = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
