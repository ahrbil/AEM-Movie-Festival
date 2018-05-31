import React from 'react';

import MeanSlider from '../Components/MeanSlider';
import TopMovies from '../Components/TopMovies';
import MapSection from '../Components/MapSection';

const Home = props => (
  <React.Fragment>
    <MeanSlider {...props} />
    <TopMovies {...props} />
    <MapSection />
  </React.Fragment>
);

export default Home;
