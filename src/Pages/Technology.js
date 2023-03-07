import React, { useState } from 'react';
import styled from 'styled-components';
import { technology } from '../data';

import deskimg from '../assets/technology/background-technology-desktop.jpg';
import mobileimg from '../assets/technology/background-technology-mobile.jpg';
import tabletimg from '../assets/technology/background-technology-tablet.jpg';

const Technology = () => {
  const [data, setData] = useState(technology[0]);

  const [ActiveT, setActiveT] = useState('Launch vehicle');
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
        <ImgContainer>
          <Img src={data.images.landscape} alt={data.name} />
          <ImgDesktop src={data.images.portrait} alt={data.name} />
        </ImgContainer>
        <InfoContainer>
          <LinkContainer className='btn-container'>
            {technology.map((tech, index) => {
              return (
                <Dot
                  className={tech.name === ActiveT ? 'active' : ''}
                  type='button'
                  key={index}
                  onClick={() => {
                    showdestination(index);
                    setActiveT(technology[index].name);
                  }}
                >
                  {index + 1}
                </Dot>
              );
            })}
          </LinkContainer>
          <TextContainer>
            <Terminology>the terminology...</Terminology>
            <Name>{data.name}</Name>
            <p>{data.description}</p>
          </TextContainer>
        </InfoContainer>
      </Container>
    </section>
  );
};

export default Technology;

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
    gap: 3rem;
    grid-row: 1;
    display: grid;
    grid-template-column: 1fr auto;
  }
`;
const Img = styled.img`
  width: 100vw;
  margin-top: 2rem;

  @media (min-width: 500px) {
    width: 100vw;
  }
  @media (min-width: 800px) {
    display: none;
  }
`;
const ImgDesktop = styled.img`
  display: none;
  @media (min-width: 500px) {
    display: none;
  }
  @media (min-width: 800px) {
    display: inline-block;
    width: 100%;
  }
`;
const ImgContainer = styled.div`
  @media (min-width: 800px) {
    grid-column: 2;
  }
`;
const TextContainer = styled.div`
  @media (min-width: 800px) {
    grid-column: 2;
    display: flex;
    gap: 1rem;
    flex-direction: column;
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

    align-items: center;
  }
`;

const Dot = styled.button`
  background: var(--dark);
  color: var(--white);
  border: 0.5px solid var(--white);
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  margin: 0 0.5rem;
  &.active {
    background: var(--white);
    color: var(--dark);
  }
  @media (min-width: 800px) {
    height: 4rem;
    width: 4rem;
    font-size: 25px;
  }
`;
const LinkContainer = styled.div`
  @media (min-width: 800px) {
    grid-column: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;
const Terminology = styled.h5`
  color: var(--purple);
  font-size: 16px;
`;
const Name = styled.h4`
  font-size: 45px;
`;
