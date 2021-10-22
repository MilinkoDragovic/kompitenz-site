import React from 'react';
import styled from 'styled-components';
import Video from '../assets/videos/kompitenz-video.mp4'
import ImageBg from '../assets/images/slider/hero-1.jpg'
import { AiOutlinePlayCircle } from 'react-icons/ai';

const SideImageContent = () => {

    return (
        <SideImageContentContainer>
            <SideImageContentSide style={{backgroundImage: `url(${ImageBg})`}}>

                <SideImageContentLeftSideVideo>
                    <LeftSideVideo src={Video} type="video/mp4" autoPlay muted loop></LeftSideVideo>
                </SideImageContentLeftSideVideo>

                <LeftSideVideoButton href={Video}>
                    <AiOutlinePlayCircle></AiOutlinePlayCircle>
                </LeftSideVideoButton>

            </SideImageContentSide>
            <SideImageContentSide>
                <SideImageContentSideInner>
                    <SectionTitle>
                        <span>02</span>
                        <h2>introduction</h2>
                        <h6>Do this for both directions of traffic if it’s this</h6>
                    </SectionTitle>
                    <SectionCounter>
                            <li> <span class="odometer odometer-auto-theme" id="1"><div class="odometer-inside"><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">1</span></span></span></span></span><span class="odometer-formatting-mark">,</span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">7</span></span></span></span></span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">0</span></span></span></span></span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">0</span></span></span></span></span></div></span><span class="symbol">+</span> <small>Underestate</small> </li>
                            <li> <span class="odometer odometer-auto-theme" id="2"><div class="odometer-inside"><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">8</span></span></span></span></span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">8</span></span></span></span></span></div></span><span class="symbol">k</span> <small>Underestate</small> </li>
                            <li> <span class="odometer odometer-auto-theme" id="3"><div class="odometer-inside"><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">9</span></span></span></span></span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">6</span></span></span></span></span></div></span><span class="symbol">%</span> <small>Underestate</small> </li>
                    </SectionCounter>
                    <p>If you are not actively using <strong>Facebook</strong>, <strong>Twitter</strong> and other social media platforms, take the time to do so. Get into the habit of updating your business page or <u>tweets</u> at the same time every day. </p>
                    <p>Take advantage of the <u>software</u> that can help turn your blogs into tweets and know when the best time of day is to connect with your base.</p>
                </SideImageContentSideInner>
            </SideImageContentSide>
        </SideImageContentContainer>
    )
}

export default SideImageContent

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
    padding: 120px 0;
    background-size: cover !important;
    position: relative;
    background-color: rgb(64, 80, 137);
`;

const SideImageContentSideInner = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 0 60px;

    p {
        color: #ffffff;
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
    background: #f65935;
`;

const LeftSideVideo = styled.video`
    min-height: 100%;
    min-width: 100%;
    float: left;
    margin-left: -30%;
    opacity: 0.4;
`;

const LeftSideVideoButton = styled.a`
    display: inline-block;
    margin: 0 auto;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    transition: all 0.5s;
    z-index: 999;
    font-size: 5rem;
    color: #ffffff;
`;

const SectionTitle = styled.div`
    margin-bottom: 40px;
    color: #fff;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    span {
        display: block;
        font-size: 18px;
        font-weight: 800;
        color: #fff;
        opacity: 0.7;
    }

    h2 {
        display: block;
        font-weight: 700;
        color: #fff;
        margin-bottom: 20px;
    }

    h6 {
        font-size: 19px;
        color: #fff;
        line-height: 30px;
        margin-bottom: 0;
    }
`;

const SectionCounter = styled.ul`
    width: 100%;
    float: left;
    margin-bottom: 40px;
    padding: 0;

    li {
        width: 33.33333%;
        float: left;
        margin: 0;
        padding: 0;
        list-style: none;
    }
`;