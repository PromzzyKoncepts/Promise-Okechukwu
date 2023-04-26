/* eslint-disable */
import React, { useState } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import Carousel from 'react-bootstrap/Carousel';

import '../assets/Stylesheets/custom-Boostrap.css';
import '../assets/Stylesheets/Slider.css';

import { Testimonials } from '../Data/aboutData';

const Testimonial = () => {
  return (
    <div className="carousel display">
      <h2>Recent Testimonials</h2>
      <Carousel
        variant="dark"
      >
        {Testimonials.map((item) => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-vector/digital-technology-background-with-abstract-wave-border_53876-117508.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <img src={item.image} alt="" />
              <h2>{ item.name } </h2>
              <small>{ item.title } </small>
              <p className="about-desc">"{ item.description}" </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
