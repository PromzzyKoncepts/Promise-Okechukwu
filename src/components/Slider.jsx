/* eslint-disable */
import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import {
  CCarousel, CCarouselItem, CCarouselCaption, CImage,
} from '@coreui/react';
import budgetApp from '../assets/images/BudgetApp.png';
import covidTracker from '../assets/images/CovidTracker.png';
import spacHub from '../assets/images/Spacehub.png';
import pranMovies from '../assets/images/Pranmovies.png';
import '../assets/Stylesheets/Slider.css';
import '../assets/Stylesheets/custom-Boostrap.css';

const Slider = () => (
  <div className="carousel">
    <h2>Top Recent Projects</h2>
    <CCarousel controls transition="crossfade" indicators dark>
      <CCarouselItem>
        <div className="image-wrapper">
          <CImage className="d-block w-100" src={budgetApp} alt="slide 1" />
          <div className="image-links">
            <a href="https://budget-app-niq8.onrender.com" target="_blank" className="live-demo-link" rel="noreferrer">Live Demo</a>
            <a href="https://github.com/PromzzyKoncepts/Budget-App" target="_blank" className="github-link" rel="noreferrer">Github</a>
          </div>
        </div>
        <CCarouselCaption className="d-none d-md-block">
          <h3>Budget App</h3>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <div className="image-wrapper">
          <CImage className="d-block w-100" src={covidTracker} alt="slide 2" />
          <div className="image-links">
            <a href="#" target="_blank" className="live-demo-link">Live Demo</a>
            <a href="#" target="_blank" className="github-link">Github</a>
          </div>
        </div>
        <CCarouselCaption className="d-none d-md-block">
          <h3>Covid19 Tracker</h3>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <div className="image-wrapper">
          <CImage className="d-block w-100" src={spacHub} alt="slide 3" />
          <div className="image-links">
            <a href="#" target="_blank" className="live-demo-link">Live Demo</a>
            <a href="#" target="_blank" className="github-link">Github</a>
          </div>
        </div>
        <CCarouselCaption className="d-none d-md-block">
          <h3>Spacehub App</h3>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <div className="image-wrapper">
          <CImage className="d-block w-100" src={pranMovies} alt="slide 3" />
          <div className="image-links">
            <a href="#" target="_blank" className="live-demo-link">Live Demo</a>
            <a href="#" target="_blank" className="github-link">Github</a>
          </div>
        </div>
        <CCarouselCaption className="d-none d-md-block">
          <h3>PranMovies App</h3>
        </CCarouselCaption>
      </CCarouselItem>
    </CCarousel>
  </div>
);

export default Slider;
