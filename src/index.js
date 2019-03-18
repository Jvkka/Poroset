import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import Footer from './Footer';

import * as serviceWorker from './serviceWorker';


/* Ladataan Main.js ja Footer.js -tiedostot. Lisäksi Etusivulle tulee automaattisesti Intro.js
sisältöineen, sillä Route-määritykseen on (Index.js) asetettu poluksi /index ja komponentiksi Intro.js */

ReactDOM.render(
    <div>
        <Main />
        <Footer />
    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
