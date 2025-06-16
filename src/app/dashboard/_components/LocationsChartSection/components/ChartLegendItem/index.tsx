import { COLORS } from '../..';

import * as styles from './styles.css';

type ChartLegendItemProps = {
  index: number;
  name: string;
  value: number;
};

export function ChartLegendItem({ index, name, value }: ChartLegendItemProps) {
  return (
    <div className={styles.wrapper} key={name}>
      <div
        className={styles.color}
        style={{ backgroundColor: COLORS[index % COLORS.length] }}
      />
      <span className={styles.label}>
        {name} ({value})
      </span>
    </div>
  );
}
