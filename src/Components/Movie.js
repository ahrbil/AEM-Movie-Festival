import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const POSTER_PATH = 'http://image.tmdb.org/t/p/w185';

const Movie = ({ movie }) => (
  <MovieCard>
    <Link to={`${movie.id}`}>
      <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} draggable="false" />
      <p>{movie.release_date.split('-')[0]}</p>
      <h3>{movie.title}</h3>
    </Link>
  </MovieCard>
);

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
export const Poster = styled.img`
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
`;

const MovieCard = styled.div`
  h3 {
    font-size: 16px;
    color: #000;
    line-height: 20px;
    width: 185px;
    margin: 0 auto;
  }
  p {
    color: rgba(141, 141, 141, 0.705);
  }
  img {
    margin-bottom: 18px;
  }
  a {
    text-decoration: none;
  }
`;
