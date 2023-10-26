const defaultTheme = {
  fonts: ['Arial, sans-serif', 'Verdana, sans-serif'],
  fontSize: {
    xsmall: '0.5rem',
    small: '1.0rem',
    normal: '1.5rem',
    large: '2rem',
    xlarge: '2.5rem',
  },
};

export const LightTheme = {
  ...defaultTheme,
  colors: {
    background: '#EA9085',
    primary: {
      main: '#E9E2D0',
      contrastText: '#6E5773',
    },
    secondary: {
      main: '#D45D79',
      contrastText: '#E9E2D0',
    },
  },
};

export const DarkTheme = {
  ...defaultTheme,
  colors: {
    background: '#342f52',
    primary: {
      main: '#6d6c6b',
      contrastText: '#E9E2D0',
    },
    secondary: {
      main: '#97354c',
      contrastText: '#E9E2D0',
    },
  },
};
