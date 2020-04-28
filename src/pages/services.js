import React from 'react';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import PhotoGallery from '../components/Photogallery';
import config from '../../config';

import LandingLayout from '../components/LandingLayout';

import cloisterPic from '../assets/images/services/cloister.jpg';
import gardenPic from '../assets/images/services/garden.jpg';
import roomPic from '../assets/images/services/rooms.jpg';
import churchPic from '../assets/images/services/church.jpg';

function ServicesPage() {
  const { t } = useTranslation();

  return (
    <LandingLayout fullMenu>
      <article id="pageMain">
        <header id="servicesHeader">
          <h2>{t('services:heading')}</h2>
          <p className="subHeadingTilePage">{t('services:subHeading')}</p>
        </header>
        <section className="wrapper style5">
          <div className="inner">
            <h3>{t('services:firstParagraph.title')}</h3>
            <p>{t('services:firstParagraph.description1')}</p>
            <p>{t('services:firstParagraph.description2')}</p>
            <hr />
            <p>{t('services:firstParagraph.description3')}</p>
          </div>
        </section>

        <section id="spotlights" className="wrapper alt style2">
          <section className="spotlight">
            <div className="image">
              <img src={cloisterPic} alt="" />
            </div>
            <div className="content">
              <h2>{t('services:spotlights.cloister.title')}</h2>
              <p>{t('services:spotlights.cloister.description')}</p>
            </div>
          </section>
          <section className="spotlight">
            <div className="image">
              <img src={gardenPic} alt="" />
            </div>
            <div className="content">
              <h2>{t('services:spotlights.gardens.title')}</h2>
              <p>{t('services:spotlights.gardens.description')}</p>
            </div>
          </section>
          <section className="spotlight">
            <div className="image">
              <img src={roomPic} alt="" />
            </div>
            <div className="content">
              <h2>{t('services:spotlights.rooms.title')}</h2>
              <p>{t('services:spotlights.rooms.description')}</p>
            </div>
          </section>
          <section className="spotlight">
            <div className="image">
              <img src={churchPic} alt="" />
            </div>
            <div className="content">
              <h2>{t('services:spotlights.church.title')}</h2>
              <p>{t('services:spotlights.church.description')}</p>
            </div>
          </section>
        </section>

        <section id="photogallery" className="wrapper style3 special">
          <div className="inner">
            <header className="major" style={{ alignText: 'center' }}>
              <h2>{t('services:photogallery.title')}</h2>
              <p>{t('services:photogallery.description')}</p>
            </header>
            <ul className="features">
              <PhotoGallery />
            </ul>
          </div>
        </section>

        <section id="cta" className="wrapper style4">
          <div className="inner">
            <header>
              <h2>{t('cta:title')}</h2>
              <p>{t('cta:description')}</p>
            </header>
            <ul className="actions stacked">
              <li>
                <a href={`mailto:${config.emailContact}`} className="button fit primary">
                  {t('cta:buttons.email')}
                </a>
              </li>
              {isMobile
              && (
              <li>
                <a href={`tel:${config.phoneContact}`} className="button fit">
                  {t('cta:buttons.call')}
                </a>
              </li>
              )}
            </ul>
          </div>
        </section>

      </article>
    </LandingLayout>
  );
}

export default ServicesPage;
