import React from 'react';
import '../i18n/i18n';

import Typewriter from 'typewriter-effect';
import Lottie from 'lottie-react-web';
import { Link } from 'gatsby';

import { useTranslation } from 'react-i18next';
import LandingLayout from '../components/LandingLayout';
import Scroll from '../components/Scroll';

import scrollAnim from '../assets/images/lottie/scroll_down.json';
import historyTile from '../assets/images/landing/history_tile.png';
import photoTile from '../assets/images/landing/photos_tile.jpg';
import gardenTile from '../assets/images/landing/gardens_tile.jpg';
import servicesTile from '../assets/images/landing/services_tile.jpg';
import wineTile from '../assets/images/landing/wine_tile.jpg';
import faqTile from '../assets/images/landing/faq_tile.jpg';
import aboutUsTile from '../assets/images/landing/about_us_tile.jpg';
import i18n from '../i18n/i18n';
import FlagIcon from '../components/FlagIcon';

function IndexPage() {
  const { t } = useTranslation();

  return (
    <LandingLayout fullMenu={false}>
      <section id="banner">
        <div className="flag-container">
          <div id="bannerFlags" className="flags">
            <div onClick={() => {
              i18n.changeLanguage('pt');
              window.location.reload();
            }}
            >
              <FlagIcon code="pt" />
            </div>
            <div onClick={() => {
              i18n.changeLanguage('en');
              window.location.reload();
            }}
            >
              <FlagIcon code="gb" />
            </div>
          </div>
        </div>

        <div>
          <h2>{t('landing:heading')}</h2>
          <br />
          <div id="subHeading">
            <span>{t('landing:subHeading')}</span>
            <Typewriter
              onInit={(typewriter) => {
                const carouselArray = t('landing:subheadingTextCarousel');

                for (let i = 0; i < carouselArray.length; i += 1) {
                  typewriter.typeString(carouselArray[i])
                    .pauseFor(2500);

                  if (i !== carouselArray.length - 1) {
                    typewriter.deleteAll()
                      .callFunction((obj) => {
                        obj.elements.cursor.style.display = 'none';
                      });
                  }
                }

                typewriter.start();
              }}
            />
          </div>
        </div>

        <Scroll type="id" element="landingPageMain">
          <a href="#landingPageMain" className="more">
            <Lottie
              options={{
                animationData: scrollAnim,
              }}
              width="75%"
              height="75%"
            />
          </a>
        </Scroll>
      </section>

      <div id="landingPageMain">

        <section id="one" className="tiles">

          <article style={{ backgroundImage: `url(${aboutUsTile})` }}>
            <header className="major">
              <h3>{t('landing:weAre.title')}</h3>
              <p>{t('landing:weAre.description')}</p>
            </header>
            <Link to="/about_us" className="link primary" />
          </article>

          <article style={{ backgroundImage: `url(${servicesTile})` }}>
            <header className="major">
              <h3>{t('landing:services.title')}</h3>
              <p>{t('landing:services.description')}</p>
            </header>
            <Link to="/services" className="link primary" />
          </article>

          <article style={{ backgroundImage: `url(${photoTile})` }}>
            <header className="major">
              <h3>{t('landing:photos.title')}</h3>
              <p>{t('landing:photos.description')}</p>
            </header>
            <Link to="/photo_gallery" className="link primary" />
          </article>

          <article style={{ backgroundImage: `url(${historyTile})` }}>
            <header className="major">
              <h3>{t('landing:history.title')}</h3>
              <p>{t('landing:history.description')}</p>
            </header>
            <Link to="/history" className="link primary" />
          </article>

          <article style={{ backgroundImage: `url(${gardenTile})` }}>
            <header className="major">
              <h3>{t('landing:gardens.title')}</h3>
              <p>{t('landing:gardens.description')}</p>
            </header>
            <Link to="/gardens" className="link primary" />
          </article>

          <article style={{ backgroundImage: `url(${wineTile})` }}>
            <header className="major">
              <h3>{t('landing:vineyards.title')}</h3>
              <p>{t('landing:vineyards.description')}</p>
            </header>
            <Link to="/wine_stay" className="link primary" />
          </article>

          <article style={{ backgroundImage: `url(${faqTile})` }}>
            <header className="major">
              <h3>{t('landing:faq.title')}</h3>
              <p>{t('landing:faq.description')}</p>
            </header>
            <Link to="/faq" className="link primary" />
          </article>

        </section>
      </div>
    </LandingLayout>
  );
}

export default IndexPage;
