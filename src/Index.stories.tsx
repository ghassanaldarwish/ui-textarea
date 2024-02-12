import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./index";

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: "Marbella/Textarea",
  argTypes: {},
};
export default meta;

type Story = StoryObj;

export const Primary: Story = (args: any) => (
  <Textarea placeholder="Type your message here." />
);
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
