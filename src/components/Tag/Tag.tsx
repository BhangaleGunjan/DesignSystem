import React from "react";
import clsx from "clsx";

export interface TagProps {
  label: string;
  variant?: "default" | "success" | "info" | "warning" | "error";
  size?: "sm" | "md" | "lg";
}

const variantStyles = {
  default: "bg-[var(--color-primary)] text-white",
  success: "bg-[var(--color-success)] text-white",
  info: "bg-[var(--color-info)] text-white",
  warning: "bg-[var(--color-warning)] text-black",
  error: "bg-[var(--color-error)] text-white",
};

const sizeStyles = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5",
};

export const Tag: React.FC<TagProps> = ({
  label,
  variant = "default",
  size = "md",
}) => {
  return (
    <span
      className={clsx(
        "inline-block rounded-full font-medium",
        variantStyles[variant],
        sizeStyles[size]
      )}
    >
      {label}
    </span>
  );
};
