import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import { button, Button } from './MeanSlider';

import rightArrow from '../assets/right-arrow.svg';
import leftArrow from '../assets/left-arrow.svg';

class LittleSlider extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
    // this.next = this.next.bind(this);
    // this.previous = this.previous.bind(this);
  }
  state = {
    loading: true,
    posters: [],
  };
  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }/images?api_key=abd82c60cb3ee473e5d38d6e8a90cfa6`,
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
  previous= () => {
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
          {this.state.posters
            .slice(1, 5)
            .map(poster => (
              <SliderItem>
                {this.state.loading ? (
                  <h2>loading</h2>
                ) : (
                  <img src={`http://image.tmdb.org/t/p/w1280/${poster.file_path}`} />
                )}
              </SliderItem>
            ))}
        </Slider>
      </SliderWrapper>
    );
  }
}

const SliderItem = styled.div`
  overflow: hidden;
  border-radius: 10px;
  margin-right: 40px;
  img {
    width: 280px;
    height: auto;
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
