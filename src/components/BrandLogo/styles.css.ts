import { style } from '@vanilla-extract/css';

import { vars } from '@lib/theme';

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '8px'
});

export const title = style({
  fontSize: '16px',
  fontWeight: vars.font.weight.bold,
  color: vars.color.neutral.white,
  margin: 0
});
