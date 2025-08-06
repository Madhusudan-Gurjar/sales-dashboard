"use client"
import React from 'react';

type Props = {
  threshold: number;
  onChange: (value: number) => void;
};

export const FilterInput = ({ threshold, onChange }: Props) => {
  return (
    <input
      type="number"
      value={threshold}
      onChange={(e) => onChange(Number(e.target.value))}
      placeholder="Enter sales threshold"
      className="border p-2 rounded w-full"
    />
  );
};
