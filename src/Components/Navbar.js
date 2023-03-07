import React from 'react';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';
import menubar from '../assets/shared/icon-hamburger.svg';
import { links } from '../data';

import styled from 'styled-components';

const Navbar = () => {
  const { sidebar, handleClick, isActive, setIsActive } = useGlobalContext();

  return (
    <NavContainer>
      <Nav className='navtext'>
        <Img src={logo} alt='logo' />
        <Line></Line>
        <Blur>
          <LinksBox>
            {links.map((link, index) => {
              const linkurl = `/${link.text}`;

              return (
                <Link
                  key={index}
                  to={link.text === 'home' ? '/' : linkurl}
                  onClick={() => setIsActive(index)}
                >
                  <TextLink className={link.num == isActive ? 'active' : ''}>
                    <Number>{link.num}</Number> {link.text}
                  </TextLink>
                </Link>
              );
            })}
          </LinksBox>
        </Blur>
        <MenuBar onClick={handleClick}>
          {!sidebar ? <img src={menubar} alt='' /> : ''}
        </MenuBar>
      </Nav>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.div`
  @media (min-width: 1000px) {
    padding-top: 1rem;
  }
`;
const Nav = styled.nav`
    z-index: 999;
position: static;
justify-content: space-between;
    display: flex;
 margin:1.5rem auto;
     width: 90vw;
     align-items: center;
  @media (min-width: 500px) {
     display: grid;
 
    grid-template-columns: auto 65vw;
    height: 6rem;
    align-items: center;
    margin 0 auto;}
  @media (min-width: 1000px) {

    width: 100vw;
    grid-template-columns: auto 1fr auto;
   
  }
`;

const Img = styled.img`
  z-index: 999;
  width: 2rem;
  height: 2rem;
  @media (min-width: 500px) {
    width: 3rem;
    height: 3rem;
  }
  @media (min-width: 1000px) {
    margin-left: 4rem;
    width: 4rem;
    height: 4rem;
  }
`;
const Line = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: inline-block;
    z-index: 999;
    width: 95%;
    height: 0.5px;
    background-color: rgb(255, 255, 255, 0.2);

    margin-left: 3rem;
  }
`;
const LinksBox = styled.ul`
  @media (min-width: 500px) {
    z-index: 999;
    align-items: flex-end;
    column-gap: 2rem;
    height: 100%;
    justify-content: center;
    display: flex;
  }
  @media (min-width: 1000px) {
    padding-left: 5rem;
    width: 55vw;
    justify-content: left;
    grid-template-columns: repeat (4, 1fr);
  }
`;
const TextLink = styled.li`
  font-size: 16px;
  letter-spacing: 2.7px;
  padding-bottom: 2.25rem;
  border-bottom: 4px solid rgba(255, 255, 255, 0);
  &.active {
    border-bottom: 4px solid #fff;
  }
  &:hover {
    border-bottom: 4px solid;
  }
`;

const Blur = styled.div`
  display: none;
  @media (min-width: 500px) {
    display: inline-block;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(8px);
    height: 100%;
  }
`;
const Number = styled.span`
  @media (min-width: 500px) {
    display: none;
  }
  @media (min-width: 800px) {
    display: inline-block;
    font-weight: bold;
    margin-right: 0.5rem;
  }
`;
const MenuBar = styled.button`
  border: none;
  background: none;
  @media (min-width: 500px) {
    display: none;
  }
`;
