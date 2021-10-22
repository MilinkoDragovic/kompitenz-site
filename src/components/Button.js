import styled from "styled-components";
import { Link } from "gatsby";

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? ({ theme }) => theme.colors.primary : '#077BF1')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ big }) => (big ? '20px' : '16px')};
    outline: none;
    border: none;
    min-width: 150px;
    cursor: pointer;
    text-decoration: none;
    transition: .3s !important;
    border-radius: ${({ round }) => (round ? '50px' : 'none')};

    &:hover {
        background: ${({ primary }) => (primary ? ({ theme }) => theme.colors.secondary : '#F26A2E')};
        transform: translateY(-2px);
    }
`;