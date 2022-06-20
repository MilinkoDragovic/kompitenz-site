import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'

export const theme = {
    fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '0.925rem',
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
        dark_pink: '#7a4a75',
        paragraph: '#9aa0ae'
      },
  }

export const GlobalStyle = createGlobalStyle`
    ${reset}

    *, *:before, *:after {
        box-sizing: border-box;
        outline: none !important;
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

    .small, small {
        font-size: 80%;
        font-weight: 400;
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

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        font-size: 18px;
        background: #fff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    img {
        vertical-align: middle;
        border-style: none;
        max-width: 100%;
    }

    dl, ol, ul {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    p {
        line-height: 1.5;
        color:  ${({ theme }) => theme.colors.paragraph};
    }

    .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
        margin-bottom: .5rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.2;
        color: inherit;
    }

    .h3, h3 {
        font-size: 1.75rem;
    }

    .row {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }

    .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
    }

    .col-md-6 {
        @media (min-width: 768px) {
            flex: 0 0 50%;
            max-width: 50%;
        }
    }

    .col-lg-2 {
        @media (min-width: 992px) {
            flex: 0 0 16.666667%;
            max-width: 16.666667%;
        }
    }
    

    .col-lg-4 {
        @media (min-width: 992px) {
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
        }
    }

    .col-lg-5 {
        @media (min-width: 992px) {
            flex: 0 0 41.666667%;
            max-width: 41.666667%;
        }
    }

    .col-lg-6 {
        @media (min-width: 992px) {
            flex: 0 0 50%;
            max-width: 50%;
        }
    }

    .col-lg-7 {
        @media (min-width: 992px) {
            flex: 0 0 58.333333%;
            max-width: 58.333333%;
        }
    }

    .col-lg-8 {
        @media (min-width: 992px) {
            flex: 0 0 66.666667%;
            max-width: 66.666667%;
        }
    }

    .col-md-12 {
        @media (min-width: 768px) {
            flex: 0 0 100%;
            max-width: 100%;
        }
    }

    .col-md-4 {
        @media (min-width: 768px) {
            -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
        }
    }

    .col-12 {
        flex: 0 0 100%;
        max-width: 100%;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    a {
        color: ${({ theme }) => theme.colors.primary};
        transition: 0.25s ease-in-out;
        text-decoration: none;
        background-color: transparent;

        &:hover {
            text-decoration: underline;
            color: ${({ theme }) => theme.colors.secondary}
        }
    }

    label {
        margin-bottom: .8rem;
        font-family: "Poppins";
        display: block;
        font-weight: 600;
    }

    button, input, optgroup, select, textarea {
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        outline: none;
    }

    button, input {
        overflow: visible;
    }

    textarea {
        padding: 1rem;
        width: 100%;
    }

    input[type=text] {
        height: 54px;
        border: 1px solid #eaebee;
        background: ${({ theme }) => theme.colors.white};
        padding: 0 20px;
    }

    textarea {
        border: 1px solid #eaebee;
    }

    .breadcrumb {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding: 0.75rem 1rem;
        margin-bottom: 1rem;
        list-style: none;
        background-color: #e9ecef;
        border-radius: 0.25rem;
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

    .mt-1 {
        margin-top: 1rem;
    }

    .mt-2 {
        margin-top: 2rem;
    }

    .mb-1 {
        margin-bottom: 1rem;
    }
`;