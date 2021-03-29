import React from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from 're-carousel';

import LandingLayout from '../components/LandingLayout';

import cloisterPic from '../assets/images/services/cloister.jpg';
import gardenPic from '../assets/images/services/garden.jpg';
import roomPic from '../assets/images/services/rooms.jpg';
import churchPic from '../assets/images/services/church.jpg';
import IndicatorDots from '../components/CarouselDots';

import church_cloister1 from '../assets/images/photo-gallery/cloister_church/church_cloister1.jpg';
import church_cloister2 from '../assets/images/photo-gallery/cloister_church/church_cloister2.jpg';
import church_cloister3 from '../assets/images/photo-gallery/cloister_church/church_cloister3.jpg';
import church_cloister4 from '../assets/images/photo-gallery/cloister_church/church_cloister4.jpg';
import church_cloister5 from '../assets/images/photo-gallery/cloister_church/church_cloister5.jpg';

import gardens_forest1 from '../assets/images/photo-gallery/gardens_forest/gardens_forest1.jpg';
import gardens_forest2 from '../assets/images/photo-gallery/gardens_forest/gardens_forest2.jpg';
import gardens_forest3 from '../assets/images/photo-gallery/gardens_forest/gardens_forest3.png';
import gardens_forest4 from '../assets/images/photo-gallery/gardens_forest/gardens_forest4.jpg';
import gardens_forest5 from '../assets/images/photo-gallery/gardens_forest/gardens_forest5.jpg';


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

        <section className="wrapper style5">
          <div className="inner">
            <h3>{t('services:secondParagraph.title')}</h3>
            <p>{t('services:secondParagraph.description')}</p>
          </div>
        </section>

        <section className="wrapper-carousel style5">
          <div className="inner-carousel">
            <Carousel loop widgets={[IndicatorDots]}>
              <div style={{ backgroundImage: `url(${church_cloister1})` }} className="carousel-image" />
              <div style={{ backgroundImage: `url(${church_cloister2})` }} className="carousel-image" />
              <div style={{ backgroundImage: `url(${church_cloister3})` }} className="carousel-image" />
              <div style={{ backgroundImage: `url(${church_cloister4})` }} className="carousel-image" />
              <div style={{ backgroundImage: `url(${church_cloister5})` }} className="carousel-image" />
              <div style={{ backgroundImage: `url(${gardens_forest1})` }} className="carousel-image" />
              <div style={{ backgroundImage: `url(${gardens_forest2})` }} className="carousel-image" />
              <div style={{ backgroundImage: `url(${gardens_forest3})` }} className="carousel-image" />
              <div style={{ backgroundImage: `url(${gardens_forest4})` }} className="carousel-image" />
              <div style={{ backgroundImage: `url(${gardens_forest5})` }} className="carousel-image" />
            </Carousel>
          </div>
        </section>

      </article>
    </LandingLayout>
  );
}

export default ServicesPage;
