import React from 'react';
import styled from 'styled-components';
import { SocialMediaData } from '../data/SocialMediaData';

const SocialMedia = () => {
    return (
        <SocialMediaWrapper>
            {SocialMediaData.map((item, index) => {
                return (
                    <SocialMediaItem key={index}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <Icon>{item.icon}</Icon>
                        </a>
                    </SocialMediaItem>
                )
            })}
        </SocialMediaWrapper>
    )
}

export default SocialMedia

const SocialMediaWrapper = styled.div`
  padding: 0;
  margin-right: 1rem;
`;

const SocialMediaItem = styled.li`
    float: left;
    margin: 0 8px;
    padding: 0;
    list-style: none;

    a {
        color: #fff;
        float: left;
        font-size: 12px;
    }
`;

const Icon = styled.div`
    font-size: 1rem;
    color: #ffffff;
`;
