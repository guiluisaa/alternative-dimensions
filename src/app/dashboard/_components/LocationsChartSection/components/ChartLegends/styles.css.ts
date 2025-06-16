import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});

export const list = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  justifyContent: 'center',
  alignItems: 'center'
});

export const listItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});
