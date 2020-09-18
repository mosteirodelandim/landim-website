import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Lottie from 'lottie-react-web';
import LandingLayout from '../components/LandingLayout';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import winePic1 from '../assets/images/wine_vineyards/wine1.jpg';
import lottieAnim from '../assets/images/lottie/sleeping';
import config from '../../config';
import Obfuscate from 'react-obfuscate';
import bookPic1 from '../assets/images/history/book/book1.jpg';

const images = [winePic1]

function WineStayPage() {
  const { t } = useTranslation();
  const [lightboxIsOpen, setToggleLightbox] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const captions = [t('wine_vineyards:imageCaptions.wine')];

  return (
    <LandingLayout fullMenu>
      <article id="pageMain">
        <header id="winestayHeader">
          <h2>{t('wine_vineyards:title')}</h2>
          <p style={{ margin: '0 2em 2em 2em' }}>{t('wine_vineyards:subHeading')}</p>
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
              <h2>{t('wine_vineyards:stay.title')}</h2>
              <p>{t('wine_vineyards:stay.description1')}</p>
            </div>
          </section>
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
