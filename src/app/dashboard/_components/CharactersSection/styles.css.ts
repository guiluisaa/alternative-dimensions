import { style } from '@vanilla-extract/css';

import { vars } from '@lib/theme';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '32px',

  width: '100%'
});

export const titleWrapper = style({
  display: 'flex',
  justifyContent: 'center'
});

export const title = style({
  fontSize: '24px',
  fontWeight: '700',
  color: vars.color.neutral.black,
  margin: 0
});

export const searchWrapper = style({
  display: 'flex',
  justifyContent: 'center'
});

export const charactersTableWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
  flex: 1
});
