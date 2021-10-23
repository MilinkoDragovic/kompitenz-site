import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContentWrapper>
                <div className="container">
                    <FooterContentBox>
                        
                    </FooterContentBox>
                </div>
            </FooterContentWrapper>
        </FooterContainer>
    )
}

export default Footer


const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background: ${({ theme }) => theme.colors.secondary};
    margin-top: 54px;
`;

const FooterContentWrapper = styled.div`
    width: 100%;
    max-width: 1380px;
    margin: 0 auto;
    padding: 0;
    margin-top: -54px;
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
`;