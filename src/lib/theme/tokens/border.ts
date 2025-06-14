import color from './color';

const border = {
  color: {
    primary: color.neutral.black,
    secondary: color.neutral.darkGray
  },
  radius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem'
  },
  width: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem'
  }
};

export type Border = typeof border;
export default border;
