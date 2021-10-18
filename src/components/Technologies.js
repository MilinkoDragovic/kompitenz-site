import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from "gatsby-plugin-image";

const Technologies = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile(
            filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "technologies"}}
            sort: {fields: base, order: ASC}
        )   {
                edges {
                    node {
                        id
                        base
                        childImageSharp {
                            gatsbyImageData(
                                width: 100
                                transformOptions: {grayscale: true}
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                }
            }
        }
    `);

    return (
        <TechsWrapper>
            <TechsLogos>
                <ul>
                    {data.allFile.edges.map((item, index) => (
                        <li key={index}>
                            <Images alt={item.node.base} image={item.node.childImageSharp.gatsbyImageData} />
                        </li>
                    ))}
                </ul>
            </TechsLogos>
        </TechsWrapper>
    )
}

export default Technologies

const TechsWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 2.5rem calc((100vw - 1300px) / 2);
    background: #c1c4ce;
    box-shadow: 0 15px 30px rgb(0 0 0 / 10%), 0 8px 30px rgb(0 0 0 / 10%);
    margin-bottom: 60px;
`;

const TechsLogos = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    ul {
        width: 100%;
        display: flex;
        margin: 0;
        padding: 0;
        align-items: center;
        justify-content: center;

        li {
            flex: 1;
            margin: 0;
            margin-right: 70px;
            padding: 0;
            list-style: none;
            opacity: .7;
            text-align: center;

            @media screen and (max-width: 1199px) {
                margin-right: 40px;
            }

            @media screen and (max-width: 991px) {
                margin-right: 20px;
            }

            @media screen and (max-width: 991px) {
                flex-basis: 33.3333%;
                padding: 10px;
                margin: 0;
                flex-direction: column;
            }
        }
    }
`;

const Images = styled(GatsbyImage)`
    max-width: 40px;
`;