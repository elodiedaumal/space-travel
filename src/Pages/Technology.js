import React, { useState } from 'react';
import styled from 'styled-components';
import { technology } from '../data';

import deskimg from '../assets/technology/background-technology-desktop.jpg';
import mobileimg from '../assets/technology/background-technology-mobile.jpg';
import tabletimg from '../assets/technology/background-technology-tablet.jpg';

const Technology = () => {
  const [data, setData] = useState(technology[0]);
  const [number, setNumber] = useState(1);
  const showdestination = (index) => {
    setData(technology[index]);
  };

  return (
    <section>
      <Background
        background={mobileimg}
        backgroundtablet={tabletimg}
        backgrounddesktop={deskimg}
      ></Background>
      <Title>
        <Span>03</Span> space launch 101
      </Title>
      <Container>
        <div>
          <Img src={data.images.landscape} alt={data.name} />
        </div>
        <InfoContainer>
          <div className='btn-container'>
            {technology.map((member, index) => {
              return (
                <Dot
                  type='button'
                  key={index}
                  onClick={() => showdestination(index)}
                >
                  {index + 1}
                </Dot>
              );
            })}
          </div>
          <h5>the terminology...</h5>
          <h4>{data.name}</h4>
          <p>{data.description}</p>
        </InfoContainer>
      </Container>
    </section>
  );
};

export default Technology;

const Background = styled.div`
  height: 100%;
  width: 100vw;
  position: absolute;
  z-index: -9990;
  margin-top: -12rem;
  background-image: url(${({ background }) => background});
  background-repeat: repeat;
  background-size: cover;
  @media (min-width: 500px) {
    background-image: url(${({ backgroundtablet }) => backgroundtablet});
    height: 150vh;
  }
  @media (min-width: 800px) {
    background-image: url(${({ backgrounddesktop }) => backgrounddesktop});
  }
`;
const Title = styled.h5`
  text-align: center;
  @media (min-width: 500px) {
    text-align: left;
    width: 90vw;
    margin: 3rem auto;
  }
  @media (min-width: 800px) {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  @media (min-width: 500px) {
    row-gap: 2rem;
  }
  @media (min-width: 800px) {
    row-gap: 2.5rem;
  }
`;
const Img = styled.img`
  width: 100vw;
  margin-top: 2rem;
  @media (min-width: 500px) {
    width: 35vw;
  }
  @media (min-width: 800px) {
    max-width: 450px;
  }
`;
const Span = styled.span`
  color: rgb(255, 255, 255, 0.3);
  margin-right: 0.5rem;
`;
const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 90vw;
  row-gap: 2rem;
  margin: 0 auto;
  @media (min-width: 500px) {
    width: 70vw;
    margin-top: 3rem;
  }
  @media (min-width: 800px) {
    max-width: 1100px;
    width: 90vw;
    height: 100%;
    display: grid;
    grid-template-columns: auto 450px;
    text-align: left;
    gap: 5rem;
    align-items: end;
  }
`;
const Line = styled.div`
    width: 95%;
    height: 1px;
    background-color: rgb(255, 255, 255, 0.3);
   
  }
`;
const Dot = styled.button`
  background: #fff;
  border: none;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  margin: 0 0.5rem;
  &:focus {
    text-decoration: underline;
    text-decoration-thickness: 4px;
  }
`;
