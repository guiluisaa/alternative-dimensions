import { globalStyle } from '@vanilla-extract/css';

import { vars } from './theme.css';

globalStyle('*', {
  transition: '0.2s',
  boxSizing: 'border-box'
});

globalStyle('body', {
  backgroundColor: vars.color.neutral.white,
  color: vars.color.typography.primary,
  fontFamily: vars.font.family,
  margin: 0,
  padding: 0
});
