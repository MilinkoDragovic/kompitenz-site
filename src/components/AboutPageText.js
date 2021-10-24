import React from 'react';
import styled from 'styled-components';
import Video from '../assets/videos/kompitenz-video.mp4'
import ImageBg from '../assets/images/slider/hero-1.jpg'
import SideIcon from '../assets/images/side-widget-icon.png'

const AboutPageTextWidget = () => {

    return (
        <SideImageContentContainer>
            <SideImageContentSide>
                <SideImageContentSideInner>
                    <div className="section-title">
                        <span>02</span>
                        <h2><strong>software für das</strong>  digitale zeitalter</h2>
                        <h6>
                            IMPULSE GEBEN | MIT- UND WEITERDENKEN
                        </h6>
                        <h6>ZUKUNFT GESTALTEN | TECHNOLOGIE AN NUTZER - UND KUNDENBEDÜRFNISSE AUSRICHTEN</h6>
                    </div>
                    <p>Wir sind ein dynamisches und innovatives Unternehmen, das sich den Herausforderungen des digitalen Wandels stellt und Sie bei der Transformation vollumfänglich begleitet.</p>
                    <p>Unser Team aus Generalisten und IT-Experten arbeitet mit Ihnen zusammen daran, Ihre strategische Ausrichtung zu verstehen und Lösungsansätze für Ihr Vorhaben zu entwickeln und umzusetzen.</p>
                </SideImageContentSideInner>
            </SideImageContentSide>
            <SideImageContentSide style={{backgroundImage: `url(${ImageBg})`}}>

                <SideImageContentLeftSideVideo>
                    <LeftSideVideo src={Video} type="video/mp4" autoPlay muted loop></LeftSideVideo>
                </SideImageContentLeftSideVideo>

            </SideImageContentSide>
        </SideImageContentContainer>
    )
}

export default AboutPageTextWidget

const SideImageContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 0;
`;

const SideImageContentSide = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 100px 0;
    background-size: cover !important;
    position: relative;
    background-color: ${({ theme }) => theme.colors.primary};
`;

const SideImageContentSideInner = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 0 60px;

    .section-title {
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

    p {
        color: ${({ theme }) => theme.colors.white};
        line-height: 1.6;
        margin-bottom: 1.2rem;
    }

    img {
        height: 38px;
        margin-top: 10px;
    }
`;

const SideImageContentLeftSideVideo = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    opacity: 1;
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -ms-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
    background: #945b8e12;
`;

const LeftSideVideo = styled.video`
    min-height: 100%;
    min-width: 100%;
    float: left;
    margin-left: -30%;
    opacity: 0.4;
`;

const SideImageIcon = styled.img`
    height: 5em !important;
    margin: 0 auto;
    display: block;
    margin-bottom: 2rem;
`;