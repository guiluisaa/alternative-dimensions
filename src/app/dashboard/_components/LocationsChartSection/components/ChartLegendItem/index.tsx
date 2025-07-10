import { COLORS } from '../..';

type ChartLegendItemProps = {
  index: number;
  name: string;
  value: number;
};

export function ChartLegendItem({ index, name, value }: ChartLegendItemProps) {
  return (
    <div key={name} className="flex items-center justify-center gap-1">
      <div
        className="w-3 h-3 rounded-sm"
        style={{ backgroundColor: COLORS[index % COLORS.length] }}
      />
      <span className="text-xs">
        {name} ({value})
      </span>
    </div>
  );
}
