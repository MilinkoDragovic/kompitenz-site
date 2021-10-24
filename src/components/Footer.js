import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { MdOutlineShareLocation, MdOutlineMail } from 'react-icons/md';
import { HiOutlineClock } from 'react-icons/hi';
import WhiteLogo from '../assets/images/white-logo.png';
import { FaFacebookF, FaLinkedinIn, FaXing } from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContactWrapper>
                <div className="container">
                    <FooterContentBox>
                        <FooterContentBoxIcon>
                            <MdOutlineShareLocation />
                        </FooterContentBoxIcon>
                        <h3>Adressinfo</h3>
                        <p>Bachstraße 14, 69121 Heidelberg</p>
                    </FooterContentBox>

                    <FooterContentBox>
                        <FooterContentBoxIcon>
                            <HiOutlineClock />
                        </FooterContentBoxIcon>
                        <h3>Arbeitszeit</h3>
                        <p>Montag bis Freitag 08:00 bis 16:30</p>
                    </FooterContentBox>

                    <FooterContentBox>
                        <FooterContentBoxIcon>
                            <MdOutlineMail />
                        </FooterContentBoxIcon>
                        <h3>Kontaktiere uns</h3>
                        <p>unter <span>info@kompitenz.de</span></p>
                    </FooterContentBox>
                </div>
            </FooterContactWrapper>
            <FooterContentWrapper>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <FooterContentLogo src={WhiteLogo} />
                            <p>
                                Wir sind ein dynamisches und innovatives Unternehmen, das sichdenrausorderungen des digitalen Wandels ollumfänglich begleitet.
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <FooterMenu>
                                <FooterMenuItem>
                                    <FooterMenuItemLink to="/">Unthernehmen</FooterMenuItemLink>
                                </FooterMenuItem>
                                <FooterMenuItem>
                                    <FooterMenuItemLink to="/">Leistungen</FooterMenuItemLink>
                                </FooterMenuItem>
                                <FooterMenuItem>
                                    <FooterMenuItemLink to="/">Wieso Kompitenz</FooterMenuItemLink>
                                </FooterMenuItem>
                                <FooterMenuItem>
                                    <FooterMenuItemLink to="/">Referenzen</FooterMenuItemLink>
                                </FooterMenuItem>
                                <FooterMenuItem>
                                    <FooterMenuItemLink to="/">Kontakt</FooterMenuItemLink>
                                </FooterMenuItem>
                            </FooterMenu>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <FooterMenu>
                                <FooterMenuItem>
                                    <FooterMenuItemLink to="/">Beratung</FooterMenuItemLink>
                                </FooterMenuItem>
                                <FooterMenuItem>
                                    <FooterMenuItemLink to="/">Design</FooterMenuItemLink>
                                </FooterMenuItem>
                                <FooterMenuItem>
                                    <FooterMenuItemLink to="/">Programmierung</FooterMenuItemLink>
                                </FooterMenuItem>
                                <FooterMenuItem>
                                    <FooterMenuItemLink to="/">Support</FooterMenuItemLink>
                                </FooterMenuItem>
                            </FooterMenu>
                        </div>
                        <div className="col-lg-4">
                            <FooterContactBox>
                                <h5>Ruf uns an</h5>
                                <h3>+49 6221 1877950</h3>
                                <p>
                                    E-Mail 
                                    <a href="/"> info@kompitenz.de</a>
                                </p>
                                <ul>
                                    <li>
                                        <a href="/">
                                            <FaFacebookF />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FaLinkedinIn />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FaXing />
                                        </a>
                                    </li>
                                </ul>
                            </FooterContactBox>
                        </div>
                    </div>
                </div>
            </FooterContentWrapper>
            <SubFooter>
                <div className="container">
                    <SubFooterCopyright>
                        © 2021 Alle Rechte vorbehalten, Kompitenz.
                    </SubFooterCopyright>
                    <SubFooterPrivacyPolicy>
                        <a href="/">Impressum</a> / <a href="/">Datenschutz</a>
                    </SubFooterPrivacyPolicy>
                </div>
            </SubFooter>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background: ${({ theme }) => theme.colors.secondary};
`;

const FooterContactWrapper = styled.div`
    width: 100%;
    max-width: 1380px;
    margin: 0 auto;
    padding: 0;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 15px 30px rgb(0 0 0 / 10%), 0 8px 30px rgb(0 0 0 / 10%);
    margin-bottom: 60px;

    .container {
        display: flex;
        flex-wrap: wrap;
    }
`;

const FooterContentBox = styled.div`
    flex: 1;
    padding: 40px 0;
    padding-right: 30px;
    margin-right: 30px;
    border-right: 1px solid #eaebee;

    &:last-of-type {
        border: none;
    }

    h3 {
        display: block;
        font-family: "Poppins";
        font-weight: 600;
        color: ${({ theme }) => theme.colors.primary};
        font-size: ${({ theme }) => theme.fontSize['2xl']};
        margin-bottom: 15px;
    }

    p {
        display: block;
        color: #9aa0ae;
        margin: 0;

        span {
            color: ${({ theme }) => theme.colors.primary}
        }
    }
`;

const FooterContentBoxIcon = styled.div`
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
    font-size: ${({ theme }) => theme.fontSize['4xl']};;
`;

const FooterContentWrapper = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 50px;

    p {
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fontSize.sm};
    }
`;

const FooterContentLogo = styled.img`
    height: 3.5em;
    margin-bottom: 15px;
`;

const FooterMenu = styled.ul`
    display: block;
    margin: 0;
`;

const FooterMenuItem = styled.li`
    width: 100%;
    float: left;
    margin: 0;
    padding: .4rem 0;
    list-style: none;
`;

const FooterMenuItemLink = styled(Link)`
    float: left;
    color: ${({ theme }) => theme.colors.white};

    &:hover {
        color: ${({ theme }) => theme.colors.white};
        opacity: .7;
    }
`;

const FooterContactBox = styled.div`
    float: right;
    color: ${({ theme }) => theme.colors.white};
    text-align: right;

    h5 {
        margin: 0;
        text-transform: uppercase;
        font-size: ${({ theme }) => theme.fontSize.lg};
    }

    h3 {
        font-weight: 600;
        margin: 0;
    }

    p {
        margin-bottom: 1rem;
        color: #9aa0ae;

        a {
            color: ${({ theme }) => theme.colors.white};
        }
    }

    ul {
        float: right;
        margin: 0;
        padding: 0;

        li {
            float: left;
            margin-left: 15px;
            padding: 0;
            list-style: none;

            a {
                float: left;
                font-size: 13px;
                color: ${({ theme }) => theme.colors.white};

                &:hover {
                    color: ${({ theme }) => theme.colors.white};
                    opacity: .65;
                }
            }
        }
    }
`;

const SubFooter = styled.div`
    width: 100%;
    display: flex;
    color: ${({ theme }) => theme.colors.white};
    padding: 30px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const SubFooterCopyright = styled.div`
    font-size: ${({ theme }) => theme.fontSize.xs};
    float: left;
`;
const SubFooterPrivacyPolicy = styled.div`
    font-size: ${({ theme }) => theme.fontSize.xs};
    float: right;

    a {
        font-weight: 600;
        color: ${({ theme }) => theme.colors.white};

        &:hover {
            color: ${({ theme }) => theme.colors.white};
            opacity: .65;
        }
    }
`;