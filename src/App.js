import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PorosetLogoBlueStroke from './PorosetLogoBlueStroke.png';

function Index() {
  return <h2></h2>;
}

function PorosetSovellus() {
  return <h2></h2>;
}

function Tietosuoja() {
  return <h2></h2>;
}

function AppRouter() {
  return (

    /* Navikaatio ja brändäys. Sisältää Poroset-logon sekä linkit some-kanaviin. */

    <Router>
      <div class="container">
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark">
          <a class="navbar-brand text-white" href="/PorosetLogoBlue.png">
          <img src={PorosetLogoBlueStroke} width="250" height="70" alt="Poroset -audio stories with Augmented Reality logo"></img>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
                    <Link to="/"  class="nav-item nav-link text-white">Etusivu</Link>
                    <a class="nav-link text-white" href="https://www.twitter.com/porostenmaa">Twitter</a>
                    <a class="nav-link text-white" href="https://www.facebook.com/porostenmaa">Facebook</a>
                    <a class="nav-link text-white" href="https://www.instagram.com/porostenmaa/">Instagram</a>
          </div>
          </div>
          </nav>
        </div>

        <Route path="/" exact component={Index}/>
        <Route path="/poroset-sovellus.html/" component={PorosetSovellus}/>
        <Route path="/tietosuoja.html" component={Tietosuoja}/>
      </div>
    </Router>
  );
}
export default AppRouter;