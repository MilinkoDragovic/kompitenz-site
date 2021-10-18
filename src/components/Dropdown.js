import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { Link } from 'gatsby';
import { FaTimes } from 'react-icons/fa';
import { menuData } from '../data/MenuData';

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index) => (
                        <DropdownLink to={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
                <BtnWrapper>
                    <Button primary='true' round='true' big='true' to='/contact'>
                        Contact Us
                    </Button>
                </BtnWrapper>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown


const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #9c27b0;
    display: grid;
    align-items: center;
    top: ${ ({ isOpen }) => (isOpen ? '0' : '-100%') };
    left: 0;
    transition: .3s ease-in-out;
    opacity: ${ ({ isOpen }) => (isOpen ? '1' : '0') };
`;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

const DropdownWrapper = styled.div`

`;

const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(5, 60px);
    }
`;

const DropdownLink = styled(Link)`
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    transition: .2s ease-in-out;

    &:hover {
        color: #000d1a;
    }
`;

const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
