import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import homeimg from '../assets/home/background-home-desktop.jpg';
import mobileimg from '../assets/home/background-home-mobile.jpg';
import tabletimg from '../assets/home/background-home-tablet.jpg';

const Home = () => {
  return (
    <section>
      <Background
        background={mobileimg}
        backgroundtablet={tabletimg}
        backgrounddesktop={homeimg}
      ></Background>
      <HomePage>
        <HomeInfo>
          <Title>So, you want to travel to </Title>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </HomeInfo>
        <ButtonContainer to='/destination'>
          <Explore>EXPLORE</Explore>
        </ButtonContainer>
      </HomePage>
    </section>
  );
};

export default Home;

const Background = styled.div`
  height: 150vh;
  width: 100vw;
  position: absolute;
  z-index: -999;
  margin-top: -12rem;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 500px) {
    background-image: url(${({ backgroundtablet }) => backgroundtablet});
  }
  @media (min-width: 800px) {
    background-image: url(${({ backgrounddesktop }) => backgrounddesktop});
  }
`;
const HomePage = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin: 5rem auto;
  z-index: 99;
  width: 90vw;
  height: 100vh;
  @media (min-width: 500px) {
    width: 60vw;
  }
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 2fr 400px;
    max-width: 1200px;
    width: 90vw;
    height: 100%;
  }
`;
const ButtonContainer = styled(Link)`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1.5px;
  z-index: 99;

  &:hover {
    background-color: rgb(36, 38, 47, 0.8);
    height: 240px;
    width: 240px;
    border-radius: 50%;
    @media (min-width: 600px) {
      height: 400px;
      width: 400px;
    }
  }
`;
const Explore = styled.button`
  border-radius: 50%;
  height: 160px;
  width: 160px;
  letter-spacing: 1.5px;
  border: none;
  font-size: 23px;
  z-index: 999;
  @media (min-width: 600px) {
    height: 250px;
    width: 250px;
    font-size: 30px;
    justify-self: end;
  }
`;
const Title = styled.h5`
  color: var(--purple);
  @media (min-width: 1000px) {
    padding-top: 3rem;
  }
`;

const HomeInfo = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  z-index: 99;
  @media (min-width: 800px) {
    text-align: left;
    display: grid;
    grid-template-columns: 450px;
  }
`;
