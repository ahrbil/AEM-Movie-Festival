import React, { Component } from 'react';
import styled from 'styled-components';
import LittleSlider from '../Components/LittleSlider';
import MovieData from '../Components/MovieData';
import Trailer from '../Components/Trailer';

const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  state = {
    movie: {},
    genres: [],
    releaseDate: '',
    loading: true,
    trailer: false,
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.id
          .split('-')
          .pop()}?api_key=${process.env.REACT_APP_TMDB_ID}&language=en-US`,
      );
      const movie = await res.json();
      const genres = [...movie.genres];
      const releaseDate = movie.release_date;
      // eslint-disable-next-line
      this.setState({
        movie,
        genres,
        releaseDate,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }
  play = () => {
    this.setState({
      trailer: true,
    });
  };
  exite = () => {
    this.setState({
      trailer: false,
    });
  };
  goBack = () => {
    this.props.history.goBack();
    console.log('you clicked!!');
  };
  render() {
    const {
      movie, genres, releaseDate, loading, trailer,
    } = this.state;
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        {trailer && (
          <TrailerContainer>
            <div>
              <ExiteBtn onClick={this.exite}>
                <span role="img" aria-label="">
                  ❌
                </span>
              </ExiteBtn>
              <Trailer {...this.props} />
            </div>
          </TrailerContainer>
        )}
        <Top>
          <Button onClick={this.goBack}>Back to the list</Button>
        </Top>
        <Content>
          <MovieInfo>
            <h1>{movie.title} </h1>
            <div>
              <p>{movie.overview}</p>
            </div>
            <MovieGall>
              <LittleSlider {...this.props} play={this.play} />
            </MovieGall>
          </MovieInfo>
          <MovieDataContainer>
            <MovieData
              Movie={movie}
              Genres={genres}
              ReleaseDate={releaseDate}
              Loading={loading}
              {...this.props}
            />
          </MovieDataContainer>
        </Content>
      </MovieWrapper>
    );
  }
}
const Button = styled.button`
  max-width: 100%;
  height: 2.7rem;
  background: #ffdd2d;
  color: #000;
  border: 0;
  border-radius: 6px;
  display: inline-block;
  padding: 13px 25px;
  vertical-align: baseline;
  font-size: 15px;
  text-align: center;
  outline: none;
  font-family: work-sans;
  &:hover {
    background: #ffe355;
    cursor: pointer;
  }
`;
const ExiteBtn = styled.button`
  margin-bottom: 20px;
  width: 50px;
  height: 30px;
  outline: none;
  border: none;
  background: #ffdd2d;
  position: relative;
  border-radius: 6px;
  &:hover {
    cursor: pointer;
  }
`;
const TrailerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: #000000b3;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    padding: 20px;
    width: 700px;
    height: 406px;
  }
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 200px;
  @media (max-width: 465px) {
    height: 60px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;
const MovieInfo = styled.div`
  width: 63%;
  flex: 1;
  margin-right: 20px;
  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  span {
    color: #ffdd2d;
    font-weight: bold;
  }
  p {
    font-size: 15px;
    line-height: 25px;
  }
`;
const MovieDataContainer = styled.div`
  padding: 18px;
  color: black;
  background: #fff;
  height: auto;
  width: 30%;
  min-width: 260px;
  /* max-width: 100%; */
  border-radius: 10px;
  @media (max-width: 1190px){
    width: 100%;
    margin-top: 20px;
  }
  }
`;
const MovieGall = styled.div`
  .slick-slide {
    padding: 4px;
  }
`;
const MovieWrapper = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 16%, rgba(255, 255, 255, 0) 100%),
    url(${props => props.backdrop}) no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px;
  color: white;
  position: relative;
  min-height: 100vh;
  @media (max-width: 990px) {
    padding: 30px;
    width: 100%;
    ${MovieDataContainer} {
      width: 100%;
    }
    ${MovieInfo} {
      margin: 0;
      width: 100%;
    }
  }
`;
export default MovieDetail;
