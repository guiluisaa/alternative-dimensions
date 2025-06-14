import { Border } from '@lib/theme/tokens/border';
import { Breakpoint } from '@lib/theme/tokens/breakpoint';
import { Color } from '@lib/theme/tokens/color';
import { Font } from '@lib/theme/tokens/font';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color;
    breakpoint: Breakpoint;
    font: Font;
    border: Border;
  }
}
