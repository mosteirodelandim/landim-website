import React from 'react';

import Typewriter from 'typewriter-effect';
import Lottie from 'react-lottie';
import { Link } from 'gatsby';

import { useTranslation } from 'react-i18next';
import i18n from '../i18n/i18n';
import LandingLayout from '../components/LandingLayout';
import Scroll from '../components/Scroll';

import scrollAnim from '../assets/images/lottie/scroll_down.json';

import FlagIcon from '../components/FlagIcon';

function IndexPage({data}) {
  const { t } = useTranslation();

  const historyTile = data.historyTile.childImageSharp.fluid.srcWebp;
  const photoTile = data.photoTile.childImageSharp.fluid.srcWebp;
  const gardenTile = data.gardenTile.childImageSharp.fluid.srcWebp;
  const servicesTile = data.servicesTile.childImageSharp.fluid.srcWebp;
  const wineTile = data.wineTile.childImageSharp.fluid.srcWebp;
  const faqTile = data.faqTile.childImageSharp.fluid.srcWebp;
  const aboutUsTile = data.aboutUsTile.childImageSharp.fluid.srcWebp;

  return (
    <LandingLayout fullMenu={false} showMenu={false}>
      <section id="banner">
        <div className="flag-container">
          <div id="bannerFlags" className="flags">
            <div onClick={() => {
              i18n.changeLanguage('pt');
              window.location.reload();
            }}
            >
              <FlagIcon code="pt" />
            </div>
            <div onClick={() => {
              i18n.changeLanguage('en');
              window.location.reload();
            }}
            >
              <FlagIcon code="gb" />
            </div>
          </div>
        </div>

        <div>
          <h2>{t('landing:heading')}</h2>
          <br />
          <div id="subHeading">
            <span>{t('landing:subHeading')}</span>
            <Typewriter
              onInit={(typewriter) => {
                const carouselArray = t('landing:subheadingTextCarousel');

                for (let i = 0; i < carouselArray.length; i += 1) {
                  typewriter.typeString(carouselArray[i])
                    .pauseFor(2500);

                  if (i !== carouselArray.length - 1) {
                    typewriter.deleteAll()
                      .callFunction((obj) => {
                        obj.elements.cursor.style.display = 'none';
                      });
                  }
                }

                typewriter.start();
              }}
            />
          </div>
        </div>

        <Scroll type="id" element="landingPageMain">
          <a href="#landingPageMain" className="more">
            <Lottie
              options={{
                animationData: scrollAnim,
              }}
              width="75%"
              height="75%"
            />
          </a>
        </Scroll>
      </section>

      <div id="landingPageMain">

        <section id="one" className="tiles">

          <article style={{ backgroundImage: `url(${aboutUsTile})` }}>
            <header className="major">
              <h3>{t('landing:weAre.title')}</h3>
            </header>
            <Link to="/about_us" className="link primary" />
          </article>

          <article style={{ backgroundImage: `url(${servicesTile})` }}>
            <header className="major">
              <h3>{t('landing:services.title')}</h3>
            </header>
            <Link to="/services" className="link primary" />
          </article>

          <article style={{ backgroundImage: `url(${photoTile})` }}>
            <header className="major">
              <h3>{t('landing:photos.title')}</h3>
            </header>
            <Link to="/photo_gallery" className="link primary" />
          </article>

          <article style={{ backgroundImage: `url(${historyTile})` }}>
            <header className="major">
              <h3>{t('landing:history.title')}</h3>
            </header>
            <Link to="/history" className="link primary" />
          </article>

          <article style={{ backgroundImage: `url(${gardenTile})` }}>
            <header className="major">
              <h3>{t('landing:gardens.title')}</h3>
            </header>
            <Link to="/gardens" className="link primary" />
          </article>

          <article style={{ backgroundImage: `url(${wineTile})` }}>
            <header className="major">
              <h3>{t('landing:vineyards.title')}</h3>
            </header>
            <Link to="/wine_vineyards" className="link primary" />
          </article>

          <article style={{ backgroundImage: `url(${faqTile})` }}>
            <header className="major">
              <h3>{t('landing:faq.title')}</h3>
            </header>
            <Link to="/faq" className="link primary" />
          </article>

        </section>
      </div>
    </LandingLayout>
  );
}

export const query = graphql`
  query {   
    historyTile: file(relativePath: {eq: "landing/history_tile.png"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    photoTile: file(relativePath: {eq: "landing/photos_tile.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    gardenTile: file(relativePath: {eq: "landing/gardens_tile.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    servicesTile: file(relativePath: {eq: "landing/services_tile.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    wineTile: file(relativePath: {eq: "landing/wine_tile.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    faqTile: file(relativePath: {eq: "landing/faq_tile.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    aboutUsTile: file(relativePath: {eq: "landing/about_us_tile.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
  }
`;

export default IndexPage;
