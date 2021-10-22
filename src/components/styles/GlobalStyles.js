import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'

export const theme = {
    fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      colors: {
        text: '#000000',
        white: '#ffffff',
        background: '#ffffff',
        primary: '#945b8e',
        secondary: '#664563',
        gray: '#dddddd'
      },
  }

export const GlobalStyle = createGlobalStyle`
    ${reset}

    *, *:before, *:after {
        box-sizing: border-box;
    }

    html, body {
        font-family: "Poppins";
        font-size: ${({ theme }) => theme.fontSize.base};
        color: ${({ theme }) => theme.colors.text};
        scroll-behavior: smooth;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }
`;