import React, { useState } from 'react';
import styled from 'styled-components';
import { destinations } from '../data';

import deskimg from '../assets/destination/background-destination-desktop.jpg';
import mobileimg from '../assets/destination/background-destination-mobile.jpg';
import tabletimg from '../assets/destination/background-destination-tablet.jpg';

const Destnation = () => {
  const [destination, setDestination] = useState(destinations[0]);

  const showdestination = (index) => {
    console.log(index);
    setDestination(destinations[index]);
  };

  return (
    <section>
      <Background
        background={mobileimg}
        backgroundtablet={tabletimg}
        backgrounddesktop={deskimg}
      ></Background>
      <Title>
        <Span>01</Span> PICK YOUR DESTINATION
      </Title>
      <Container>
        <Img src={destination.images.webp} alt={destination.name} />
        <InfoContainer>
          <div className='btn-container'>
            {destinations.map((category, index) => {
              return (
                <Button
                  type='button'
                  className='subheadingsmall'
                  key={index}
                  onClick={() => showdestination(index)}
                >
                  {category.name}
                </Button>
              );
            })}
          </div>
          <h2>{destination.name}</h2>
          <p>{destination.description}</p>
          <Line></Line>
          <DistanceContainer>
            <p className='subheadingsmall'>AVG. DISTANCE</p>
            <DistanceNum className='subheadingbig'>
              {destination.distance}
            </DistanceNum>
            <p className='subheadingsmall'>EST TRAVEL TIME</p>
            <p className='subheadingbig'>{destination.travel}</p>
          </DistanceContainer>
        </InfoContainer>
      </Container>
    </section>
  );
};

export default Destnation;

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
    margin: 0 auto;
    margin-top: 3rem;
  }
  @media (min-width: 800px) {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`;
const InfoContainer = styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    row-gap: 2.5rem;
  }
`;
const Img = styled.img`
  width: 40vw;
  @media (min-width: 500px) {
    width: 35vw;
  }
  @media (min-width: 800px) {
    width: 450px;
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
const Button = styled.button`
  background: none;
  color: #fff;
  border: none;
  margin: 0 0.7rem;
  &:focus {
    text-decoration: underline;
    text-decoration-thickness: 4px;
  }
`;
const DistanceContainer = styled.div`
  @media (min-width: 500px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 50vw;
  }
  @media (min-width: 800px) {
    width: 100%;
  }
`;

const DistanceNum = styled.p`
  @media (min-width: 500px) {
    grid-row: 2;
    align-self: start;
  }
  @media (min-width: 800px) {
  }
`;
