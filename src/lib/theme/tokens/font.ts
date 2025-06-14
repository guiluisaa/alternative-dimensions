import color from './color';

const font = {
  family: "'Nunito Sans', sans-serif",
  weight: { regular: 400, bold: 600 },
  color: {
    primary: color.typography.primary,
    secondary: color.typography.secondary
  }
};

export type Font = typeof font;
export default font;
