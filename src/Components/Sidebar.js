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
        <LinksBox>
          <Link to='/'>
            <li>
              <Number>00</Number> HOME
            </li>
          </Link>
          <Link to='/destination'>
            <li>
              <Number>01</Number> DESTINATION
            </li>
          </Link>
          <Link to='/crew'>
            <li>
              <Number>02</Number> CREW
            </li>
          </Link>
          <Link to='/technologie'>
            <li>
              <Number>03</Number> TECHNOLOGY
            </li>
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
`;

const LinksBox = styled.ul`
  padding: 2rem;
  z-index: 999;
  align-content: flex-start;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-top: 4rem;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
`;

const Number = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
`;
const Img = styled.img`
  text-align: right;
`;
