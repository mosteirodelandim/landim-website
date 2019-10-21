import React from 'react';
import { useTranslation } from 'react-i18next';
import LandingLayout from '../components/LandingLayout';

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
          <div className="inner">
            <header className="major">
              <p>{t('faq:description1')}</p>
            </header>
            <ul className="features" style={{width: "100%", height: "100%"}}>
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
              <li>
                <a href="/#" className="button fit">
                  Learn More
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
