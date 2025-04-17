import React from "react"
import ColorPalette from "./ColorPalette"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ColorPalette> = {
  title: "Foundations/Color Palette",
  component: ColorPalette,
  parameters: {
    docs: {
      description: {
        component:
          "A visual representation of the design system's color tokens. These colors support theming and accessibility across light/dark modes.",
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof ColorPalette>

export const Default: Story = {
  render: () => <ColorPalette />,
}
