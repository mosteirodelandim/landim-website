import React from 'react';
import '../i18n';

import Typewriter from 'typewriter-effect';
import Lottie from 'lottie-react-web';
import { Link } from 'gatsby';

import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import scrollAnim from '../assets/lottie/scroll_down.json';
import historyTile from '../assets/images/history_tile.png';
import servicesTile from '../assets/images/services_tile.jpg';
import productsTile from '../assets/images/products_tile.jpg';
import faqTile from '../assets/images/statue_tile.png';

import config from '../../config';

function IndexPage() {
  const { t } = useTranslation();

  return (
    <Layout fullMenu={false}>
      <section id="banner">
        <div>
          <h2>{t('heading')}</h2>
          <br />
          <div id="subHeading">
            <span><strong>{config.subHeading}</strong></span>
            <Typewriter
              onInit={(typewriter) => {
                const carouselArray = config.subheadingTextCarousel;

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

      <div id="main">
        <section id="one" className="tiles">

          <article style={{ backgroundImage: `url(${historyTile})` }}>
            <header className="major">
              <h3>History</h3>
              <p>From luscious gardens to a timeless cloister,
                  Mosteiro de Landim carries centuries of history
                  and tradition.
              </p>
            </header>
            <Link to="/history" className="link primary" />
          </article>

          <article style={{ backgroundImage: `url(${servicesTile})` }}>
            <header className="major">
              <h3>Services</h3>
              <p>Get to know the services we provide for all types of smile-inducing events.</p>
            </header>
            <Link to="/services" className="link primary" />
          </article>

          <article style={{ backgroundImage: `url(${productsTile})` }}>
            <header className="major">
              <h3>Wine & Stay</h3>
              <p>Wander through this family-run historic wine farm and national heritage site
                  with our locally-made white wine.
              </p>
            </header>
            <Link to="/wine_stay" className="link primary" />
          </article>

          <article style={{ backgroundImage: `url(${faqTile})` }}>
            <header className="major">
              <h3>FAQ</h3>
              <p>Details on how to reach out to us and answering some of the
                  most frequent asked questions.
              </p>
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
    </Layout>
  );
}

export default IndexPage;
