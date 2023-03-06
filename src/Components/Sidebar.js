import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  return <Sidebarsection>Sidebar</Sidebarsection>;
};

export default Sidebar;

const Sidebarsection = styled.aside`
  display: none;
  background-color: rgb(255, 255, 255, 0);
  @media (min-width: 500px) {
    display: flex;
    margin-top: 0px;
    background-color: rgb(255, 255, 255, 0);
    height: 5rem;
    display: none;
  }
  @media (min-width: 800px) {
    display: none;
  }
`;
