import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Movie.css';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w185';

const Movie = ({ movie }) => (
  <div className="Movie-card">
    <Link to={`${movie.id}`}> 
      <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} draggable="false" />
      <p>{movie.release_date.split('-')[0]}</p>
      <h3 className="Movie-title">{movie.title}</h3>
    </Link>
  </div>
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
