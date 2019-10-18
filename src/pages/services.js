import React from 'react';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

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
          <p>{t('services:subHeading')}</p>
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

        <section id="two" className="wrapper alt style2">
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

        <section id="three" className="wrapper style3 special">
          <div className="inner">
            <header className="major">
              <h2>Accumsan mus tortor nunc aliquet</h2>
              <p>
                Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
                eleifend
                <br />
                fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
                ullamcorper.
              </p>
            </header>
            <ul className="features">
              <li className="icon fa-paper-plane">
                <h3>Arcu accumsan</h3>
                <p>
                  Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                  tincidunt nullam amet leo Aenean ligula consequat consequat.
                </p>
              </li>
              <li className="icon solid fa-laptop">
                <h3>Ac Augue Eget</h3>
                <p>
                  Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                  tincidunt nullam amet leo Aenean ligula consequat consequat.
                </p>
              </li>
              <li className="icon solid fa-code">
                <h3>Mus Scelerisque</h3>
                <p>
                  Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                  tincidunt nullam amet leo Aenean ligula consequat consequat.
                </p>
              </li>
              <li className="icon solid fa-headphones-alt">
                <h3>Mauris Imperdiet</h3>
                <p>
                  Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                  tincidunt nullam amet leo Aenean ligula consequat consequat.
                </p>
              </li>
              <li className="icon fa-heart">
                <h3>Aenean Primis</h3>
                <p>
                  Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                  tincidunt nullam amet leo Aenean ligula consequat consequat.
                </p>
              </li>
              <li className="icon fa-flag">
                <h3>Tortor Ut</h3>
                <p>
                  Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                  tincidunt nullam amet leo Aenean ligula consequat consequat.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section id="cta" className="wrapper style4">
          <div className="inner">
            <header>
              <h2>Arcue ut vel commodo</h2>
              <p>
                Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
                eleifend fringilla.
              </p>
            </header>
            <ul className="actions stacked">
              <li>
                <a href="/#" className="button fit primary">
                  Activate
                </a>
              </li>
              {isMobile
              && (
              <li>
                <a href="/#" className="button fit">
                  Learn More
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
