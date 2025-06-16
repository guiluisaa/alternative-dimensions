import { style } from '@vanilla-extract/css';

import { vars } from '@lib/theme';

export const tableCellCommon = style({
  padding: '0.5rem 1.5rem',
  border: `1px solid ${vars.color.neutral.lightGray}`,
  textAlign: 'left'
});
