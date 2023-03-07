import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import menuclose from '../assets/shared/icon-close.svg';

const Sidebar = () => {
  const { handleClick } = useGlobalContext();
  return (
    <>
      <Sidebarsection>
        <BtnContainer>
          <Img src={menuclose} alt='' onClick={handleClick} />
        </BtnContainer>
        <LinksBox onClick={handleClick}>
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
          <Link to='/technology'>
            <TextLink>
              <Number>03</Number> TECHNOLOGY
            </TextLink>
          </Link>
        </LinksBox>
      </Sidebarsection>
    </>
  );
};

export default Sidebar;

const Sidebarsection = styled.aside`
  position: absolute;
  z-index: 999;
  height: 100vh;
  right: 0;
  top: 0;
  width: 65vw;
  backdrop-filter: blur(20px);
  background-color: rgb(11, 13, 23, 0.3);
  @media (min-width: 500px) {
    display: none;
  }
`;

const LinksBox = styled.ul`
  padding: 2rem;
  z-index: 999;
  align-content: flex-start;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  margin-top: 4rem;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
`;

const Img = styled.img`
  text-align: right;
`;

const TextLink = styled.li`
  font-size: 16px;
  letter-spacing: 2.7px;
  &:hover,
  &:active,
  &:focus {
    text-decoration: underline;
    text-decoration-thickness: 4px;
  }
`;

const Number = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
  }
`;
