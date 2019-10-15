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
import servicesTile from '../assets/images/landing/services_tile.jpg';
import productsTile from '../assets/images/landing/products_tile.jpg';
import faqTile from '../assets/images/landing/statue_tile.png';

function IndexPage() {
  const { t } = useTranslation();

  return (
    <LandingLayout fullMenu={false}>
      <section id="banner">
        <div>
          <h2>{t('landing:heading')}</h2>
          <br />
          <div id="subHeading">
            <span><strong>{t('landing:subHeading')}</strong></span>
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

        <Scroll type="id" element="one">
          <a href="#one" className="more">
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

          <article style={{ backgroundImage: `url(${historyTile})` }}>
            <header className="major">
              <h3>{t('landing:history.title')}</h3>
              <p>{t('landing:history.description')}</p>
            </header>
            <Link to="/history" className="link primary" />
          </article>

          <article style={{ backgroundImage: `url(${servicesTile})` }}>
            <header className="major">
              <h3>{t('landing:services.title')}</h3>
              <p>{t('landing:services.description')}</p>
            </header>
            <Link to="/services" className="link primary" />
          </article>

          <article style={{ backgroundImage: `url(${productsTile})` }}>
            <header className="major">
              <h3>{t('landing:wineAndStay.title')}</h3>
              <p>{t('landing:wineAndStay.description')}</p>
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
          {/*
        <article style={{ backgroundImage: `url(${historyTile})` }}>
          <header className="major">
            <h3>Consequat</h3>
            <p>Ipsum dolor sit amet</p>
          </header>
          <Link to="/landing" className="link primary" />
        </article>

        <article style={{ backgroundImage: `url(${historyTile})` }}>
          <header className="major">
            <h3>Etiam</h3>
            <p>Feugiat amet tempus</p>
          </header>
          <Link to="/landing" className="link primary" />
        </article>
        */}
        </section>
      </div>
    </LandingLayout>
  );
}

export default IndexPage;
