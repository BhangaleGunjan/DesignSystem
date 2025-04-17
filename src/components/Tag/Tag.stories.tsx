import type { Meta, StoryObj } from "@storybook/react";
import { Tag, TagProps } from "./Tag";
import { X } from "lucide-react";

const meta: Meta<typeof Tag> = {
  title: "Data Display/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "info", "warning", "error"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    closable: {
      control: "boolean",
    },
    onClose: {
      action: "closed",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "💡 **Tag** is a small label used to highlight key information like status, categories, filters, or keywords. It supports theming, closable behavior, different sizes, and accessible interactions. Perfect for dashboards, filters, or badges.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Playground: Story = {
  args: {
    label: "Active",
    variant: "success",
    size: "md",
    closable: false,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag label="Default" variant="default" />
      <Tag label="Success" variant="success" />
      <Tag label="Info" variant="info" />
      <Tag label="Warning" variant="warning" />
      <Tag label="Error" variant="error" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "🎨 Demonstrates different semantic color variants of the Tag component.",
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-2">
      <Tag label="Small" size="sm" />
      <Tag label="Medium" size="md" />
      <Tag label="Large" size="lg" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "📏 Shows the three available sizes: `sm`, `md`, and `lg`.",
      },
    },
  },
};

export const Closable: Story = {
  args: {
    label: "Removable",
    closable: true,
  },
  parameters: {
    docs: {
      description: {
        story: "🗑️ Tag with a close icon. When clicked, it triggers the `onClose` callback.",
      },
    },
  },
};

export const InteractiveUseCase: Story = {
  render: () => (
    <div className="flex gap-3 flex-wrap">
      <Tag label="Frontend" variant="info" closable />
      <Tag label="Urgent" variant="error" closable />
      <Tag label="Approved" variant="success" />
      <Tag label="Pending" variant="warning" closable />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "✨ Example of how Tag might be used in a filter UI or dashboard.",
      },
    },
  },
};

export const Accessibility: Story = {
  render: () => (
    <Tag
      label="Accessible Tag"
      closable
      onClose={() => alert("Tag closed")}
      aria-label="Close tag"
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "♿ Accessibility-friendly tag using `aria-label` and keyboard-navigable close icon. Make sure to support screen readers.",
      },
    },
  },
};
