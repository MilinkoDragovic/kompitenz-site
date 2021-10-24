import React from 'react';
import styled from 'styled-components';
import { VscChevronRight } from "react-icons/vsc";
import TestimonialBg from '../assets/images/world-map.png'

const PageHeaderWidget = ({heading, subheading}) => {
   
    return (
        <PageHeaderContainer>
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <VscChevronRight />
                    </li>             
                    <li className="breadcrumb-item">
                        {heading}
                    </li>
                </ol>
                <h2>{heading}</h2>
                <p>{subheading}</p>
            </div>
        </PageHeaderContainer>
    )
}

export default PageHeaderWidget

const PageHeaderContainer = styled.section`
    width: 100%;
    display: flex;
    position: relative;
    z-index: 0;
    margin-top: 4rem;
    padding-top: 130px;
    padding-bottom: 50px;
    background: url(${TestimonialBg}) center no-repeat ${({ theme }) => theme.colors.dark_pink};

    h2 {
        font-weight: 800;
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fontSize['4xl']};
        font-family: "Poppins";
        text-transform: uppercase;
    }

    p {
        color: ${({ theme }) => theme.colors.white};
        opacity: .7;
        margin: 0;
    }

    .breadcrumb {
        display: flex;
        padding: 0;
        margin: 0 0 .5rem;
        border-radius: 0;
        background: none;

        li {
            color: ${({ theme }) => theme.colors.white};
            font-size: ${({ theme }) => theme.fontSize.sm};
            padding-left: 10px;
            font-weight: 600;

            &:first-of-type {
                padding-left: 0;
            }

            a {
                color: ${({ theme }) => theme.colors.white};
            }
        }
    }
`;



