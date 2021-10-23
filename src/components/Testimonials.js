import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from "gatsby-plugin-image";
import { RiDoubleQuotesR } from 'react-icons/ri';
import { useStaticQuery, graphql } from 'gatsby';
import TestemonialBg from '../assets/images/world-map.png'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation"

import SwiperCore, {
    Navigation, Mousewheel, Keyboard
  } from 'swiper';
  
SwiperCore.use([Navigation,Mousewheel,Keyboard]);


const Testimonials = () => {
    const data = useStaticQuery(graphql`
    {
        allTestimonialsWidgetJson {
            edges {
                node {
                    name
                    description
                    short
                    image {
                        childImageSharp {
                            gatsbyImageData(
                                webpOptions: {}
                                pngOptions: {quality: 10, compressionSpeed: 10}
                                transformOptions: {grayscale: true}
                                width: 80
                            )
                        }
                    }
                }
            }
        }
    }
  `);

    return (
        <TestimonialsContainer>
            <div className="container">
                <div className="section-title">
                    <span>05</span>
                    <h2><strong>was sagen</strong>  die Völker!</h2>
                </div>

                <Swiper slidesPerView={1} navigation={true} spaceBetween={20} centeredSlides={true}
                    className="swiper-testimonials">
                        {data.allTestimonialsWidgetJson.edges.map((item, index) => (
                            <SwiperSlide>
                                <Testimonial>
                                    <TestimonialContainer>
                                        <TestimonialImage image={item.node.image.childImageSharp.gatsbyImageData} alt={item.node.name} />
                                        <TestimonialContent>
                                            <TestimonialIcon></TestimonialIcon>
                                        </TestimonialContent>
                                    </TestimonialContainer>
                                    <TestimonialBlockquote>
                                        <p>{item.node.description}</p>
                                    </TestimonialBlockquote>
                                    <TestimonialSmallText>{item.node.short}</TestimonialSmallText>
                                </Testimonial>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </TestimonialsContainer>
    )
}

export default Testimonials

const TestimonialsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 120px 0;
    background: url(${TestemonialBg}) center no-repeat ${({ theme }) => theme.colors.primary};
    text-align: center;
    color: #fff;
    background-size: auto 80%;

    .swiper-slide {
        background: transparent;
    }

    .swiper-button-next {
        width: 50px;
        height: 50px;
        background: ${({ theme }) => theme.colors.primary};
        padding: 10px;
        transition: all .3s ease;

        &:hover {
            background: ${({ theme }) => theme.colors.dark_pink};
        }

        &:after {
            color: ${({ theme }) => theme.colors.white};
            font-size: ${({ theme }) => theme.fontSize['3xl']};
        }
    }

    .swiper-button-prev {
        width: 50px;
        height: 50px;
        background: ${({ theme }) => theme.colors.primary};
        padding: 10px;
        transition: all .3s ease;

        &:hover {
            background: ${({ theme }) => theme.colors.dark_pink};
        }

        &:after {
            color: ${({ theme }) => theme.colors.white};
            font-size: ${({ theme }) => theme.fontSize['3xl']};
        }
    }

    .section-title {
        margin-bottom: 0;

        h2 {
            color: ${({ theme }) => theme.colors.white};
            strong {
                opacity: .65;
            }
        }

        h6 {
            color: ${({ theme }) => theme.colors.white};
            line-height: 1.6;
        }
    }
`;

const Testimonial = styled.div`
    width: 100%;
    flex: 1;
    padding: 0 12%;
`;

const TestimonialImage = styled(GatsbyImage)`
    border-radius: 10px;
    height: 100%;
`;

const TestimonialContainer = styled.figure`
    display: block;
    position: relative;
    margin-bottom: 30px;

    ${TestimonialImage} {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
`;

const TestimonialContent = styled.figcaption`
    width: 30px;
    height: 30px;
    background: ${({ theme }) => theme.colors.dark_pink};
    border-radius: 50%;
    position: absolute;
    left: 50%;
    bottom: -15px;
    margin-left: -15px;
`;

const TestimonialIcon = styled(RiDoubleQuotesR)`
    width: 15px;
    margin: 8px;
    font-size: 1rem;
`;

const TestimonialBlockquote = styled.blockquote`
    display: block;
    margin-bottom: 30px;

    p {
        font-size: ${({ theme }) => theme.fontSize.lg};
        line-height: 1.5;
        color: ${({ theme }) => theme.colors.white};
        margin: 0;
        letter-spacing: 1px;
    }
`;

const TestimonialSmallText = styled.small`
    display: block;
    margin: 10px 0;
    opacity: .7;
`;