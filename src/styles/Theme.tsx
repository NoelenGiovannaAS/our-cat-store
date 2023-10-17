import { ThemeProvider } from 'styled-components';
import { FC, ReactNode } from 'react';
import { GlobalStyle } from './globalStyles';

interface Props {
  children: ReactNode;
}

export const theme = {
  colors: {
    primary: '#EA9085',
    secondary: '#D45D79',
    tertiary: '#6E5773',
  },
  fonts: {
    primary: 'Arial, sans-serif',
    secondary: 'Verdana, sans-serif',
  },
};

const Theme: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
