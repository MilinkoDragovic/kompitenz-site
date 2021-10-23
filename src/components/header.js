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
        <NavLink to="/">
          <ImgLogo alt="Kompitenz Logo" src={Logo} /> 
        </NavLink>
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

const NavLink = styled(Link)`
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
  margin-right: 24px;

  li {
    margin: 0 5px;
    padding: 0;
    list-style: none;

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