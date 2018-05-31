import React, { Component } from 'react';
import styled from 'styled-components';
import Spinner from '@atlaskit/spinner';


class MovieData extends Component {
  state = {
    director: [],
    cast: [],
  };
  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.id
          .split('-')
          .pop()}/credits?api_key=${process.env.REACT_APP_TMDB_ID}`,
      );
      const movieCredits = await res.json();
      const director = [...movieCredits.crew].filter(c => c.job === 'Director');
      const cast = [...movieCredits.cast];
      // console.log(director);
      this.setState({
        // eslint-disable-line
        director: [...director],
        cast,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const MovieInfo = this.props.Movie;
    if (this.props.Loading) {
      return <Spinner size="medium" />;
    }
    return (
      <DataWrapper>
        <h3>About the movie </h3>
        <ul>
          <li>
            <Title>Genre</Title>
            <div className="job">{this.props.Genres.map(genre => genre.name).join(', ')}</div>
          </li>
          <li>
            <Title>IMDb</Title> <div className="job">{MovieInfo.vote_average}</div>
          </li>
          <li>
            <Title>Year</Title> <div className="job">{this.props.ReleaseDate.split('-')[0]}</div>
          </li>
          <li>
            <Title>Duration</Title> <div className="job">{MovieInfo.runtime} mins</div>
          </li>
          <li>
            <Title>Director</Title>{' '}
            <div className="job">
              {this.state.director.map(director => director.name).join(', ')}
            </div>
          </li>
          <li>
            <Title>Cast</Title>{' '}
            <div className="job">
              {this.state.cast
                .slice(0, 4)
                .map(actor => actor.name)
                .join(', ')}
            </div>
          </li>
        </ul>
      </DataWrapper>
    );
  }
}

const DataWrapper = styled.div`
  h3 {
    font-size: 19px;
    font-weight: 600;
    color: #000;
    margin-bottom: 10px;
  }
  ul {
    list-style: none;
    li {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      padding: 10px 0;
      position: relative;
      width: 100%;
      .job {
        font-size: 13px;
        color: gray;
        display: inline-flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-self: flex-end;
        text-align: right;
        position: relative;
        padding-left: 15px;
      }
    }
  }
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: black;
  position: relative;
  margin-right: 15px;
  &::after {
    content: '';
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background-color: #5b6363;
    display: inline-block;
    position: absolute;
    top: 6px;
    right: -19px;
  }
`;
export default MovieData;
