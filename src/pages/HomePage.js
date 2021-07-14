import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import '../styling/Pages.css';

function HomePage(props) {
  return (
    <div className="background-color">
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
      <Carousel />
    </div>
  );
}

export default HomePage;
