import React, { useEffect, useState, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import styled, { keyframes, css } from 'styled-components/macro';
import { Button } from './Button';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';


const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const slideIn = keyframes`
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
`;

const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;

const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;

const HeroSliderWrapper = styled.div`
    transition: all 0.3s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: .4;
        background: linear-gradient(
            0def, 
            rgba(0, 0, 0, .2) 0%, 
            rgba(0, 0, 0, .2) 50%,
            rgba(0, 0, 0, .6) 100%
        );
    }
`;

const HeroImage = styled(GatsbyImage)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    animation: ${fadeIn} 1.2s;
`;

const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: #fff;

    small {
        display: block;
        font-size: ${({ theme }) => theme.fontSize.lg};
        font-weight: 800;
        margin-bottom: 15px;
        color: ${({ theme }) => theme.colors.dark_pink};
        animation: ${fadeIn} 1s, ${slideIn} 1s;
    }

    h1 {
        font-size: clamp(2rem, 8vw, 3rem);
        font-weight: 600;
        text-transform: lowercase;
        font-family: "Poppins";
        text-shadow: 0px 0px 20px rgba(0, 0, 0, .4);
        text-align: left;
        margin-bottom: 1.6rem;
        animation: ${fadeIn} 1.2s, ${slideIn} 1.2s;
    }

    p {
        margin-bottom: 1.6rem;
        font-size: ${({ theme }) => theme.fontSize.lg};
        animation: ${fadeIn} 1.6s, ${slideIn} 1.6s;
        letter-spacing: 1px;
    }
`;

const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 5;
`;


const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.text};
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: .3s;
    animation: ${fadeIn} 1s, ${slideIn} 1s;

    &:hover {
        background: #832e87;
        transform: scale(1.05);
    }
`;

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`;

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);
    const length = 4;
    const timeout = useRef(null);

    useEffect(
        () => {
           const nextSlide = () => {
               setCurrent(current => (current === length - 1 ? 0 : current + 1));
           };
    
           timeout.current = setTimeout(nextSlide, 5000);
    
           return function() {
                if (timeout.current) {
                   clearTimeout(timeout.current);
                }
           };
        }, [current, length]
    );

    const data = useStaticQuery(graphql`
    {
        allSliderJson {
            edges {
            node {
                title
                path
                alt
                label
                image {
                        childImageSharp {
                            gatsbyImageData(
                                width: 1920
                                transformOptions: {grayscale: true}
                                formats: [JPG]
                            )
                        }
                    }
                }
            }
            totalCount
        }
    }`);


    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    return (
        <HeroSection>
            <HeroWrapper>
                {data.allSliderJson.edges.map((item, index) => {
                   return  (
                    <HeroSlide>
                                {index === current && (
                                <HeroSliderWrapper>
                                    <HeroImage image={item.node.image.childImageSharp.gatsbyImageData} alt={item.node.alt} />
                                    <HeroContent>
                                        <small>0{index}</small>
                                        <h1>{item.node.title}</h1>
                                        <p>{item.node.label}</p>
                                        <Button
                                            big="'true'"
                                            to={item.node.path}
                                            css={`
                                                width: 180px;
                                                animation: ${fadeIn} 2s, ${slideIn} 2s;
                                            `}>
                                            Weiterlesen
                                        </Button>
                                    </HeroContent>
                                </HeroSliderWrapper>
                                )}
                        </HeroSlide>
                   )
                })}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    );
};

export default HeroSlider;