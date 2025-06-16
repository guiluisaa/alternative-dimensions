import { style, composeStyles } from '@vanilla-extract/css';

import { vars } from '@lib/theme';
import { tableCellCommon } from '@ui/TableCellCommonStyles/styles.css';

export const wrapper = composeStyles(
  tableCellCommon,
  style({
    fontWeight: vars.font.weight.bold
  })
);
