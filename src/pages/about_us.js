import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Lottie from 'lottie-react-web';
import Obfuscate from 'react-obfuscate';
import Carousel from 're-carousel'

import winePic1 from '../assets/images/wine_stay/wine1.jpg';
import lottieAnim from '../assets/images/lottie/sleeping';

import config from '../../config';
import LandingLayout from '../components/LandingLayout';
import IndicatorDots from '../components/CarouselDots'

import history1 from "../assets/images/about_us/history1.jpg"
import history2 from "../assets/images/about_us/history2.jpg"
import history3 from "../assets/images/about_us/history3.jpg"

function AboutUsPage() {
  const { t } = useTranslation();

  return (
    <LandingLayout fullMenu>
      <article id="aboutUsMain">
        <header id="aboutUsHeader">
          <h2>{t('about_us:heading')}</h2>
          <p style={{ margin: '0 2em 2em 2em' }}>{t('about_us:subHeading')}</p>

        </header>

        <section className="wrapper style5">
          <div className="inner">
            <h3>{t('about_us:history.title')}</h3>
            <p>{t('about_us:history.description1')}</p>
            <p>{t('about_us:history.description2')}</p>
            <hr />
            <p>{t('about_us:history.description3')}</p>
          </div>
        </section>

        <section className="wrapper-carousel style5">
          <div className="inner-carousel">
            <Carousel loop widgets={[IndicatorDots]}>
              <div style={{ backgroundImage:`url(${history1})`}} className="carousel-image"/>
              <div style={{ backgroundImage:`url(${history2})`}} className="carousel-image"/>
              <div style={{ backgroundImage:`url(${history3})`}} className="carousel-image"/>
            </Carousel>
          </div>
        </section>

        <section className="wrapper style5">
          <div className="inner">
            <h3>{t('wine_stay:wine.title')}</h3>

            <>
              <span
                className="image right"
                style={{
                  width: '80vh', fontSize: '0.8em', color: 'gray', textAlign: 'right',
                }}
              >
                <img src={winePic1} alt="" />
                {t('wine_stay:imageCaptions.wine')}
              </span>
              <p>{t('wine_stay:wine.description1')}</p>
              <p>{t('wine_stay:wine.description2')}</p>
            </>

            <h5>{t('wine_stay:wine.quote1Title')}</h5>
            <blockquote>{t('wine_stay:wine.quote1')}</blockquote>
            <p style={{ textAlign: 'right' }}>{t('wine_stay:wine.quote1Author')}</p>

            <h5>{t('wine_stay:wine.quote2Title')}</h5>
            <blockquote>{t('wine_stay:wine.quote2')}</blockquote>
            <p style={{ textAlign: 'right' }}>{t('wine_stay:wine.quote2Author')}</p>

          </div>
        </section>

        <section id="two" className="wrapper alt style2">
          <section id="staySpotlight" className="spotlight">
            <div className="image">
              <Lottie
                options={{
                  animationData: lottieAnim,
                }}
                width="100%"
                height="100%"
              />
            </div>
            <div className="content">
              <h2>{t('wine_stay:stay.title')}</h2>
              <p>{t('wine_stay:stay.description1')}</p>
            </div>
          </section>
        </section>

        <section id="cta" className="wrapper style4">
          <div className="inner">
            <header>
              <h2>{t('cta:title')}</h2>
              <p>{t('cta:description')}</p>
            </header>
            <ul className="actions stacked">
              <li>
                <Obfuscate email={`${config.emailContact}`} className={`icon`}>
                  <a className="button fit primary">
                    {t('cta:buttons.email')}
                  </a>
                </Obfuscate>
              </li>
              <li>
                <a href={`tel:${config.phoneContact}`} className="button fit">
                  {t('cta:buttons.call')}
                </a>
              </li>
            </ul>
          </div>
        </section>

      </article>
    </LandingLayout>
  );
}

export default AboutUsPage;
