"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { FilterInput } from "@/components/atoms/FilterInput";
import { ChartSwitcher } from "@/components/modules/ChartSwitcher";

// Dynamically import named export
const SalesChart = dynamic(() =>
  import("@/components/organisms/SalesChart").then((mod) => mod.SalesChart),
  { ssr: false }
);

export default function DashboardTemplate() {
  const [year, setYear] = useState<2022 | 2023 | 2024>(2024);
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");
  const [threshold, setThreshold] = useState(0);

  return (
    <div className="min-h-screen p-6 sm:p-10 bg-black text-gray-200">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">📊 Welcome to Sales Dashboard</h1>
            <p className="text-sm text-gray-200">
              Monitor your sales data with filters, thresholds, and visual charts.
            </p>
          </div>
        </header>

        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          {/* Year */}
          <div>
            <label className="block mb-1 font-medium text-sm">Select Year</label>
            <select
              className="w-full border rounded p-2 bg-black"
              value={year}
              onChange={(e) =>
                setYear(Number(e.target.value) as 2022 | 2023 | 2024)
              }
            >
              <option value={2022}>2022</option>
              <option value={2023}>2023</option>
              <option value={2024}>2024</option>
            </select>
          </div>

          {/* Threshold */}
          <div>
            <label className="block mb-1 font-medium text-sm">
              Sales Threshold (≥)
            </label>
            <FilterInput threshold={threshold} onChange={setThreshold} />
            <p className="text-xs mt-1 text-gray-200">
              Filters months with sales below this value.
            </p>
          </div>

          {/* Chart Type */}
          <div>
            <label className="block mb-1 font-medium text-sm">Chart Type</label>
            <ChartSwitcher
              selected={chartType}
              onChange={(type) => setChartType(type as "bar" | "line" | "pie")}
            />
          </div>

          <div></div>
        </div>

        {/* Chart */}
        <div className="bg-black rounded shadow p-6">
          <SalesChart
            year={year}
            chartType={chartType}
            threshold={threshold}
          />
        </div>
      </div>
    </div>
  );
}
