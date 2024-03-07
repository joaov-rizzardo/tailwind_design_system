import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Molecules/Button",
  component: Button,
  argTypes: {
    children: {
      type: "string",
    },
    disabled: {
      type: "boolean",
    },
    className: {
      type: "string",
    },
  },
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: "Botão Primário",
  },
};
export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: "Botão Primário",
    disabled: true,
  },
};
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: "Botão Secundário",
    variant: "secondary",
  },
};
export const SecondaryDisabled: StoryObj<ButtonProps> = {
  args: {
    children: "Botão Secundário",
    variant: "secondary",
    disabled: true,
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    children: "Botão Terciário",
    variant: "tertiary",
  },
};

export const TertiaryDisabled: StoryObj<ButtonProps> = {
  args: {
    children: "Botão Terciário",
    variant: "tertiary",
    disabled: true,
  },
};

export const Violet: StoryObj<ButtonProps> = {
  args: {
    children: "Botão Violeta",
    className: "theme-violet",
  },
};

export const VioletSecondary: StoryObj<ButtonProps> = {
  args: {
    children: "Botão Violeta",
    className: "theme-violet",

    variant: "secondary",
  },
};

export const VioletTertiary: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão Violeta',
    className: 'theme-violet',
    variant: 'tertiary'
  }
}
