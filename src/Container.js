import React, { Component } from 'react';
import Cover from './Cover.png';
import './ContainerStyle.css';

class ContainerGirl extends Component {

    render() {

      return (

      /* Cover-kuva jossa myös tekstiä liittyen sovellukseen. */ 

      <div class="container mx-auto">
        <div class="container card-body">
          <h3 class="card-title text-white">Satuja Porosten maasta- heidän itsensä kertomana.</h3>
          <img class="container" src={Cover} alt="Poroset esittäytyvät! Kuuntele ääneen luettuja satuja." />
          <h4 class="card-text text-white">Kuuntele porosten seikkailuja lapsille suunnattujen, ääneen luettujen satujen muodossa.</h4>
          <button class="btn btn-danger mx-auto d-block"><a href="https://play.google.com/store/apps/details?id=com.poroset.poroset" class=" text-white">Google Play-kauppa</a></button>
        </div>
      </div>
            );
  }
}

export default ContainerGirl;