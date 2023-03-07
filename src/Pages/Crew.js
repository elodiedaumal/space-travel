import React, { useState } from 'react';
import styled from 'styled-components';
import { crew } from '../data';

import deskimg from '../assets/crew/background-crew-desktop.jpg';
import mobileimg from '../assets/crew/background-crew-mobile.jpg';
import tabletimg from '../assets/crew/background-crew-tablet.jpg';

const Crew = () => {
  const [data, setData] = useState(crew[0]);
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
          <div className='btn-container'>
            {crew.map((member, index) => {
              return (
                <Dot
                  type='button'
                  key={index}
                  onClick={() => showdestination(index)}
                ></Dot>
              );
            })}
          </div>
          <h5>{data.role}</h5>
          <h4>{data.name}</h4>
          <p>{data.bio}</p>
        </InfoContainer>
      </Container>
    </section>
  );
};

export default Crew;

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
  width: 40vw;
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
