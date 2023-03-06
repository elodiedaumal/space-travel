import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav className='.navtext'>
      <Img src={logo} alt='logo' />
      <Line></Line>
      <Blur>
        <LinksBox>
          <Link>
            <li>
              <Number>00</Number> HOME
            </li>
          </Link>
          <Link>
            <li>
              <Number>01</Number> DESTINATION
            </li>
          </Link>
          <Link>
            <li>
              <Number>02</Number> CREW
            </li>
          </Link>
          <Link>
            <li>
              <Number>03</Number> TECHNOLOGY
            </li>
          </Link>
        </LinksBox>
      </Blur>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: none;

  @media (min-width: 500px) {
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: auto 65vw;
    height: 7rem;
    z-index: 999;
    align-items: center;
    width: 90vw;
    margin 0 auto;
  }
  @media (min-width: 1000px) {
    z-index: 999;
    top: 50px;
    width: 100vw;
    grid-template-columns: auto 1fr auto;
   
  }
`;

const Img = styled.img`
  @media (min-width: 500px) {
    z-index: 999;
    width: 4rem;
    height: 4rem;
  }
  @media (min-width: 1000px) {
    margin-left: 4rem;
  }
`;
const Line = styled.div`
  @media (min-width: 500px) {
    display: none;
  }
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
    display: grid;
    align-items: center;
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

const Blur = styled.div`
  background-color: rgb(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  height: 100%;
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
