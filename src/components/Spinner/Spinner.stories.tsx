import React from 'react'
import { Spinner } from './Spinner'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Controls the size of the spinner',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Changes the color of the spinner for theming support',
    },
    label: {
      control: 'text',
      description: 'Optional accessible text or visual label for the spinner',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### 🌀 Spinner

The \`Spinner\` component is a visual indicator of a loading or pending state. It can be used alone or alongside loading messages, modals, or async components.

---

### ✅ Props / API

| Prop    | Type                      | Default | Description                                     |
|---------|---------------------------|---------|-------------------------------------------------|
| size    | "sm" | "md" | "lg"        | "md"    | Controls the visual size                        |
| color   | "primary" | "secondary" | "tertiary" | "primary" | The theme color of the spinner                 |
| label   | string (optional)         | -       | Optional text for screen readers or visual use  |

---

### 📌 Use Cases

- Page loading screens
- Fetching async data
- Button loading states
- Modal loading or confirmation delays

---

### 🧬 Anatomy / Structure

\`\`\`
<Spinner>
  <svg>...</svg>
  {label && <span>{label}</span>}
</Spinner>
\`\`\`

---

### 🎭 States & Variants

- **Sizes**: sm / md / lg
- **Color Themes**: primary / secondary / tertiary
- **With or without label**

---

### 🤹 Interaction Behavior

- **Spinning animation** via Tailwind’s \`animate-spin\`
- Optional label shows beside spinner
- Spinner does not trap focus or interfere with user input

---

### ♿ Accessibility Notes

- \`role="status"\` allows screen readers to announce changes
- Optional \`label\` makes it screen reader-friendly
- If no label is passed, you should add your own \`aria-label\` or wrap it with accessible text

---

### 🎨 Theming & Responsiveness

- Fully customizable via Tailwind classes
- Responsive sizing for different use cases

---

### ✅ Do’s and ❌ Don’ts

**✅ Do:**
- Pair with loading text when possible
- Use appropriate color for the theme
- Use consistent sizing across UI

**❌ Don’t:**
- Leave spinners endlessly running
- Use color-only feedback without accessible text
- Overuse multiple spinners in a small area

        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

// 🌟 Base example
export const Default: Story = {
  args: {
    size: 'md',
    color: 'primary',
    label: 'Loading...',
  },
}

// 📏 Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex gap-6 items-center">
      <Spinner size="sm" label="Small" />
      <Spinner size="md" label="Medium" />
      <Spinner size="lg" label="Large" />
    </div>
  ),
}

// 🎨 Colors
export const Colors: Story = {
  render: () => (
    <div className="flex gap-6 items-center">
      <Spinner color="primary" label="Primary" />
      <Spinner color="secondary" label="Secondary" />
      <Spinner color="tertiary" label="Tertiary" />
    </div>
  ),
}
