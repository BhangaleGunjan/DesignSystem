import type { Meta, StoryObj } from "@storybook/react";
import { ColorSwatches } from "./ColorSwatches";

const meta: Meta<typeof ColorSwatches> = {
  title: "Design Tokens/Color Swatches",
  component: ColorSwatches,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Shows all defined color tokens from the design system with light/dark support. Each box is styled using CSS variables defined in the token system.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorSwatches>;

export const Default: Story = {
  args: {},
};
