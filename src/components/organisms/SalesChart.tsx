"use client"
export type SalesChartProps = {
  year: 2022 | 2023 | 2024;
  chartType: "bar" | "line" | "pie";
  threshold: number;
};

import {
  BarChart, Bar,
  LineChart, Line,
  PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import React from 'react';
import { months, salesData } from '@/data/salesData';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

type Props = {
  year: 2022 | 2023 | 2024;
  chartType: string;
  threshold: number;
};

export const SalesChart = ({ year, chartType, threshold }: SalesChartProps) => {
  const data = months.map((month, index) => ({
    name: month,
    sales: salesData[year][index],
  })).filter(item => item.sales >= threshold);

  if (chartType === 'pie') {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="sales"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  if (chartType === 'line') {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};
