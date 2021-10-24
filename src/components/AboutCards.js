import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import React from 'react';
import styled from 'styled-components';

const AboutCardsWidget = () => {
    const data = useStaticQuery(graphql`
    {
        allAboutWidgetJson {
    edges {
      node {
        title
        description
        image {
          childImageSharp {
            gatsbyImageData(
              webpOptions: {}
              pngOptions: {quality: 10, compressionSpeed: 10}
              height: 100
            )
          }
        }
      }
    }
  }
    }
  `);
    
    return (
        <HomeFeatureWidgetWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <span>01</span>
                            <h2><strong>partner</strong> Auszeichnen</h2>
                            <h6>
                                5 gründe die kompitenz als partner auszeichnen
                            </h6>
                            <h6>
                                Entwicklung basierend auf neusten technologien und frameworks
                            </h6>
                        </div>
                    </div>

                    <div className="col-12">
                        {data.allAboutWidgetJson.edges.map((item, index) => (
                            <HomeFeatureWidgetBox key={index}>
                                <HomeFeatureWidgetBoxFlip>
                                    <HomeFeatureWidgetBoxFlipFront>
                                        <BoxFlipInner>
                                            <span>0{index}</span>
                                            <h4>{item.node.title}</h4>
                                            <BoxFlipIcon>
                                                <BoxFlipIconImage image={item.node.image.childImageSharp.gatsbyImageData} alt={item.node.title} />
                                            </BoxFlipIcon>
                                        </BoxFlipInner>
                                    </HomeFeatureWidgetBoxFlipFront>

                                    <HomeFeatureWidgetBoxFlipBack>
                                        <BoxFlipInner>
                                            <h4>{item.node.title}</h4>
                                            <p>{item.node.description}</p>
                                        </BoxFlipInner>
                                    </HomeFeatureWidgetBoxFlipBack>

                                </HomeFeatureWidgetBoxFlip>   
                            </HomeFeatureWidgetBox>
                        ))}
                    </div>
                </div> 
            </div>
        </HomeFeatureWidgetWrapper>
    )
}

export default AboutCardsWidget

const HomeFeatureWidgetWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 120px 0;
    text-align: center;

    .col-12 {
        display: flex;
    }

`;

const HomeFeatureWidgetBox = styled.div`
    flex: 1;
    margin-right: 1rem;

    &:last-of-type {
        margin-right: 0;
    }
`;


const BoxFlipInner = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 30px;
    outline: transparent solid 1px;
    -webkit-perspective: inherit;
    perspective: inherit;
    z-index: 2;
    transform: translateY(-50%) translateZ(60px) scale(.88);
    -webkit-transform: translateY(-50%) translateZ(60px) scale(.88);
    -ms-transform: translateY(-50%) translateZ(60px) scale(.88);
    top: 50%;

    span {
        font-weight: 800;
        color: #9aa0ae;
        margin-bottom: 15px;
        margin-top: 20px;
    }

    h4 {
        display: block;
        font-weight: 800;
        margin-bottom: 20px;
        color: #405089;
        font-size: 1rem;
        line-height: 1.2;
    }
`;

const HomeFeatureWidgetBoxFlipFront = styled.div`
    width: 100%;
    height: 350px;
    float: left;
    background: #fff;
    border: 1px solid #eaebee;

    &:after {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: ' ';
        display: block;
        opacity: .6;
        background-color: inherit;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    ${BoxFlipInner} {
        justify-content: space-between;
        padding: 0 .2rem;

        h4 {
            color: ${({ theme }) => theme.colors.text};
            line-height: 1.4;
            margin-bottom: 50px;
            font-weight: 600;
        }
    }
`;

const HomeFeatureWidgetBoxFlipBack = styled.div`
    width: 100%;
    height: 250px;
    float: left;
    box-shadow: 0 0 50px rgb(0 0 0 / 10%);
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;

    ${BoxFlipInner} {
        transform: translateY(-50%) translateZ(60px) scale(.88);
        -webkit-transform: translateY(-50%) translateZ(60px) scale(.88);
        -ms-transform: translateY(-50%) translateZ(60px) scale(.88);
        top: 50%;
        padding: 0 15px;

        h4 {
            color: ${({ theme }) => theme.colors.white};
        }

        p {
            font-size: .8rem;
            line-height: 1.6;
            color: ${({ theme }) => theme.colors.white};
        }
    }
`;

const HomeFeatureWidgetBoxFlip = styled.div`
    width: 100%;
    height: 350px;
    float: left;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    perspective: 1000px;
    -webkit-perspective: 1000px;

    ${HomeFeatureWidgetBoxFlipFront}, ${HomeFeatureWidgetBoxFlipBack} {
        color: #fff;
        text-align: center;
        background-size: cover;
        background-position: center;
        transition: -webkit-transform .75s cubic-bezier(.45,.2,.2,1);
        transition: transform .75s cubic-bezier(.45,.2,.2,1);
        transition: transform .75s cubic-bezier(.45,.2,.2,1),-webkit-transform .75s cubic-bezier(.45,.2,.2,1);
        -webkit-transition: transform .75s cubic-bezier(.45,.2,.2,1);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-perspective: inherit;
        perspective: inherit;
    }

    ${HomeFeatureWidgetBoxFlipBack} {
        -ms-transform: rotateY(0);
        -webkit-transform: rotateY(0);
        transform: rotateY(0);
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
    }

    ${HomeFeatureWidgetBoxFlipBack} {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${({ theme }) => theme.colors.primary};
        -ms-transform: rotateY(180deg);
        -webkit-transform: rotateY(180deg);
        transform: rotateY(180deg);
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
    }

    &:hover {
        ${HomeFeatureWidgetBoxFlipFront}, ${HomeFeatureWidgetBoxFlipBack} {
            transition: -webkit-transform .75s cubic-bezier(.45,.2,.2,1);
            transition: transform .75s cubic-bezier(.45,.2,.2,1);
            transition: transform .75s cubic-bezier(.45,.2,.2,1),-webkit-transform .75s cubic-bezier(.45,.2,.2,1);
            -webkit-transition: transform .75s cubic-bezier(.45,.2,.2,1);
        }

        ${HomeFeatureWidgetBoxFlipFront} {
            -ms-transform: rotateY(-180deg);
            -webkit-transform: rotateY(-180deg);
            transform: rotateY(-180deg);
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
        }

        ${HomeFeatureWidgetBoxFlipBack} {
            -ms-transform: rotateY(0);
            -webkit-transform: rotateY(0);
            transform: rotateY(0);
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
        }
    }
`;

const BoxFlipIcon = styled.div`
    font-size: 2rem;
    color: black;
    margin: 0 0 1rem;
`;

const BoxFlipIconImage = styled(GatsbyImage)`
    height: 100px;
    max-width: 100%;
`;