import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from './Button';
import Movie from './Movie';

const TopMovies = props => (
  <Conatiner>
    <Header>
      <h2>Movies</h2>
      <Link to="/movies">
        <Button title="All festival movies" />
      </Link>
    </Header>
    <MovieGrid>
      {props.movies.slice(0, 4).map(movie => <Movie key={movie.id} movie={movie} />)}
    </MovieGrid>
  </Conatiner>
);

const MovieGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  padding: 0 70px;
`;
const Header = styled.div`
  width: 100%;
  height: 160px;
  padding: 0 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 2rem;
  }
`;
const Conatiner = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 990px) {
    height: auto;
    ${Header} {
      padding: 40px;
    }
    ${MovieGrid} {
      flex-wrap: nowrap;
      overflow-y: auto;
      width: 100vw;
      height: 380px;
      padding: 20px 0;
      > div {
        margin-left: 20px;
      }
    }
  }
`;
export default TopMovies;
