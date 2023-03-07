import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { destinations } from '../data';

import deskimg from '../assets/destination/background-destination-desktop.jpg';
import mobileimg from '../assets/destination/background-destination-mobile.jpg';
import tabletimg from '../assets/destination/background-destination-tablet.jpg';

const Destnation = () => {
  const [destination, setDestination] = useState(destinations[0]);
  const [active, setActive] = useState(true);

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
        <p className='subheadingsmall'>AVG. DISTANCE</p>
        <p className='subheadingbig'>{destination.distance}</p>
        <p className='subheadingsmall'>EST TRAVEL TIME</p>
        <p className='subheadingbig'>{destination.travel}</p>
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
  }
`;
const Img = styled.img`
  width: 40vw;
  @media (min-width: 500px) {
    width: 35vw;
  }
  @media (min-width: 800px) {
    width: 20vw;
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
