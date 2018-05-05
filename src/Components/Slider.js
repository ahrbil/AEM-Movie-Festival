import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import rightArrow from '../assets/right-arrow.svg';
import leftArrow from '../assets/left-arrow.svg';

const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      movies: [],
    };
  }
  async componentDidMount() {
    try {
      const res = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=abd82c60cb3ee473e5d38d6e8a90cfa6&language=en-US&page=1',
      );
      const movies = await res.json();
      // console.table(movies.results);
      this.setState({ // eslint-disable-line
        movies: movies.results,
      });
    } catch (error) {
      console.log(error);
    }
  }
  next() {
    this.sliderRef.slickNext();
  }
  previous() {
    this.sliderRef.slickPrev();
  }
  render() {
    const settings = {
      infinite: true,
      speed: 900,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      pauseOnHover: false,
      accessibility: false,
      adaptiveHeight: true,
      draggable: false,
      swipe: false,
      touchMove: false,
    };
    return (
      <SliderContainer>
        <Slider ref={node => (this.sliderRef = node)} {...settings}>
          {this.state.movies.slice(0, 3).map(movie => (
            <SliderItem backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
              <div>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
              </div>
            </SliderItem>
          ))}
        </Slider>
        <ButtonRight onClick={this.next}>
          <img src={rightArrow} alt="" />
        </ButtonRight>
        <Button onClick={this.previous}>
          <img src={leftArrow} alt="" />
        </Button>
      </SliderContainer>
    );
  }
}

const SliderContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const progressBarAnimation = keyframes`
  from {
    width: 0px;
  }
  to {
    width: 100%;
  }
`;
const SliderItem = styled.div`
  display: flex !important;
  color: white;
  width: 100%;
  height: 100vh;
  background-color: gainsboro;
  font-size: 3rem;
  position: relative;
  outline: none;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
  background-position: center;
  &:before {
    content: '';
    height: 5px;
    width: 0px;
    background: #ffdd2d;
    position: absolute;
    bottom: 0;
    left: 0;
    animation: ${progressBarAnimation} 3000ms ease-out ;
  }
   div {
    align-self: center;
    margin: 0 4rem -7rem;
    width: 50%;
    h1 {
      font-size: 62px;
      line-height: 67px;
      font-weight: 700;
      margin: 20px 0 20px;
    }
    p {
      font-size: 15px;
      line-height: 25px;
    }
  }
`;
const Button = styled.button`
  position: absolute;
  border: none;
  border-radius: 50%;
  height: 54px;
  width: 54px;
  bottom: 60px;
  right: 80px;
  background: #0552b4;
  color: black;
  cursor: pointer;
  outline: none;
  ${this}:hover {
    background: #045ed1;
  }
  > img {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 35%;
    width: 35%;
    transform: translate(-50%, -50%);
  }
`;
const ButtonRight = Button.extend`
  bottom: 125px;
`;
