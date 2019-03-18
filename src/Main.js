import React, { Component } from 'react';
import Intro from './Intro';
import Tietosuoja from './Tietosuoja';
import PorosetSovellus from './PorosetSovellus';
import { BrowserRouter, Route, Router, Link } from "react-router-dom";
import PorosetLogoBlueStroke from './PorosetLogoBlueStroke.png';
import Twitter_Birdpng from './Twitter_Birdpng.png';
import Facebook_logo from './Facebook_logo.png';
import Instagram_logo from './Instagram_logo.png';

/* Navikaatiopalkki sekä React Router-määritykset sisällön lataamiselle linkkien kautta. Index-sivulle
ladataan Intro-komponentti Main.js ja Footer.js -tiedostojen lisäksi. */ 

class Main extends Component {
    render() {

      return (
    <BrowserRouter>
      <div class="container">
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark">
                    <img src={PorosetLogoBlueStroke} width="250" height="70" alt="Poroset -audio stories with Augmented Reality logo" />
                
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon" />
                    </button>
                    
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/index"  class="nav-item nav-link text-white">Etusivu</Link>
                        <Link to="/poroset-sovellus"  class="nav-item nav-link text-white">Poroset-sovellus</Link>
                        <Link to="/tietosuoja"  class="nav-item nav-link text-white">Tietosuoja</Link>
                        <a class="nav-link text-white" href="https://www.twitter.com/porostenmaa"><img src={Twitter_Birdpng} width="20" height="20" alt="Twitter" /></a>
                        <a class="nav-link text-white" href="https://www.facebook.com/porostenmaa"><img src={Facebook_logo} width="20" height="20" alt="Facebook" /></a>
                        <a class="nav-link text-white" href="https://www.instagram.com/porostenmaa/"><img src={Instagram_logo} width="20" height="20" alt="Instagram" /></a>
                    </div>
                </div>
            </nav>

                <div className="content">
                        <Route exact path="/" component={Intro} />
                        <Route path="/index" exact component={Intro} />
                        <Route path="/poroset-sovellus" component={PorosetSovellus} />
                        <Route path="/tietosuoja" component={Tietosuoja} />
                </div>
        </div>
      </div>

    </BrowserRouter>

            );
  }
}

export default Main;