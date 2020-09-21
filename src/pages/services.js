import React from 'react';
import { useTranslation } from 'react-i18next';
import PhotoGallery from '../components/Photogallery';
import config from '../../config';

import LandingLayout from '../components/LandingLayout';

import cloisterPic from '../assets/images/services/cloister.jpg';
import gardenPic from '../assets/images/services/garden.jpg';
import roomPic from '../assets/images/services/rooms.jpg';
import churchPic from '../assets/images/services/church.jpg';
import Obfuscate from 'react-obfuscate';

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

      </article>
    </LandingLayout>
  );
}

export default ServicesPage;
