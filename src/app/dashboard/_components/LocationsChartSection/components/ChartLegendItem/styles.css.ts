import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5px'
});

export const color = style({
  width: '12px',
  height: '12px',
  borderRadius: '2px'
});

export const label = style({
  fontSize: '12px'
});
