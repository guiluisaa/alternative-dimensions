import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',

  '@media': {
    'screen and (min-width: 1024px)': {
      position: 'sticky',
      top: 0,
      zIndex: 100
    }
  }
});

export const chartWrapper = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '500px',
  width: '100%'
});
