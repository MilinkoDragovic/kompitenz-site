import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import styled from 'styled-components';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation"

import SwiperCore, {
    Navigation, Mousewheel, Keyboard, Autoplay
  } from 'swiper';
  
SwiperCore.use([Navigation,Mousewheel,Keyboard, Autoplay]);

const HomeProjectsWidget = () => {
    const data = useStaticQuery(graphql`
    {
        allProjectsWidgetJson {
            edges {
                node {
                    title
                    description
                    image {
                        childImageSharp {
                            gatsbyImageData(
                                webpOptions: {}
                                pngOptions: {quality: 10, compressionSpeed: 10}
                                height: 600
                            )
                        }
                    }
                }
            }
        }
    }
  `);

    return (
        <HomeProjectsWidgetContainer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="section-title">
                            <span>04</span>
                            <h2>Referenzen</h2>
                            <h6>
                                Wir vermeiden die Ausarbeitung umfangreicher und teurer Lastenhefte (Zeit- und Geldersparnis). Mit der Anwendung von agilen Methodiken und Ihren Anforderungen entsteht in vorgeplanten Zeitschienen („Spr ints“ gemäß SCRUM) Ihre Softwarelösung. So wird sichergestellt das Sie uns regelmäßig Feedback geben und wir Funktion für Funktion implementieren und dasProjektziel erreichen.
                            </h6>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <Swiper autoplay={{
                            "delay": 2500,
                            "disableOnInteraction": false
                            }} slidesPerView={3} navigation={true} spaceBetween={20} centeredSlides={true}
                            className="mySwiper">
                                {data.allProjectsWidgetJson.edges.map((item, index) => (
                                     <SwiperSlide>
                                         <ProjectItem>
                                            <ProjectImage image={item.node.image.childImageSharp.gatsbyImageData} alt={item.node.title} />
                                            <ProjectItemContainer>
                                                <h4>{item.node.title}</h4>
                                                <small>{item.node.description}</small>
                                            </ProjectItemContainer>
                                        </ProjectItem>
                                     </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </HomeProjectsWidgetContainer>
    )
}

export default HomeProjectsWidget


const HomeProjectsWidgetContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 120px 0;
    background: #eaebee;
    overflow: hidden;

    .section-title {
        position: relative;
        z-index: 3;
    }

    .swiper-carousel {
        width: 100%;
        position: relative;
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
            font-size: ${({ theme }) => theme.fontSize.base};
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
            font-size: ${({ theme }) => theme.fontSize.base};
        }
    }
`;

const ProjectImage = styled(GatsbyImage)`
    transition: .25s ease-in-out;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ProjectItem = styled.figure`
    width: 100%;
    float: left;
    height: 400px;
    position: relative;
    margin: 0;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.primary};
    transition: .25s ease-in-out;

    &:hover {
        ${ProjectImage} {
            transform: scale(1.05);
            opacity: .7;
        }
    }
`;

const ProjectItemContainer = styled.figcaption`
    transition: 0.25s ease-in-out;
    width: 100%;
    padding: 1rem;
    position: absolute;
    left: 0;
    bottom: 0;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #131314 100%);
    background-image: -o-linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #131314 100%);
    background-image: -moz-linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #131314 100%);
    background-image: -webkit-linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #131314 100%);
    background-image: -ms-linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #131314 100%);

    h4 {
        display: block;
        color: ${({ theme }) => theme.colors.white};
        margin-bottom: .5rem;
        font-size: ${({ theme }) => theme.fontSize.lg};
        font-weight: 700;
    }

    small {
        display: block;
        line-height: 1.5;
        font-size: ${({ theme }) => theme.fontSize.sm};
        color: ${({ theme }) => theme.colors.white};
    }
`;
