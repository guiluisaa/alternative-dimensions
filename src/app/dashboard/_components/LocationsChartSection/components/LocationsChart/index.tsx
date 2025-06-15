import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

import { COLORS } from '../..';

type LocationsChartProps = {
  chartData: { name: string; value: number }[];
};

export function LocationsChart({ chartData }: LocationsChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => {
            if (percent < 0.05) return null;

            return `${name}: ${(percent * 100).toFixed(1)}%`;
          }}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
