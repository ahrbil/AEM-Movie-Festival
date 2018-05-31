import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import { Button } from './MeanSlider';

import play from '../assets/play.svg';

import rightArrow from '../assets/right-arrow.svg';
import leftArrow from '../assets/left-arrow.svg';

class LittleSlider extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }
  state = {
    loading: true,
    posters: [],
  };
  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.id
          .split('-')
          .pop()}/images?api_key=${process.env.REACT_APP_TMDB_ID}`,
      );
      const movieImages = await res.json();
      const posters = [...movieImages.backdrops];
      // eslint-disable-next-line
      this.setState({
        loading: false,
        posters,
      });
    } catch (error) {
      console.log(error);
    }
  }
  next = () => {
    this.sliderRef.current.slickNext();
  };
  previous = () => {
    this.sliderRef.current.slickPrev();
  };
  render() {
    const settings = {
      dots: false,
      infinite: true,
      adaptiveHeight: true,
      arrows: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <SliderWrapper>
        <h3>Pictures from the movie</h3>
        <BtnWrapper>
          <Btn onClick={this.next}>
            <img src={rightArrow} alt="" />
          </Btn>
          <BtnLeft onClick={this.previous}>
            <img src={leftArrow} alt="" />
          </BtnLeft>
        </BtnWrapper>
        <Slider ref={this.sliderRef} {...settings}>
          {this.state.posters.slice(0, 1).map(poster => (
            <SliderItem key={poster.file_path} backdrop={`http://image.tmdb.org/t/p/w1280/${poster.file_path}`}>
              <PlayBtn onClick={this.props.play}>
                <img src={play} alt="" />
              </PlayBtn>
              <p>Trailer</p>
            </SliderItem>
          ))}
          {this.state.posters
            .slice(1, 5)
            .map(poster => (
              <SliderItem key={poster.file_path} backdrop={`http://image.tmdb.org/t/p/w1280/${poster.file_path}`} />
            ))}
        </Slider>
      </SliderWrapper>
    );
  }
}

const SliderItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  height: 130px;
  background: url(${props => props.backdrop});
  background-size: cover;
  background-position: center;
  text-align: center;
  > p {
    margin-top: 100px;
    font-weight: bold;
    font-size: 3rem;
  }
`;
const PlayBtn = styled.button`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-align: center;
  outline: none;
  border: none;
  background: #ffdd2d;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  img {
    width: 40px;
    height: 40px;
    transform: translate(3px,4px);
  }
`;
const SliderWrapper = styled.div`
  position: relative;
  h3 {
    margin: 20px 0;
  }
`;
const BtnWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
const Btn = Button.extend`
  display: inline-block;
  height: 35px;
  width: 35px;
  top: 0;
  right: 0;
  background-color: #ffdd2d;
  &:hover {
    background-color: #ffe355;
  }
`;
const BtnLeft = Btn.extend`
  right: 40px;
`;

export default LittleSlider;
