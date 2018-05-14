import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w185';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.rootNode = React.createRef();
  }

  componentDidMount() {
    VanillaTilt.init(this.rootNode.current, {
      max: 25,
      speed: 400,
      glare: true,
      scale: 1.1,
      'max-glare': 0.3,
    });
    console.log(this.tilt);
  }
  render() {
    const { movie } = this.props;
    return (
      <MovieCard>
        <Link to={`${movie.id}`}>
          <div ref={this.rootNode}>
            <Poster
              src={`${POSTER_PATH}${movie.poster_path}`}
              alt={movie.title}
              draggable="false"
            />
          </div>
          <p>{movie.release_date.split('-')[0]}</p>
          <h3>{movie.title}</h3>
        </Link>
      </MovieCard>
    );
  }
}

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
  text-align: center;
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

export default Movie;
