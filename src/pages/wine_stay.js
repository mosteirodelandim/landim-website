import React from 'react';
import { useTranslation } from 'react-i18next';
import Lottie from 'lottie-react-web';
import LandingLayout from '../components/LandingLayout';

import winePic1 from '../assets/images/wine_stay/wine1.jpg';
import lottieAnim from '../assets/images/lottie/sleeping';
import config from '../../config';
import { isMobile } from "react-device-detect";

function WineStayPage() {
  const { t } = useTranslation();

  return (
    <LandingLayout fullMenu>
      <article id="pageMain">
        <header id="winestayHeader">
          <h2>{t('wine_stay:title')}</h2>
          <p style={{ margin: '0 2em 2em 2em' }}>{t('wine_stay:subHeading')}</p>
        </header>
        <section className="wrapper style5">
          <div className="inner">
            <h3>{t('wine_stay:wine.title')}</h3>

            <>
              <span
                className="image right"
                style={{
                  width: '80vh', fontSize: '0.8em', color: 'gray', textAlign: 'right',
                }}
              >
                <img src={winePic1} alt="" />
                {t('wine_stay:imageCaptions.wine')}
              </span>
              <p>{t('wine_stay:wine.description1')}</p>
              <p>{t('wine_stay:wine.description2')}</p>
            </>

            <h5>{t('wine_stay:wine.quote1Title')}</h5>
            <blockquote>{t('wine_stay:wine.quote1')}</blockquote>
            <p style={{ textAlign: 'right' }}>{t('wine_stay:wine.quote1Author')}</p>

            <h5>{t('wine_stay:wine.quote2Title')}</h5>
            <blockquote>{t('wine_stay:wine.quote2')}</blockquote>
            <p style={{ textAlign: 'right' }}>{t('wine_stay:wine.quote2Author')}</p>

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
              <h2>{t('wine_stay:stay.title')}</h2>
              <p>{t('wine_stay:stay.description1')}</p>
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

export default WineStayPage;
