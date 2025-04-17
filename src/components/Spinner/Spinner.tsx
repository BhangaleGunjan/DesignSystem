import React from 'react'

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'tertiary'
  className?: string
}

const sizeMap = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-10 w-10',
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'primary',
  className = '',
}) => {
  const sizeClass = sizeMap[size]
  const colorClass = `border-${color}`

  return (
    <div
      role="status"
      aria-live="polite"
      className={`inline-block ${sizeClass} ${className}`}
    >
      <div
        className={`animate-spin rounded-full border-4 border-t-transparent ${colorClass}`}
        style={{ borderColor: `var(--color-${color})` }}
      />
      <span className="sr-only">Loading...</span>
    </div>
  )
}
