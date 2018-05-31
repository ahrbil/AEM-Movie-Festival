import React from 'react';
import styled from 'styled-components';

const Page404 = () => (
  <Contariner>
    <h1>coming soon...</h1>
  </Contariner>
);
const Contariner = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    text-transform: uppercase;
    font-size: 4rem;
    color: black;
  }
`;

export default Page404;
