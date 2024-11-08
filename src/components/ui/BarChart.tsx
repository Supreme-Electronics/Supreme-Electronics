import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Line,
} from "recharts";

interface ChartData {
  name: string;
  [key: string]: number | string; // Flexible data keys for dynamic properties
}

interface ChartSeries {
  key: string; // Data key for each series
  type: "bar" | "line"; // Type of chart (bar or line)
  color: string; // Color of the series
  yAxisId: string; // Y-axis ID ('left' or 'right')
  stackId?: string; // Stack ID for bars (optional)
  name: string; // Display name for the legend
}

interface BarChartProps {
  data: ChartData[]; // Data for the chart
  series: ChartSeries[]; // Configuration for each series
  xDataKey: string;
  yAxisLeftUnit?: string; // Unit for the left Y-axis
  yAxisRightUnit?: string; // Unit for the right Y-axis    // Data key for the X-axis labels
  height?: number; // Optional height
  width?: number | string; // Optional width
  margin?: { top?: number; right?: number; bottom?: number; left?: number }; // Custom margin
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  series,
  xDataKey,
  yAxisLeftUnit = "",
  yAxisRightUnit = "",
  height = 400,
  width = "100%",
  margin = { top: 0, right: 0, bottom: 20, left: 0 },
}) => (
  <div className="relative">
    <div className="w-full flex justify-between  py-6">
      {yAxisLeftUnit && (
        <span className="text-sm  text-gray-500">
          {yAxisLeftUnit}
        </span>
      )}
      {yAxisRightUnit && (
        <span className="text-sm text-gray-500">
          {yAxisRightUnit}
        </span>
      )}
    </div>

    <ResponsiveContainer width={width} height={height}>
      <ComposedChart data={data} margin={margin}>
        <CartesianGrid stroke="#e3e1e1" />
        <XAxis dataKey={xDataKey} />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        {series.map((s) => {
          if (s.type === "bar") {
            return (
              <Bar
                key={s.key}
                dataKey={s.key}
                fill={s.color}
                yAxisId={s.yAxisId}
                stackId={s.stackId}
                name={s.name}
                barSize={40}
              />
            );
          }
          if (s.type === "line") {
            return (
              <Line
                key={s.key}
                type="monotone"
                dataKey={s.key}
                stroke={s.color}
                yAxisId={s.yAxisId}
                name={s.name}
              />
            );
          }
          return null;
        })}
      </ComposedChart>
    </ResponsiveContainer>
  </div>
);

export default BarChart;
