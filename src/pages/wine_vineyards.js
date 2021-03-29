import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Lightbox from 'react-image-lightbox';
import { Col, Grid, Row } from 'react-flexbox-grid';
import LandingLayout from '../components/LandingLayout';
import 'react-image-lightbox/style.css';

import winePic1 from '../assets/images/wine_vineyards/wine1.jpg';

import spaces1 from '../assets/images/wine_vineyards/feature_1.jpg';
import spaces2 from '../assets/images/wine_vineyards/feature_2.jpg';
import spaces3 from '../assets/images/wine_vineyards/feature_3.jpg';

const images = [winePic1];

function WineStayPage() {
  const { t } = useTranslation();
  const [lightboxIsOpen, setToggleLightbox] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const captions = [t('wine_vineyards:imageCaptions.wine')];

  return (
    <LandingLayout fullMenu>
      <article id="wineMain">
        <header id="winestayHeader">
          <h2>{t('wine_vineyards:title')}</h2>
          <p>{t('wine_vineyards:subHeading')}</p>
        </header>
        <section className="wrapper style5">
          <div className="inner">
            <h3>{t('wine_vineyards:wine.title')}</h3>

            <>
              <span
                onClick={() => {
                  setPhotoIndex(images.indexOf(winePic1));
                  setToggleLightbox(true);
                }}
                className="image right"
                style={{
                  width: '80vh', fontSize: '0.8em', color: 'gray', textAlign: 'right',
                }}
              >
                <img src={winePic1} alt="" />
                {t('wine_vineyards:imageCaptions.wine')}
              </span>
              <p>{t('wine_vineyards:wine.description1')}</p>
              <p>{t('wine_vineyards:wine.description2')}</p>
            </>

            <h5>{t('wine_vineyards:wine.quote1Title')}</h5>
            <blockquote>{t('wine_vineyards:wine.quote1')}</blockquote>
            <p style={{ textAlign: 'right' }}>{t('wine_vineyards:wine.quote1Author')}</p>

            <h5>{t('wine_vineyards:wine.quote2Title')}</h5>
            <blockquote>{t('wine_vineyards:wine.quote2')}</blockquote>
            <p style={{ textAlign: 'right' }}>{t('wine_vineyards:wine.quote2Author')}</p>

          </div>
        </section>

        <section className="wrapper style5">
          <div className="inner">
            <header>
              <h3>{t('wine_vineyards:vines.title')}</h3>
            </header>

            <p>{t('wine_vineyards:vines.description1')}</p>
          </div>

          <Grid>
            <Row>
              <Col lg={4} md={6}>
                <span className="image fit hover-container">
                  <img src={spaces1} alt="" />
                  <div className="overlay">
                    <div className="text">
                      <h2>{t('wine_vineyards:images.image1.title')}</h2>
                      <span>{t('wine_vineyards:images.image1.subtitle')}</span>
                    </div>
                  </div>
                </span>
              </Col>
              <Col lg={4} md={6}>
                <span className="image fit hover-container">
                  <img src={spaces2} alt="" />
                  <div className="overlay">
                    <div className="text">
                      <h2>{t('wine_vineyards:images.image2.title')}</h2>
                      <span>{t('wine_vineyards:images.image2.subtitle')}</span>
                    </div>
                  </div>
                </span>
              </Col>
              <Col lg={4} md={6}>
                <span className="image fit hover-container">
                  <img src={spaces3} alt="" />
                  <div className="overlay">
                    <div className="text">
                      <h2>{t('wine_vineyards:images.image3.title')}</h2>
                      <span>{t('wine_vineyards:images.image3.subtitle')}</span>
                    </div>
                  </div>
                </span>
              </Col>
            </Row>
          </Grid>
        </section>
        
      </article>

      {lightboxIsOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setToggleLightbox(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          imageCaption={`(${photoIndex + 1}/${images.length}) ${captions[photoIndex]}`}
        />
      )}
    </LandingLayout>
  );
}

export default WineStayPage;
