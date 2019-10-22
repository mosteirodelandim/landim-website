import React from 'react';
import { useTranslation } from 'react-i18next';
import GoogleMapReact from 'google-map-react';
import Lottie from 'lottie-react-web';
import LandingLayout from '../components/LandingLayout';
import config from '../../config';

import lottieAnim from '../assets/images/lottie/pulsing';

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

        <section className="wrapper style3 special" style={{ paddingTop: '3em' }}>
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

        <section className="wrapper style3 special" style={{ paddingTop: '3em' }}>
          <div id="mapSection" className="inner">
            <header className="major">
              <h2>{t('faq:map_section.title')}</h2>
              <hr />
            </header>
            <ul
              className="features"
              style={{
                width: '100%', height: '80vh', border: 'solid 1em', borderColor: 'brown',
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
          </div>
        </section>

        <section className="wrapper style3 special" style={{ paddingTop: '3em' }}>
          <div className="inner">
            <section>
              <ul id="mapLogosWrapper" className="actions fit large">
                <div className="icon brands fa-waze" onClick={() => window.open(config.waze)} />
                <div className="icon solid fa-map-marked" onClick={() => window.open(config.googleMaps)} />
              </ul>
            </section>
          </div>
        </section>

        <section id="cta" className="wrapper style4">
          <div className="inner">
            <header>
              <h2>{t('cta:mapsTitle')}</h2>
              <p>{t('cta:description')}</p>
            </header>
            <ul className="actions stacked">
              <li>
                <a href={`mailto:${config.emailContact}`} className="button fit primary">
                  {t('cta:buttons.email')}
                </a>
              </li>
            </ul>
          </div>
        </section>

      </article>
    </LandingLayout>
  );
}

export default FaqPage;
