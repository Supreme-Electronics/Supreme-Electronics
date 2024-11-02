import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface DataItem {
  ageGroup: string;
  values: { count: number; percentage: string; color: string; label: string }[];
}

interface AgeGroupChartProps {
  data: DataItem[];
  xAxisDomain?: [number, number];
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-2 border rounded shadow">
        <p>{data.ageGroup}</p>
        {data.values.map((value: any, index: number) => (
          <p key={index} style={{ color: value.color }}>
            {value.label}: {value.count} / {value.percentage}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const StackedBarChart: React.FC<AgeGroupChartProps> = ({ data, xAxisDomain = [0, 12] }) => {
  return (
    <div>
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 20, right: 30, left: 30, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" domain={xAxisDomain} />
        <YAxis dataKey="ageGroup" type="category" />
        <Tooltip content={<CustomTooltip />} cursor={{fill: '#ebe8e8'}}  />
        <Legend />
        {data[0].values.map((value, index) => (
          <Bar
            key={index}
            dataKey={`values[${index}].count`}
            fill={value.color}
            name={value.label}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default StackedBarChart;
