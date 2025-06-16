import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@lib/theme';

export const button = style({
  fontWeight: vars.font.weight.bold,
  borderRadius: vars.border.radius.sm,
  cursor: 'pointer',
  border: 'none',
  transition: 'background-color 0.2s',

  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed'
  }
});

export const variants = styleVariants({
  primary: {
    color: vars.color.neutral.white,
    backgroundColor: vars.color.neutral.black,

    ':hover:not(:disabled)': {
      backgroundColor: vars.color.neutral.deepGray
    }
  },
  secondary: {
    color: vars.color.neutral.black,
    backgroundColor: vars.color.neutral.white,

    ':hover:not(:disabled)': {
      backgroundColor: vars.color.neutral.lightGray
    }
  }
});

export const sizes = styleVariants({
  sm: {
    padding: '0.25rem 1rem',
    fontSize: '0.875rem'
  },
  md: {
    padding: '0.5rem 1.5rem',
    fontSize: '1rem'
  }
});
