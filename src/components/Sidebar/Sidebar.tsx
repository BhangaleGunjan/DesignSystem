// src/components/Sidebar/Sidebar.tsx
import React, { useState } from 'react'
import clsx from 'clsx' // if you have a classnames utility, or use clsx


export interface SidebarItem {
  label: string
  icon?: React.ReactNode
  onClick?: () => void
}

interface SidebarProps {
  items: SidebarItem[]
  collapsed?: boolean
}

export const Sidebar: React.FC<SidebarProps> = ({ items, collapsed = false }) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed)

  return (
    <aside
      role = "navigation"
      aria-label='Main Navigation'
      className={clsx(
        'h-screen bg-surface text-gray-900 dark:text-white transition-all duration-300',
        isCollapsed ? 'w-20' : 'w-64',
        'bg-white text-gray-900 border-r border-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700'
      )}
    >
      <button
        onClick={() => setIsCollapsed((prev) => !prev)}
        aria-expanded={!isCollapsed}
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        className={clsx(
            'w-full text-left px-4 py-2 transition-all duration-300',
            'bg-gray-100 hover:bg-gray-200 text-gray-900 border-b border-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:border-gray-700',
            'focus:outline-none focus:ring-2 focus:ring-primary',
          )}
      >
        {isCollapsed ? '->' : 'X'}
      </button>
      <ul className="mt-4 space-y-2">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
            onClick={item.onClick}
          >
            {item.icon}
            {!isCollapsed && <span>{item.label}</span>}
          </li>
        ))}
      </ul>
    </aside>
  )
}
