import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Footer = () => {
    return (
        <FooterContainer>

            <FooterLinksWrapper>
                <FooterDesc>
                    <h1>Explorix</h1>
                    <p>We are here for you, so anything you need please let as know. Greetings all of you.</p>
                </FooterDesc>
                <FooterLinkItems>
                    <FooterLinkTitle>
                        Contact Us
                    </FooterLinkTitle>
                    <FooterLink to="/about">Contact</FooterLink>
                    <FooterLink to="/">Supports</FooterLink>
                    <FooterLink to="/">Services</FooterLink>
                    <FooterLink to="/">Our Clients</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>
                        Projects
                    </FooterLinkTitle>
                    <FooterLink to="/">Mobile Application on Flutter</FooterLink>
                    <FooterLink to="/">Web application using Angular</FooterLink>
                    <FooterLink to="/">Web Aplication Vue.js 3</FooterLink>
                    <FooterLink to="/">Gastby, React, Graphql app</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>
                        Social Media
                    </FooterLinkTitle>
                    <FooterLink to="/">Instagram</FooterLink>
                    <FooterLink to="/">Facebook</FooterLink>
                    <FooterLink to="/">Twitter</FooterLink>
                    <FooterLink to="/">Youtube</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>

        </FooterContainer>
    )
}

export default Footer


const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1300px) / 2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #000;
    background: #fafafb;
`;

const FooterDesc = styled.div`
    padding: 0 2rem;
    
    h1 {
        margin-bottom: 3rem;
        color: #f26a2e;
    }

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`;

const FooterLinksWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 820px) {
        grid-template-columns: 1fr;
    }
`;

const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`;

const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: .5rem;
    font-size: 14px;
    color: #3d3d4e;

    &:hover {
        color: #f26a2e;
        transition: .3s ease-out;
    }
`;

const FooterLinkTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 16px;
`;