import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowRight } from 'react-icons/ai';

const FeatureServices = () => {
    const data = useStaticQuery(graphql`
    {
      allFeaturesJson {
        edges {
          node {
            title
            description
            link
          }
        }
      }
    }
  `);
    
    return (
        <FeatureServicesContainer>
            <FeatureServicesContentWrapper>
                <FeatureServicesContent>
                    {data.allFeaturesJson.edges.map((item, index) => (
                        <FeatureServiceContentBox key={index}>
                            <span></span>
                            <h3>{item.node.title}</h3>
                            <p>{item.node.description}</p>
                            <FeatureServicesLink to={item.node.link}>
                                <AiOutlineArrowRight />
                            </FeatureServicesLink>
                        </FeatureServiceContentBox>
                    ))}
                </FeatureServicesContent>
            </FeatureServicesContentWrapper>
        </FeatureServicesContainer>
    )
}

export default FeatureServices

const FeatureServicesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background: #c1c4ce;
    padding-top: 55px;
    position: relative;
`;

const FeatureServicesContentWrapper = styled.div`
    width: 100%;
    max-width: 1380px;
    margin: 0 auto;
    padding: 0;
    margin-top: -54px;
    background: #fff;
    box-shadow: 0 15px 30px rgb(0 0 0 / 10%), 0 8px 30px rgb(0 0 0 / 10%);
`;

const FeatureServiceContentBox = styled.div`
    flex: 1;
    padding: 10px 0;
    padding-right: 30px;
    margin-right: 30px;
    border-right: 1px solid #eaebee;

    &:last-of-type {
        padding-right: 0;
        margin-right: 0;
        border-right: none;
    }

    h3 {
        display: block;
        font-weight: 600;
        font-family: "Poppins";
        color: ${({ theme }) => theme.colors.primary};
        font-size: ${({ theme }) => theme.fontSize.lg};
        margin-bottom: 15px;
    }

    p {
        display: block;
        color: #9aa0ae;
        margin-top: 0;
        line-height: 26px;
        margin-bottom: 1rem;
    }

    span {
        width: 10px;
        height: 26px;
        display: inline-block;
        background: ${({ theme }) => theme.colors.primary};
        transform: translateY(-20px);
        position: relative;
        z-index: 100;

        &:before {
            content: "";
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 5px 5px 0 0;
            border-color: ${({ theme }) => theme.colors.primary} transparent transparent transparent;
            position: absolute;
            left: 0;
            bottom: -5px;
        }

        &:after {
            content: "";
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 5px 5px 0;
            border-color: transparent ${({ theme }) => theme.colors.primary} transparent transparent;
            position: absolute;
            right: 0;
            bottom: -5px;
        }
    }
`;

const FeatureServicesLink = styled(Link)`
    text-decoration: none;
    display: inline-block;
    margin-bottom: 20px;
`;

const FeatureServicesContent = styled.div`
    display: flex;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1240px;

    @media (min-width: 576px) {
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
`;