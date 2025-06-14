const neutral = {
  white: '#FFF',
  black: '#121212',
  deepBlack: '#000',

  gray: '#969696',
  darkGray: '#586069',
  lightGray: '#dde0e4',
  deepGray: '#414141'
};

const palette = {
  red: '#FF5B68',
  green: '#2AD178',
  blue: '#406ae0',
  yellow: '#FABD59'
};

const color = {
  neutral,
  palette,

  typography: {
    primary: neutral.black,
    secondary: neutral.darkGray
  }
};

export type Color = typeof color;
export default color;
