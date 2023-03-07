import React, { useState } from 'react';
import styled from 'styled-components';
import { crew } from '../data';

import deskimg from '../assets/crew/background-crew-desktop.jpg';
import mobileimg from '../assets/crew/background-crew-mobile.jpg';
import tabletimg from '../assets/crew/background-crew-tablet.jpg';

const Crew = () => {
  const [data, setData] = useState(crew[0]);
  const [ActiveC, setActiveC] = useState('Douglas Hurley');

  const showdestination = (index) => {
    setData(crew[index]);
  };

  return (
    <section>
      <Background
        background={mobileimg}
        backgroundtablet={tabletimg}
        backgrounddesktop={deskimg}
      ></Background>
      <Title>
        <Span>02</Span> MEET OUR CREW
      </Title>
      <Container>
        <div>
          <Img src={data.images.webp} alt={data.name} />
          <Line></Line>
        </div>
        <InfoContainer>
          <Buttons className='btn-container'>
            {crew.map((member, index) => {
              return (
                <Dot
                  className={member.name === ActiveC ? 'active' : ''}
                  type='button'
                  key={index}
                  onClick={() => {
                    showdestination(index);
                    setActiveC(crew[index].name);
                  }}
                ></Dot>
              );
            })}
          </Buttons>
          <Role>{data.role}</Role>
          <h3>{data.name}</h3>
          <Description>{data.bio}</Description>
        </InfoContainer>
      </Container>
    </section>
  );
};

export default Crew;

const Background = styled.div`
  height: 150vh;
  width: 100vw;
  position: absolute;
  z-index: -9990;
  margin-top: -12rem;
  background-image: url(${({ background }) => background});
  background-repeat: repeat;
  background-size: cover;
  @media (min-width: 500px) {
    background-image: url(${({ backgroundtablet }) => backgroundtablet});
    height: 100%;
  }
  @media (min-width: 800px) {
    background-image: url(${({ backgrounddesktop }) => backgrounddesktop});
    height: 135vh;
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
  }
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  @media (min-width: 500px) {
    grid-row: 1;
    display: grid;
  }
  @media (min-width: 800px) {
    row-gap: 2.5rem;
    align-items: center;
  }
`;
const Img = styled.img`
  height: 30vh;
  margin-top: 2rem;
  @media (min-width: 500px) {
    width: 50vw;
    height: 100%;
    margin-bottom: -1rem;
  }
  @media (min-width: 800px) {
    max-width: 550px;
    margin-top: -5rem;
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
    display: grid;

    width: 60vw;
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
  width: 90vw;
  height: 1px;
  background-color: rgb(255, 255, 255, 0.15);
  margin-top: -4px;
  @media (min-width: 500px) {
    display: none;
  }
`;
const Dot = styled.button`
  background: rgb(255, 255, 255, 0.3);
  border: none;
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
  margin: 1rem 0.5rem;
  &.active {
    background: #fff;
  }
  @media (min-width: 800px) {
    height: 1.1rem;
    width: 1.1rem;

    margin-top: 5rem;
  }
`;
const Buttons = styled.div`
  @media (min-width: 500px) {
    grid-row: 4;
  }
`;
const Role = styled.h5`
  margin-bottom: -0.5rem;
  font-family: 'Bellefair', serif;
  color: rgb(255, 255, 255, 0.7);
  @media (min-width: 500px) {
    font-size: 20px;
  }
  @media (min-width: 800px) {
    font-size: 28px;
  }
`;
const Description = styled.p`
  @media (min-width: 800px) {
    max-width: 80%;
  }
`;
