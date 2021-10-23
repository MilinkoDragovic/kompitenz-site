import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import { BsArrowRightCircle } from "react-icons/bs";

const DevelopmentHomeWidget = ({heading}) => {
    const data = useStaticQuery(graphql`
        query ServicesQuery {
            allServicesJson {
                edges {
                    node {
                        alt
                        button
                        name
                        description
                        img {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 350
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
                <DevelopmentWidgetBox key={index}>
                    <DevelopmentWidgetBoxFigure>
                        <DevelopmentWidgetBoxFigureImage alt={item.node.alt} image={item.node.img.childImageSharp.gatsbyImageData} />
                    </DevelopmentWidgetBoxFigure>
                    <h4>{item.node.name}</h4>
                    <p>{item.node.description}</p>
                    <DevelopmentWidgetLink to="/services">
                        <BsArrowRightCircle />
                    </DevelopmentWidgetLink>
                </DevelopmentWidgetBox>
            )
        });

        return servicesArray;
    }

    return (
        <DevelopmentWidgetContainer>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <span>01</span>
                            <h2><strong>unsere</strong> Entwicklung</h2>
                            <h6>
                                Programmierung an ihren anforderungen ausgerichtet
                            </h6>
                        </div>
                    </div>
                    <div className="col-12">
                        {getServices(data)}
                    </div>
                </div>
            </div>
        </DevelopmentWidgetContainer>
    )
}

export default DevelopmentHomeWidget

const DevelopmentWidgetContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 120px 0;

    .col-12 {
        display: flex;
    }
`;

const DevelopmentWidgetBox = styled.div`
    flex: 1;
    margin-right: 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    min-height: 400px;

    h4 {
        font-weight: 600;
        font-family: "Poppins";
        color: ${({ theme }) => theme.colors.primary};
        font-size: ${({ theme }) => theme.fontSize.xl};
        margin-bottom: 1rem;
        line-height: 1.4;
    }

    p {
        margin: 0;
    }
`;

const DevelopmentWidgetBoxFigure = styled.figure`
    width: 100%;
    float: left;
    margin-bottom: 30px;
`;

const DevelopmentWidgetBoxFigureImage = styled(GatsbyImage)`
    max-width: 100%;
`;

const DevelopmentWidgetLink = styled(Link)`
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: ${({ theme }) => theme.fontSize.xl}
`;