import React, { Component } from 'react';
import PorosetCarousel from './PorosetCarousel';
import Container from './Container';

class Intro extends Component {
    render() {
      return (
        <div>
          <Container />
          <PorosetCarousel />
        </div>
            );
  }
}

export default Intro;