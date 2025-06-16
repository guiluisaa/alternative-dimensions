import { style } from '@vanilla-extract/css';

export const wrapper = style({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',
  padding: '2rem'
});

export const textWrapper = style({
  textAlign: 'center'
});
