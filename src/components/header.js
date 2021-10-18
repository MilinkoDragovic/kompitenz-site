import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"
import TextAnimation from "./TextAnimation"

const Header = ({ toggle }) => {
  return (
    <TopNavBar>
      <TopBarWrapper>
        <TextAnimation />
      </TopBarWrapper>
      <Nav>
        <NavLink to="/">LogicLab</NavLink>
        <Bars onClick={toggle} />
        <NavMenu>
          {menuData.map((item, index) => (
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
          ))}
        </NavMenu>
        <NavBtn>
          <Button primary="true" round="true" to="/contact">Contact Us</Button>
        </NavBtn>
      </Nav>
    </TopNavBar>
  )
}
export default Header

const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
  margin: 0 2rem;
  background: #fff;

  &:after {
    content: '';
    background: #aaafc0;
    position: absolute;
    bottom: -6px;
    height: 6px;
    left: 30px;
    padding: 0 calc((100vw - 1356px) / 2);
    right: 30px;    
  }

  @media screen and (max-width: 768px) {
    margin: 0;
    background: transparent;
  }
`;

const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`; 

const TopNavBar = styled.div`
    background: #f16a2d;
    position: absolute;
    width: 100%;
    height: 50px;
    z-index: 10;
    top: 0;
`;

const TopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  position: relative;
  margin: 0 2rem;
`;