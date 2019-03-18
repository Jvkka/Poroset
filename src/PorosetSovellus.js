import React, { Component } from 'react';
import GooglePlayCarousel from './GooglePlayCarousel';

/* Sisältää yleistä tietoa sovelluksesta. */

class PorosetSovellus extends Component {
    render() {
      return (
        <div class="container">
            <GooglePlayCarousel />        
        </div>
            );
  }
}

export default PorosetSovellus;