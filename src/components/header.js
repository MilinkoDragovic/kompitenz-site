import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
// import TextAnimation from "./TextAnimation"
import SocialMedia from "./SocialMedia"
import TopBarPhone from "./TopBarPhone"
import Logo from "../assets/images/logo.svg";

const Header = ({ toggle }) => {
  return (
    <TopNavBar>
      <TopBarWrapper>
        <TagLine>
          Obwohl: Niemand möchte zurückgestoßen oder gesagt werden, dass seine Idee nicht umsetzbar ist
        </TagLine>
        {/* <TextAnimation /> */}
        <SocialMedia />
        <TopBarPhone />
      </TopBarWrapper>
      <Nav>
        <NavLinkLogo to="/">
          <ImgLogo alt="Kompitenz Logo" src={Logo} /> 
        </NavLinkLogo>
        <Bars onClick={toggle} />
        <NavMenu>
          {menuData.map((item, index) => (
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
          ))}
        </NavMenu>
        <NavBtn>
          <li>
            <span href="#" class="active">DE</span>
          </li>
          <li>
            <span href="#">EN</span>
          </li>
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

const NavLinkLogo = styled(Link)`
  color: #505050;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;
  cursor: pointer;
  font-family: "Poppins";
`;

const NavLink = styled(Link)`
  color: #505050;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;
  cursor: pointer;
  font-family: "Poppins";
  float: left;
  height: 80px;
  line-height: 80px;
  position: relative;
  z-index: 10;

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -6px;
    height: 6px;
    width: 0;
    transition: width 0s ease, background 0.25s ease;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: -6px;
    height: 6px;
    width: 0;
    background: ${({ theme }) => theme.colors.primary};
    transition: width .25s ease;
  }

  &:hover {
    text-decoration: none;

    &:before {
      width: 100%;
      background: ${({ theme }) => theme.colors.primary};
      transition: width .25s ease;
    }

    &:after {
      width: 100%;
      background: transparent;
      transition: all 0s ease;
    }
  }
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

const NavBtn = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  margin-right: 24px;

  li {
    margin: 0 5px;
    padding: 0;
    list-style: none;
    line-height: 80px;
    height: 80px;

    span {
      font-weight: 600;
      transition: .3s ease-out;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.gray};

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }

      &.active {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`; 

const TopNavBar = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  position: absolute;
  width: 100%;
  height: 64px;
  z-index: 10;
  top: 0;
`;

const TopBarWrapper = styled.div`
  display: flex;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  position: relative;
  margin: 0 2rem;
  flex-wrap: wrap;
  align-items: center;
`;

const TagLine = styled.span`
  color: #ffffff;
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const ImgLogo = styled.img`
  height: 41px;
  max-width: 100%;
`;