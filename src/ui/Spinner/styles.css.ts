import { style, keyframes, styleVariants } from '@vanilla-extract/css';

import { vars } from '@lib/theme';

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
});

export const wrapper = style({
  display: 'inline-block',
  border: `4px solid ${vars.color.neutral.lightGray}`,
  borderTop: `4px solid ${vars.color.neutral.black}`,
  borderRadius: '50%',
  animation: `${spin} 1s linear infinite`
});

export const sizes = styleVariants({
  sm: {
    width: '16px',
    height: '16px'
  },
  md: {
    width: '20px',
    height: '20px'
  },
  lg: {
    width: '24px',
    height: '24px'
  }
});
