import React, { Component } from 'react';

class Textfield extends Component {
    render() {
      return (

    <div class="text-white text-justify">
    <h4>Tietosuoja ja käyttöehdot</h4>
    <p></p>
        <p> Kiitos kun käytät sovellusta. Sovelluksen (jäljempänä myös 'palvelu', 'sivusto', 'palveluntarjoaja', 'Poroset') käyttöön liittyvät seuraavat käyttöehdot ja tietosuojakäytänteet, joihin käyttäjän tulee tutustua huolellisesti ennen sovelluksen käyttämistä. Kolmansien osapuolten tuottamiin sisältöihin sovelletaan lisäksi niiden omia käyttöehtoja, joihin käyttäjä sitoutuu käyttäessään sovellusta ja joihin on mahdollisesti tarjottu linkki tai vähintään nimi 
					jonka perusteella käyttäjä voi etsiä kunkin kolmannen osapuolen sovelluksen, palvelun ja palveluntarjoajan käyttöehdot sekä tietosuojakäytännöt eli sen, miten he käsittelevät tietoja.
		Tiivistys sovelluksesta ja sen tietosuojasta:
		- Emme käytä mainoksia (lue tarkemmin kolmansien osapuolten osuudesta sovellukseen)
		- Sovellus on tehty yksinkertaiseksi ja lapsille sopivaksi
		- Sovellus tarjoaa ylimääräisiä satuja, joista käyttäjän on maksettava mikäli haluaa ne käyttöönsä
		- Mahdolliset ostotapahtumat tapahtuvat Google Play-kaupan tai App Storen kautta, eikä meillä ole vastuuta siitä tai sen käsittelystä. Meille tulevat tositteet maksutapahtumista tallennetaan.</p>
		
		<h4>Käyttöoikeuteen liittyvät seuraavat rajoitukset:</h4>

		<p>Käyttäjällä ei ole oikeutta muokata aineistoa millään tavalla eikä jäljentää, 
		esittää julkisesti tai muulla tavoin julkaista aineistoa tai käyttää sitä kaupallisessa tarkoituksessa, 
		ellei asiasta sovita erikseen Palveluntarjoajan kanssa. Tämä ei koske näyttökuvien tai näytöstä kuvattujen videoiden tallentamista omaan käyttöön tai niiden jakamista julkisesti.

		Sovelluksen sisältöä ei saa esittää omanaan. Sovelluksen sisältöä ei saa kopioida, tuottaa, myydä tai hyödyntää pois lukien yksityiseen käyttöön itse tehtyjä Palveluun liittyviä aineistoja (kuten omat piirustukset) joita ei käytetä kaupalliseen tarkoitukseen.

		Sovellus on suunnattu lapsille ja sen käyttäminen on tehty lapsiystävälliseksi ja helpoksi. Vanhempien vastuulla on lasten älylaitteen käytön ja käyttöajan valvonta sekä
		ostosten tekemisen rajoittaminen, mikäli se on tarpeellista. Sovelluksessa on mahdollista tehdä pieniä ostoksia (uusia satuja ilmaisten satujen lisäksi) jos laitteeseen on lisätty luotto- tai pankkikortin tiedot Google Play-kauppaan tai
		Applen App Storeen. Ostoksia voi tehdä jos käyttäjä ja hänen huoltaja (alle 16-vuotiaiden lasten kohdalla) suostuvat ostosten tekemiseen. Ostoksen vaativat aina tunnistautumisen sovelluskauppaan sekä
		maksun hyväksymisen joko pin-koodilla, sormenjälkitunnistuksella, salasanalla tai vastaavalla menetelmällä. Poroset-sovellus ei vastaa ostosten toimivuudesta, tietoturvasta eikä luotettavuudesta, sillä
		ne tehdään kolmannen osapuolen kautta (Google Play-kauppa, Apple App Store), jolloin mahdollisissa ongelmatilanteissa on käännyttävä heidän puoleen.</p>


		<h4>Oikeudellinen vastuu ja immateriaalioikeudet</h4>

		<p>Sovellus ja sen sisältämä aineisto sisältävät tekijänoikeuslakien ja kansainvälisten tekijänoikeussopimusten tarkoittamaa, tekijänoikeudellisesti suojattua aineistoa. Sovelluksen omistusoikeus sekä tekijänoikeus ja muut siihen liittyvät immateriaalioikeidet (mukaan lukien esimerkiksi tekijänoikeudet, rekisteröimättömät ja rekisteröidyt tavaramerkki- ja mallioikeudet, patentit, domain-nimet, liikesalaisuudet sekä tietokantaoikeudet) kuuluvat Palveluntarjoajalle, sen yhteistyötahoille tai muille oikeudenhaltijoille.  Tässä sopimuksessa sovelletaan Suomen lakia ja Euroopan Unionin yleistä tietosuoja-asetusta ja tietosuojalakia (GDPR).</p>

		<h4>Linkit ulkopuolisiin www-sivustoihin</h4>

		<p>Palveluntarjoaja ei valvo kolmansien osapuolten Internet-sivustojen sisältöä. Palvelu saattaa sisältää linkkejä ulkoisille sivustoille, joiden oikeellisuudesta, luotettavuudesta tai tietoturvasta Palveluntarjoaja ei vastaa.</p>

		<p>Kolmansien osapuolten sivustojen käyttäminen on käyttäjän omalla vastuulla. Ulkopuoliset linkit eivät ole osoitus mistään omistussuhteesta tai siitä, että Palveluntarjoaja tukisi linkitettyä Internet-sivustoa tai hyväksyisi linkitetyille Internet-sivustoilla olevan materiaalin, tai että Palveluntarjoajalla olisi oikeus kyseisten sivustojen tavaramerkkeihin, toiminimiin tai tekijänoikeudella suojattuun aineistoon.</p>

		
		<h4>Sovelluksen sisäiset ostot</h4>
		<p>Sovellus saattaa tarjota sovelluksen sisäisiä ostoja, joita ostamalla käyttäjä saa lisää sisältöä ilmaisen sisällön ohella. Sovelluksen sisäiset ostot (in-app purchases) tapahtuvat Google Play-kaupan sekä Apple App Storen kautta, 
		jolloin niiden käytössä sovelletaan heidän käyttöehtoja sekä tietosuojakäytänteitä. Käyttäjä on vastuussa ostoksista ja alaikäinen käyttäjä tarvitsee huoltajan luvan ostosten tekemiseen. 
		Palveluntarjoaja ei vastaa mahdollisista ansionmenetyksistä, käyttäjälähtöisestä ostosten väärinkäytöstä eikä ostostapahtuman tietoturvasta.</p>
		
		<h4>Mainokset</h4>
		<p>Sovellus saattaa hyödyntää mainoksia, joiden kohderyhmänä ovat lapset, varmistaakseen mainosten sopivuuden sovelluksen kohdeyleisölle. 
		Palveluntarjoaja ei kuitenkaan vastaa mahdollisista virheistä mainosten suhteen eikä niiden oikeellisuudesta, luotettavuudesta tai sopivuudesta palveluun. 
		Käyttäjä hyväksyy mainokset käyttäessään sovellusta ja klikatessaan niitä. Mainoksien sisällöstä vastaa niiden tuottaja ja muut kolmannen osapuolen toimijat jotka ovat niiden 
		julkaisussa mukana.</p>

		<h4>Tietosuoja</h4>

		<p>Sovellus ja sivusto eivät kerää, säilytä tai käsittele käyttäjien henkilökohtaisia tietoja, mutta sovellus hyödyntää kolmansien osapuolten teknologiaa ja kolmannet osapuolet voivat ja saattavat kerätä tiettyjä käyttäjiltä saatavia tietoja. Kolmansien osapuolten mahdollisesti keräämää tietoa voivat olla muun muassa laitteen nimi, IP-osoite, Google-kaupassa käytettävä tunnus, maksutapahtumissa käytettävät tilit (Google Play sekä Apple App Store) ja muut laitekohtaiset tiedot. 
		Poikkeuksena laitteeseen liittyvien tietojen käsittelystä on sovelluksen virheiden (= sovellus ei toimi halutulla tavalla) ja muiden käyttäjän raportoimien asioiden korjaaminen joihin voidaan tarvittaessa pyytää ja käyttää saatavilla olevia tietoja (sisältäen IP-osoite, IMEI-koodi ja muut tarvittavat tiedot) korjauksen mahdollistamiseksi. Tietoja ei tulla säilyttämään.
		Ostotapahtumat käsittelee ja niihin liittyvän datan säilyttää ja käyttää omissa tietosuojakäytännöissään mainitsemilla tavoillaan kolmas osapuoli (mainitut sovelluskaupat jotka tarjoavat Google LLC,sekä Apple, Inc.).  
		Palveluntarjoaja voi säilyttää ostotapahtumien tositteet verotusta varten, joissa ilmenee ostoksen laatu, määrä ja maksajan tiedot.
		
		Mainostajat saattavat kerätä tietoja Palveluntarjoajasta riippumatta. Palveluntarjoaja ei ole vastuussa mainosten sisällöstä, oikeellisuudesta, luotettavuudesta tai tietoturvasta. Mainosten katominen ja niiden klikkaaminen ovat käyttäjän omalla vastuulla, eikä Palveluntarjoaja vastaa mistään niihin liittyvästä toiminnasta tai toiminnan puutteesta.</p>
		
		<p>Sovellus on kehitetty Unity-pelimoottorilla ja käyttäjä hyväksyy heidän käyttöehdot sekä tietosuojan. Lisätietoja Unity ja Unity Ads tietosuojasta voi löytää alla olevasta linkistä.</p>
		<p>Tämä sovellus käyttää ARCore-teknologiaa, jonka tarjoaa Google LLC ja joka perustuu tähän <a href="https://policies.google.com/privacy">Tietosuojakäytäntöön.</a></p>
		
		<p><a href="https://unity3d.com/legal/privacy-policy">Unity ja Unity Ads Tietosuojakäytäntö</a></p>
		
		<p><a href="http://scripts.sil.org/OFL">Finlandica-fontin lisenssi</a></p>
		

    </div>
            );
  }
}

export default Textfield;