import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;

    }

    html body{
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.primary.contrastText};
        font-family: ${({theme}) => theme.fonts[1]};
        
    }

`;
