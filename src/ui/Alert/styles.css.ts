import { style } from '@vanilla-extract/css';

import { vars } from '@lib/theme';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '8px',
  padding: '16px',
  borderRadius: '8px',
  border: `1px solid ${vars.color.palette.red}`
});

export const title = style({
  fontSize: '20px',
  fontWeight: '700',
  color: vars.color.palette.red,
  margin: 0
});

export const description = style({
  fontSize: '14px',
  fontWeight: '400',
  color: vars.color.palette.red,
  margin: 0
});
