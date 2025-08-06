"use client"
import React from 'react';

type Props = {
  selected: string;
  onChange: (type: string) => void;
};

export const ChartSwitcher = ({ selected, onChange }: Props) => {
  return (
    <div className="flex gap-2">
      {['bar', 'line', 'pie'].map((type) => (
        <button
          key={type}
          onClick={() => onChange(type)}
          className={`px-4 py-2 rounded border ${
            selected === type ? 'bg-blue-500 text-white' : 'bg-white text-black'
          }`}
        >
          {type.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
