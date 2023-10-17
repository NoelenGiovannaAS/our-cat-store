import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html body #root{
        height: 100vh;
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.tertiary}
    }

`;
