import React from "react"

type ColorBoxProps = {
  name: string
  variable: string
}

const ColorBox: React.FC<ColorBoxProps> = ({ name, variable }) => {
  return (
    <div className="flex flex-col items-center text-center m-2">
      <div
        className="w-24 h-24 rounded shadow-md"
        style={{ backgroundColor: `var(${variable})` }}
      ></div>
      <p className="mt-2 text-sm">{name}</p>
      <p className="text-xs text-gray-500">{variable}</p>
    </div>
  )
}

const ColorPalette = () => {
  const colors = [
    { name: "Primary", variable: "--color-primary" },
    { name: "Secondary", variable: "--color-secondary" },
    { name: "Tertiary", variable: "--color-tertiary" },
    { name: "Success", variable: "--color-success" },
    { name: "Warning", variable: "--color-warning" },
    { name: "Error", variable: "--color-error" },
    { name: "Info", variable: "--color-info" },
    { name: "Surface", variable: "--color-surface" },
    { name: "Background", variable: "--color-background" },
  ]

  return (
    <div className="flex flex-wrap justify-start gap-4">
      {colors.map((color) => (
        <ColorBox key={color.name} {...color} />
      ))}
    </div>
  )
}

export default ColorPalette
