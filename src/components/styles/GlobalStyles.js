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
        gray: '#dddddd',
        dark_pink: '#7a4a75'
      },
  }

export const GlobalStyle = createGlobalStyle`
    ${reset}

    *, *:before, *:after {
        box-sizing: border-box;
    }

    html, body {
        font-family: "Open Sans";
        font-size: ${({ theme }) => theme.fontSize.base};
        color: ${({ theme }) => theme.colors.text};
        scroll-behavior: smooth;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }

    .container {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        max-width: 1240px;

        @media (min-width: 576px){
            max-width: 540px;
        }

        @media (min-width: 768px) {
            max-width: 720px;
        }

        @media (min-width: 992px) {
            max-width: 960px;
        }

        @media (min-width: 1200px){
            max-width: 1140px;
        }
    }

    .row {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }

    .col-12 {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }

    .section-title {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        margin-bottom: 50px;

        span {
            display: block;
            font-size: 18px;
            font-weight: 800;
            margin-bottom: 15px;
            color: ${({ theme }) => theme.colors.dark_pink}
        }

        h2 {
            display: block;
            font-weight: bold;
            font-family: "Poppins";
            margin-bottom: 1.5rem;
            font-size: 2.5rem;
            color: ${({ theme }) => theme.colors.text};

            strong {
                color: #e0e0e0;
            }
        }

        h6 {
            font-size: 1rem;
            color: #999999;
            line-height: 1.6;
            margin-bottom: 0;
        }
    }
`;