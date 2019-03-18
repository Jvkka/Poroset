import React, { Component } from 'react';
import Cover from './Cover.png';
import './ContainerStyle.css';
import poroset_augmented_reality_stories_google from './poroset_augmented_reality_stories_google.png';

class ContainerGirl extends Component {

    render() {

      return (

      /* Cover-kuva jossa myös tekstiä liittyen sovellukseen. */ 

      <div class="container mx-auto">
        <div class="container card-body">
          <h3 class="card-title text-white">Satuja Porosten maasta- heidän itsensä kertomana.</h3>
          <img class="container" src={Cover} alt="Poroset esittäytyvät! Kuuntele ääneen luettuja satuja." />
          <h4 class="card-text text-white">Kuuntele porosten seikkailuja lapsille suunnattujen, ääneen luettujen satujen muodossa.</h4>
          <a href="https://play.google.com/store/apps/details?id=com.poroset.poroset" class=" text-white"><img class="mx-auto d-block" src={poroset_augmented_reality_stories_google} width="215" height="83" alt="Poroset -audio stories with Augmented Reality at Google Play-store" /></a>
        </div>
      </div>
            );
  }
}

export default ContainerGirl;