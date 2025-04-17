import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { HomeIcon, SettingsIcon } from 'lucide-react'

const meta: Meta<typeof Sidebar> = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
### Sidebar Component

The \`Sidebar\` component is a vertical navigation menu used for app layouts, designed with collapsibility in mind. It can display a list of items with both icons and labels, and supports accessibility and theming for a seamless user experience.

---

### ✅ Props / API

| Prop      | Type                    | Default   | Description                                       |
|-----------|-------------------------|-----------|---------------------------------------------------|
| \`items\` | \`Array\`                | \`[]\`    | List of items to display in the sidebar. Each item should have a \`label\`, \`icon\`, and \`onClick\` handler. |
| \`collapsed\` | \`boolean\`          | \`false\` | Controls whether the sidebar is in collapsed mode or expanded mode. |

---

### 💡 Use Cases

- **Admin dashboard navigation**: To manage admin actions with an easily accessible side panel.
- **Sidebar menu for web apps**: Helps in navigating different sections of an app quickly.
- **Settings or tool panels**: Display app settings or specific tools in a compact sidebar.

---

### 🧬 Anatomy / Structure

1. **Sidebar Container**: A vertical container that holds all the navigation items.
2. **Item**: Each item consists of an icon and label, optionally clickable with an \`onClick\` handler.
3. **Collapse Button**: A button to collapse/expand the sidebar, reducing the amount of screen space used.

---

### ⚙️ States & Variants

- **Expanded**: Displays the sidebar with all items and labels visible.
- **Collapsed**: Displays the sidebar in a compact form with just icons visible.

---

### ⚡ Interaction Behavior

- Clicking a sidebar item triggers its \`onClick\` handler.
- The collapse/expand button toggles the sidebar’s width between collapsed and expanded states.

---

### ♿ Accessibility Notes (ARIA, Focus Management)

- **ARIA**: The sidebar should be navigable via keyboard. Use appropriate ARIA roles like \`role="navigation"\` and \`aria-expanded\` for the collapse button to manage focus and accessibility.
- **Focus Management**: When the sidebar is expanded or collapsed, ensure the focus is moved accordingly to keep the navigation intuitive.

---

### 🎨 Theming / Responsiveness Support

- The sidebar supports custom theming, including light/dark modes, via CSS variables.
- The component is fully responsive and adjusts its layout based on screen size. On smaller screens, consider using the collapsed state by default to optimize screen real estate.

---

### ✅ Do's and Don'ts / Best Practices

#### Do's:
- Use the sidebar for essential navigation items that need to be accessible at all times.
- Provide clear labels for each item to enhance usability.

#### Don'ts:
- Don't use the sidebar for non-essential or rarely used items.
- Avoid cluttering the sidebar with too many items. Group similar items together for better organization.

`,
      },
    },
  },
  argTypes: {
    items: {
      description: 'An array of items to display in the sidebar. Each item should have a label, an icon, and an onClick handler.',
      table: {
        type: { summary: 'Array' },
      },
    },
    collapsed: {
      description: 'Controls whether the sidebar is collapsed or expanded.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Sidebar>

const dummyItems = [
  {
    label: 'Home',
    icon: <HomeIcon size={18} />,
    onClick: () => alert('Home clicked'),
  },
  {
    label: 'Settings',
    icon: <SettingsIcon size={18} />,
    onClick: () => alert('Settings clicked'),
  },
]

export const Expanded: Story = {
  args: {
    items: dummyItems,
    collapsed: false,
  },
}

export const Collapsed: Story = {
  args: {
    items: dummyItems,
    collapsed: true,
  },
}
