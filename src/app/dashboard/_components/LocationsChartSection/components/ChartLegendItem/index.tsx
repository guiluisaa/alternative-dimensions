import { COLORS } from '../..';

type ChartLegendItemProps = {
  index: number;
  name: string;
  value: number;
};

export function ChartLegendItem({ index, name, value }: ChartLegendItemProps) {
  const color = COLORS[index % COLORS.length];
  return (
    <div className="flex items-center gap-1" key={name}>
      <div
        className="h-3 w-3 rounded-[2px]"
        style={{ backgroundColor: color }}
      />
      <span className="text-xs">
        {name} ({value})
      </span>
    </div>
  );
}
