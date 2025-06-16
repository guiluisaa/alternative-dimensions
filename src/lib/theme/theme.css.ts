import { createTheme } from '@vanilla-extract/css';

// Definindo as variáveis do tema
export const [themeClass, vars] = createTheme({
  color: {
    neutral: {
      white: '#FFF',
      black: '#121212',
      deepBlack: '#000',
      gray: '#969696',
      darkGray: '#586069',
      lightGray: '#dde0e4',
      deepGray: '#414141'
    },
    palette: {
      red: '#FF5B68',
      green: '#2AD178',
      blue: '#406ae0',
      yellow: '#FABD59'
    },
    typography: {
      primary: '#121212',
      secondary: '#586069'
    }
  },
  font: {
    family: "'Nunito Sans', sans-serif",
    weight: {
      regular: '400',
      bold: '600'
    }
  },
  border: {
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
  },
  breakpoint: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1300px'
  }
});
