import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0px 24px'
});

export const titleWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '32px'
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '48px',
  gap: '20px',

  '@media': {
    'screen and (min-width: 992px)': {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center'
    }
  }
});
