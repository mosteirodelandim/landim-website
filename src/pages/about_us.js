import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Lottie from 'lottie-react-web';
import Obfuscate from 'react-obfuscate';
import Carousel from 're-carousel'
import { Container, Row, Col } from 'react-grid-system';


import bookAnim from '../assets/images/lottie/book';
import wineAnim from '../assets/images/lottie/wines';

import config from '../../config';
import LandingLayout from '../components/LandingLayout';
import IndicatorDots from '../components/CarouselDots'

import history1 from "../assets/images/about_us/history1.jpg"
import history2 from "../assets/images/about_us/history2.jpg"
import wine1 from "../assets/images/about_us/wines1.jpg"
import wine2 from "../assets/images/about_us/wines2.jpg"

import family1 from "../assets/images/about_us/family1.jpg"
import { Link } from 'gatsby';

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
            <header>
             <h3 className="aboutUsTitle">{t('about_us:history.title')}</h3>
             <p>{t('about_us:history.subtitle')}</p>
            </header>
            <p>{t('about_us:history.description1')}</p>
            <p>{t('about_us:history.description2')}</p>
            <hr />
            <p>{t('about_us:history.description3')}</p>
          </div>

          <Container>
            <Row>
              <Col sm={6}>
                <span className="image fit"><img src={history1} alt="" /></span>
              </Col>
              <Col sm={6}>
                <span className="image fit"><img src={history2} alt="" /></span>
              </Col>
            </Row>
          </Container>

        </section>





        <section className="wrapper style5">
          <div className="inner">
            <header>
              <h3 className="aboutUsTitle">{t('about_us:family.title')}</h3>
              <p>{t('about_us:family.subtitle')}</p>
            </header>

            <p>{t('about_us:family.description1')}</p>

            <blockquote>{t('about_us:family.quote1.quote')}</blockquote>
            <p style={{ textAlign: 'right' }}>{t('about_us:family.quote1.quote_author')}</p>

            <div className="box alt">
              <div className="row gtr-50 gtr-uniform">
                <div className="col-12"><span className="image fit"><img src={family1} alt="" /></span></div>
              </div>
            </div>

            <p>{t('about_us:family.description2')}</p>

          </div>
        </section>

        <section id="two" className="wrapper alt style2">
          <section id="historySpotlight" className="spotlight">
            <div className="spotlight-container">
              <div>
                <Lottie
                  options={{
                    animationData: bookAnim,
                  }}
                  width="100%"
                  height="100%"
                  style={{marginBottom: "-60px", marginTop: "-60px"}}
                />
              </div>
              <div className="content">
                <h2>{t('about_us:history.lottie.title')}</h2>
                <p>{t('about_us:history.lottie.description')}<Link to="/history">{t('about_us:history.lottie.hyperlink')}</Link>.</p>
              </div>
            </div>
          </section>
        </section>





        <section className="wrapper style5">
          <div className="inner">
            <header>
              <h3 className="aboutUsTitle">{t('about_us:wines.title')}</h3>
              <p>{t('about_us:wines.subtitle')}</p>
            </header>

            <p>{t('about_us:wines.description1')}</p>
            <p>{t('about_us:wines.description2')}</p>
          </div>
        </section>

        <section className="wrapper-carousel style5">
          <div className="inner-carousel">
            <Carousel loop widgets={[IndicatorDots]}>
              <div style={{ backgroundImage:`url(${wine1})`}} className="carousel-image"/>
              <div style={{ backgroundImage:`url(${wine2})`}} className="carousel-image"/>
            </Carousel>
          </div>
        </section>

        <section id="two" className="wrapper alt style2">
          <section id="winesSpotlight" className="spotlight">
            <div className="spotlight-container">
              <div>
                <Lottie
                  options={{
                    animationData: wineAnim,
                  }}
                  width="70%"
                  height="100%"
                  style={{marginLeft: "10vw", marginBottom: "3vh"}}
                />
              </div>
              <div className="content">
                <h2>{t('about_us:wines.lottie.title')}</h2>
                <p>{t('about_us:wines.lottie.description')}<Link to="/wine_stay">{t('about_us:wines.lottie.hyperlink')}</Link>.</p>
              </div>
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
