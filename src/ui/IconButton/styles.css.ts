import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@lib/theme';

export const button = style({
  color: vars.color.neutral.darkGray,
  background: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'color 0.2s ease-in-out',
  cursor: 'pointer',

  ':hover': {
    color: vars.color.neutral.deepGray
  }
});

export const sizes = styleVariants({
  sm: {
    width: '16px',
    height: '16px',
    fontSize: '16px'
  },
  md: {
    width: '20px',
    height: '20px',
    fontSize: '20px'
  },
  lg: {
    width: '24px',
    height: '24px',
    fontSize: '24px'
  }
});
