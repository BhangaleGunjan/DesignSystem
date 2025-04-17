export interface SidebarItem {
    label: string
    icon?: React.ReactNode
    onClick?: () => void
  }
  
  export interface SidebarProps {
    items: SidebarItem[]
    collapsed?: boolean
  }
  