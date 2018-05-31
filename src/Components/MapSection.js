import React from 'react';
import styled from 'styled-components';

import mapBg from '../assets/map.jpg';

const MapSection = () => (
  <Container>
    <div>
      <h1>Where and when</h1>
      <Cell>
        <h3>The Cinema Zarya»</h3>
        <p>Kaliningrad, prosp. Mira, 41/43</p>
      </Cell>
      <Cell>
        <h3>Film Cafe News»</h3>
        <p>Kaliningrad, Koloskova str., 13</p>
      </Cell>
      <Cell>
        <h3>«Loft»</h3>
        <p>Kaliningrad, Garazhnaya str., 2</p>
      </Cell>
    </div>
  </Container>
);
const Cell = styled.div`
  margin-top: 20px;
  h3 {
    font-size: 14px;
    line-height: 18px;
  }
  p {
    font-size: 14px;
    color: #666;
    margin-top: 5px;
  }
`;
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  background: url(${mapBg}) center;
  > div {
    background-color: white;
    border-radius: 6px;
    margin-left: 70px;
    padding: 50px;
    h1 {
      font-size: 50px;
    }
  }
  @media (max-width: 990px) {
    > div {
      margin-left: 40px;
      padding: 40px;
    }
  }
`;
export default MapSection;
