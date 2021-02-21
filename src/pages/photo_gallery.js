import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LandingLayout from '../components/LandingLayout';
import 'react-image-lightbox/style.css';

import Carousel from 're-carousel';
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
import PhotoGallery from '../components/Photogallery';

function PhotoGalleryPage() {
  const { t } = useTranslation();

  return (
    <LandingLayout fullMenu>
      <article id="pageMain">
        <header id="photoGalleryHeader">
          <h2>{t('photo_gallery:title')}</h2>
          <p>{t('photo_gallery:subHeading')}</p>
        </header>

        <section id="photogallery" className="wrapper style3 special">
          <div className="inner-gallery">
            <ul className="features">
              <PhotoGallery />
            </ul>
          </div>
        </section>

      </article>

    </LandingLayout>
  );
}

export default PhotoGalleryPage;
