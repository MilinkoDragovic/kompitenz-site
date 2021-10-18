import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import { Button } from "./Button";
import { ImLocation } from "react-icons/im";

const HomeServiceSection = ({heading}) => {
    const data = useStaticQuery(graphql`
        query ServicesQuery {
            allServicesJson {
                edges {
                    node {
                        alt
                        button
                        name
                        img {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 800
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                    }
                }
            }
        }
    `);

    function getServices(data) {
        const servicesArray = [];
        data.allServicesJson.edges.forEach((item, index) => {
            servicesArray.push(
                <ServiceCard key={index}>
                    <ServiceImg alt={item.node.alt} image={item.node.img.childImageSharp.gatsbyImageData} />
                    <ServiceInfo>
                        <TextWrap>
                            <ImLocation />
                            <ServiceTitle>{item.node.name}</ServiceTitle>
                        </TextWrap>
                        <Button primary="true" round="true" to="/services"
                        css={`position: absolute; top: 420px; font-size: 14px`}>
                            {item.node.button}
                        </Button>
                    </ServiceInfo>
                </ServiceCard>
            )
        });

        return servicesArray;
    }

    return (
        <ServicesContainer>
            <ServicesHeading>
                {heading}
            </ServicesHeading>
            <ServiceWrapper>
                {getServices(data)}
            </ServiceWrapper>
        </ServicesContainer>
    )
}

export default HomeServiceSection

const ServicesContainer = styled.div`
    min-height: 10vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    color: #fff;
`;

const ServicesHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
`;

const ServiceWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 2rem;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 868px) {
        grid-template-columns: 1fr;
    }
`;

const ServiceCard = styled.div`
    line-height: 2;
    width: 100%;
    height: 500px;
    position: relative;
    border-radius: 10px;
    transition: .2s ease;
`;

const ServiceImg = styled(GatsbyImage)`
    height: 100%;
    max-width: 100%;
    position: absolute;
    border-radius: 10px;
    filter: brightness(70%);
    transition: .4s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
        filter: brightness(100%);
    }
`;

const ServiceInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem;

    @media screen and (max-width: 280px) {
        padding: 0 1rem;
    }
`;

const TextWrap = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 375px;
`;

const ServiceTitle = styled.div`
    font-weight: 400;
    font-size: 1rem;
    margin-left: .5rem;
`;
