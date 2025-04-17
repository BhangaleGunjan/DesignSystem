import React from 'react';

const colors = [
  'primary',
  'secondary',
  'tertiary',
  'success',
  'info',
  'warning',
  'error',
  'surface',
  'background',
];

export const ColorSwatches = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {colors.map((color) => (
        <div
          key={color}
          className={`p-6 rounded-lg text-white bg-${color}`}
        >
          {color}
        </div>
      ))}
    </div>
  );
};
