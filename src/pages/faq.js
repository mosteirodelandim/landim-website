import React from 'react';
import { useTranslation } from 'react-i18next';
import GoogleMapReact from 'google-map-react';
import Lottie from 'lottie-react-web';
import { Grid, Row, Col } from 'react-flexbox-grid';


import LandingLayout from '../components/LandingLayout';
import config from '../../config';

import lottieAnim from '../assets/images/lottie/pulsing';
import Obfuscate from 'react-obfuscate';

const Marker = () => (
  <div
    id="markerCenter"
  >
    <Lottie
      lat={config.mapLocation.center.lat}
      lng={config.mapLocation.center.lng}
      options={{
        animationData: lottieAnim,
      }}
      width="10vh"
      height="10vh"
    />
  </div>
);

function FaqPage() {
  const { t } = useTranslation();

  return (
    <LandingLayout fullMenu>
      <article id="pageMain">
        <header id="faqHeader">
          <h2>{t('faq:heading')}</h2>
          <p>{t('faq:subHeading')}</p>
        </header>

        <section id="faqSection" className="wrapper style3 special">
          <div className="inner">
            <header className="major">
              <p>{t('faq:description1')}</p>
              <hr />
            </header>
            <ul className="features">
              <li className="icon solid fa-church">
                <h3>{t('faq:church.title')}</h3>
                <p>
                  {t('faq:church.description')}
                </p>
              </li>
              <li className="icon solid fa-list-ul">
                <h3>{t('faq:services.title')}</h3>
                <p>
                  {t('faq:services.description')}
                </p>
              </li>
              <li className="icon solid fa-clock">
                <h3>{t('faq:time_limit.title')}</h3>
                <p>
                  {t('faq:time_limit.description')}
                </p>
              </li>
              <li className="icon solid fa-route">
                <h3>{t('faq:travel.title')}</h3>
                <p>
                  {t('faq:travel.description')}
                </p>
              </li>
              <li className="icon fa-calendar-check">
                <h3>{t('faq:per_weekend.title')}</h3>
                <p>
                  {t('faq:per_weekend.description')}
                </p>
              </li>
              <li className="icon solid fa-question-circle">
                <h3>{t('faq:more.title')}</h3>
                <p>
                  {t('faq:more.description')}
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section id="faqSectionWeAreHere">
          <div id="mapSection" className="inner">
            <Row className="m-0">
              <Col className="p-0 m-0" lg={6} style={{overflow: "hidden"}}>
                <Row className="p-0 m-0" lg={10}>
                  <ul
                    className="features"
                    style={{
                      width: '100%', height: '50vh'
                    }}
                  >
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: config.apiKey }}
                      defaultCenter={config.mapLocation.center}
                      defaultZoom={config.mapLocation.zoom}
                    >
                      <Marker
                        lat={config.mapLocation.center.lat}
                        lng={config.mapLocation.center.lng}
                      />
                    </GoogleMapReact>
                  </ul>
                </Row>
                <Row className="p-0 m-0" lg={10}>
                  <ul id="mapLogosWrapper" className="actions fit large">
                    <li>
                      <a onClick={() => window.open(config.waze)} className="button primary large fit icon brands fa-waze">
                        Waze
                      </a>
                    </li>
                    <li>
                      <a onClick={() => window.open(config.googleMaps)} className="button primary large fit icon solid fa-map-marked ">
                        Google
                      </a>
                    </li>
                  </ul>
                </Row>
              </Col>
              <Col className="p-0 information" lg={6}>
                <section id="cta" className="wrapper style4">
                  <div className="inner center">
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
                        <Obfuscate tel={`${config.phoneContact}`} className="button fit">
                          {t('cta:buttons.call')}
                        </Obfuscate>
                      </li>
                    </ul>
                  </div>
                </section>


              </Col>
            </Row>
          </div>
        </section>

      </article>
    </LandingLayout>
  );
}

export default FaqPage;
