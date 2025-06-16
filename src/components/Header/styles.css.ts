import { style } from '@vanilla-extract/css';

import { vars } from '@lib/theme';

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px 24px',
  backgroundColor: vars.color.neutral.black,
  borderBottom: `1px solid ${vars.color.neutral.lightGray}`
});
