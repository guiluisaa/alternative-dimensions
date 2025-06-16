import { style } from '@vanilla-extract/css';

import { vars } from '@lib/theme';

export const wrapper = style({
  padding: '0.5rem 1.5rem',
  borderRadius: vars.border.radius.sm,
  border: `1px solid ${vars.color.neutral.lightGray}`,
  fontSize: '1rem',
  fontFamily: vars.font.family,
  outline: 'none',

  ':focus': {
    borderColor: vars.color.neutral.black
  }
});
