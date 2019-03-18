import React, { Component } from 'react';
import PlayScreenshot from './PlayScreenshot.jpg';
import PlayScreenshot2 from './PlayScreenshot2.jpg';
import PlayScreenshot3 from './PlayScreenshot3.jpg';
import PlayScreenshot4 from './PlayScreenshot4.jpg';
import PlayScreenshot5 from './PlayScreenshot5.jpg';
import poroset_augmented_reality_stories_google from './poroset_augmented_reality_stories_google.png';

class GooglePlayCarousel extends Component {
    render() {

      return (
        
      /* Lisää Carousel-elementin joka näyttää kahta eri kuvaa. Sisältää ohjaimet kuvien välillä siirtämiseen. */ 
      <div class="container">
        <h3 class=" text-center text-white mt-4 mb-4">Poroset -sovellus Google Play-kaupassa</h3>
        <a href="https://play.google.com/store/apps/details?id=com.poroset.poroset" class=" text-white"><img class="mx-auto d-block" src={poroset_augmented_reality_stories_google} width="215" height="83" alt="Poroset -audio stories with Augmented Reality at Google Play-store" /></a>
        <p class=" text-center text-white mt-4 mb-2">Kuuntele mukaansatempaavia tarinoita vaikka nukkumaanmennessä.</p>
          <div>
            <div class="row mb-3">
              <div class="col-md-4">
              <img class="img-fluid mb-4" src={PlayScreenshot} width="319" height="509" alt="Poroset -audio stories with Augmented Reality at Google Play-store" />
              </div>
              <div class="col-md-4">
              <img class="img-fluid mb-4" src={PlayScreenshot2} width="319" height="509" alt="Poroset -audio stories with Augmented Reality at Google Play-store" />
              </div>
              <div class="col-md-4">
              <img class="img-fluid mb-4" src={PlayScreenshot3} width="319" height="509" alt="Poroset -audio stories with Augmented Reality at Google Play-store" />
              </div>

              <div class="col-md-4">
              <img class="img-fluid mb-4" src={PlayScreenshot4} width="319" height="509" alt="Poroset -audio stories with Augmented Reality at Google Play-store" />
              </div>
              <div class="col-md-4">
              <img class="img-fluid mb-4" src={PlayScreenshot5} width="319" height="509" alt="Poroset -audio stories with Augmented Reality at Google Play-store" />
              </div>
            </div>
          </div>
      </div>
            );
  }
}

export default GooglePlayCarousel;