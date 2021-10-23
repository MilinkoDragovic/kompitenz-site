import styled from "styled-components";
import { Link } from "gatsby";

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? ({ theme }) => theme.colors.primary : 'transparent')};
    border: 2px solid ${({ primary }) => (primary ? ({ theme }) => theme.colors.primary : ({ theme }) => theme.colors.white )};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '1.2rem 2.6rem' : '10px 32px')};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ big }) => (big ? '18px' : '16px')};
    outline: none;
    min-width: 150px;
    cursor: pointer;
    text-decoration: none;
    transition: .3s !important;
    border-radius: ${({ round }) => (round ? '50px' : 'none')};

    &:hover {
        color: ${({ primary }) => (primary ? ({ theme }) => theme.colors.white : ({ theme }) => theme.colors.primary)};
        background: ${({ primary }) => (primary ? ({ theme }) => theme.colors.secondary : 'transparent')};
        border: 2px solid ${({ primary }) => (primary ? ({ theme }) => theme.colors.primary : ({ theme }) => theme.colors.primary )};
        transform: translateY(-2px);
    }
`;