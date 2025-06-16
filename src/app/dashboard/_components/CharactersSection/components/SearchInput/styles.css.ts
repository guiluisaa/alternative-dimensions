import { style } from '@vanilla-extract/css';

export const wrapper = style({
  minWidth: '400px',
  position: 'relative',
  display: 'flex',
  alignItems: 'center'
});

export const input = style({
  flex: 1,
  paddingRight: '2.5rem'
});

export const closeButton = style({
  position: 'absolute',
  right: '0.75rem',
  top: '0.75rem'
});

export const spinner = style({
  position: 'absolute',
  right: '0.75rem',
  top: '0.75rem'
});
