import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Video from '../assets/videos/kompitenz-video.mp4'

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={Video} type="video/mp4" autoPlay muted loop playsInline />
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Individuelle softwareentwicklung "State of the art"!</HeroH1>
                    <HeroP>Fit für das digitale Zeitalter? Wir programmieren maßgeschneiderte Softwarelösungen für Ihr Unternehmen</HeroP>
                    <Button primary="true" big="true" to="/contact">
                        Kontaktiere uns
                    </Button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    align-items: center;
    height: calc(100vh + 80px);
    padding: 0 1rem;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 2;
        background: linear-gradient(
                180deg,
                rgba(0,0,0,0.2) 0%,
                rgba(0,0,0,0.6) 100%
            ),
            linear-gradient(
                180deg,
                rgba(0,0,0,0.2) 0%,
                transparent 100%
            );
    }
`;

const HeroBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
`;

const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`;

const HeroContent = styled.div`
    z-index: 3;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 900px) / 2);
`;

const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #fff;
    line-height: 1.4;
    font-weight: bold;
`;

const HeroH1 = styled.h1`
    font-size: clamp(1.5rem, 3vw, 3rem);
    margin-bottom: 2rem;
    letter-spacing: 2px;
    padding: 0 1rem;
`;

const HeroP = styled.p`
    font-size: clamp(1rem, 2vw, 2rem);
    margin-bottom: 2rem;
    font-weight: 400;
`;