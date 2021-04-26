import React from "react";
import styled from "styled-components";
import { useMenuContext } from "../../state";

import { Squash as Hamburger } from "hamburger-react";
import NavLinks from "./NavLinks";
import {FaTwitter} from 'react-icons/fa';
import { useScroll } from "../../hooks";
import { BiArrowBack } from "react-icons/bi";

const DesktopNavbar = () => {
  
  
  const { isMenuOpen, toggleMenu } = useMenuContext();
  const { isScrolled } = useScroll();
  return (
    <DesktopNav isScrolled={isScrolled}>
      {isScrolled && (
        <BackArrow />
      )}
      {!isScrolled && (
          <NavIcon />
      )}
      <UserInfo>
      <h2 className="userInfo">Twitter Feed</h2>
      </UserInfo>  
      <NavLinks />
      <Hamburger className="hamburger-react" toggled={isMenuOpen} toggle={toggleMenu} duration={0} />
    </DesktopNav>
  );
};

export default DesktopNavbar;

const DesktopNav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  transition: all 150ms linear;
  position: fixed;
  top: 0;
  background: #fff;
  color: #000;
  left: 0;
  width: 100%;
  height: 64px;
  padding: 0 60px;
  
  @media screen and (max-width: 768px) {
    justify-content: center;
    padding: 0 30px;
  }
  .logo {
    flex: 2;
    color: #000;
    font-size: 32px;
  }
  .nav-links {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .hamburger-react {
    display: none;
    z-index: 99;
    & > div > div {
      background: #000 !important;
    }
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;

export const NavIcon = styled(FaTwitter)`
margin-right: .8rem;
transition: all .5s ;
flex: 1;
&:hover {
    transform: scale(2);
}
align-self: center;
@media screen and (max-width: 768px) {
  margin-left: auto;
}

`;

export const BackArrow = styled(BiArrowBack)`
margin-right: .8rem;
transition: all .5s ;
flex: 1;
&:hover {
    transform: scale(2);
}
align-self: center;
`;

const UserInfo = styled.span`

  flex: 1;
  @media screen and (max-width: 768px) {
    flex: 3;
  }

  .userInfo {
    display: inline-block;
  }
`
