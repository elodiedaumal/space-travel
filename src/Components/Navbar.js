import React from 'react';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';
import menubar from '../assets/shared/icon-hamburger.svg';

import styled from 'styled-components';

const Navbar = () => {
  const { sidebar, handleClick } = useGlobalContext();
  return (
    <Nav className='.navtext'>
      <Img src={logo} alt='logo' />
      <Line></Line>
      <Blur>
        <LinksBox>
          <Link to='/'>
            <TextLink>
              <Number>00</Number> HOME
            </TextLink>
          </Link>
          <Link to='/destination'>
            <TextLink>
              <Number>01</Number> DESTINATION
            </TextLink>
          </Link>
          <Link to='/crew'>
            <TextLink>
              <Number>02</Number> CREW
            </TextLink>
          </Link>
          <Link to='/technologie'>
            <TextLink>
              <Number>03</Number> TECHNOLOGY
            </TextLink>
          </Link>
        </LinksBox>
      </Blur>
      <MenuBar onClick={handleClick}>
        {!sidebar ? <img src={menubar} alt='' /> : ''}
      </MenuBar>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
    z-index: 999;
    position: sticky;
justify-content: space-between;
    display: flex;
 margin:1.5rem auto;
     width: 80vw;
     align-items: center;
  @media (min-width: 500px) {
     display: grid;
    position: sticky;
    grid-template-columns: auto 65vw;
    height: 7rem;
    align-items: center;
    margin 0 auto;}
  @media (min-width: 1000px) {

    top: 50px;
    width: 100vw;
    grid-template-columns: auto 1fr auto;
   
  }
`;

const Img = styled.img`
  z-index: 999;
  width: 2rem;
  height: 2rem;
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
    height: 1px;
    background-color: rgb(255, 255, 255, 0.5);
    margin-left: 4rem;
  }
`;
const LinksBox = styled.ul`
  @media (min-width: 500px) {
    z-index: 999;
    align-items: flex-end;
    column-gap: 2rem;
    padding-left: 0rem;
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
  padding-bottom: 3rem;
  &:hover,
  &:active,
  &:focus {
    padding-bottom: 2.75rem;
    border-bottom: 4px solid #fff;
  }
`;

const Blur = styled.div`
  display: none;
  @media (min-width: 500px) {
    display: inline-block;
    background-color: rgb(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
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
