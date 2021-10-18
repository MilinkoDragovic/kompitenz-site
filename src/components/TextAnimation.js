import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import useInterval from '@use-it/interval';

const TextAnimation = () => {
    const developmentArray = "Development".split("");
    const marketingArray = "Marketing".split("");
    const [items, setItems] = useState(developmentArray);
    const [count, setCount] = useState(0);
    const [play, setPlay] = useState(false);

    useInterval(
        () => {
            setItems(developmentArray);
            setCount(count + 1);

            if (count === 1) {
                setCount(0);
                setItems(marketingArray);
            }
        },
        play ? 6000 : null
    );

    useEffect(
        () => {
            const timer = setTimeout(() => {
                setItems(marketingArray);
                setPlay(true);
            }, 4000);

            return () => clearTimeout(timer);
        }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <TextAnimationWrapper>
            <p>If you are looking for</p>
            {items.map((item, index) => (
                <span key={index}>{item}</span>
            ))}? Contact Us
        </TextAnimationWrapper>
    )
}

export default TextAnimation

const animation = keyframes`
    0%  { 
            opacity: 0; 
            transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg);
            filter: blur(10px);
        }
    25% { 
            opacity: 1;
            transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
            filter: blur(0px);
        }
    75% { 
            opacity: 1;
            transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
            filter: blur(0px);
        }
    100% { 
            opacity: 0;
            transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg);
            filter: blur(10px);
        }
`;

const TextAnimationWrapper = styled.span`
    display: flex;
    color: #fff;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    @media only screen and (max-width: 991px), only screen and (max-device-width: 991px) {
        display: none;
    }

    p {
        margin-right: .5rem;
    }

    span {
        display: inline-block;
        opacity: 0;
        animation-name: ${animation};
        animation-duration: 6s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    span:nth-child(1) {
        animation-delay: 0.1s;
    }

    span:nth-child(2) {
        animation-delay: 0.3s;
    }

    span:nth-child(3) {
        animation-delay: 0.2s;
    }

    span:nth-child(4) {
        animation-delay: 0.3s;
    }

    span:nth-child(5) {
        animation-delay: 0.5s;
    }

    span:nth-child(6) {
        animation-delay: 0.6s;
    }

`;