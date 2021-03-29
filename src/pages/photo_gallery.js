import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LandingLayout from '../components/LandingLayout';
import 'react-image-lightbox/style.css';

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
