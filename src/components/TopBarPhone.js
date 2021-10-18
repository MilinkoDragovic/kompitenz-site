import React from 'react';
import styled from 'styled-components';
import { AiOutlineMobile } from 'react-icons/ai';

const TopBarPhone = () => {
    return (
        <TopBarPhoneContainer>
            <PhoneIcone />
            <PhoneNumber>
                <b>DE</b>
                +49 6221 1877950
            </PhoneNumber>
        </TopBarPhoneContainer>
    )
}

export default TopBarPhone


const TopBarPhoneContainer = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
`;

const PhoneIcone = styled(AiOutlineMobile)`
    color: #ffffff;
    font-size: 2rem;
    margin-top: -1px;
    margin-right: 7px;
`;

const PhoneNumber = styled.span`
    font-weight: 600;
    color: #ffffff;

    b {
        font-weight: 400;
        font-size: 13px;
        opacity: .7;
        margin-right: .5rem;
    }
`;