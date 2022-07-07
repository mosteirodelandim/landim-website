import React from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from 're-carousel';

import LandingLayout from '../components/LandingLayout';
import IndicatorDots from '../components/CarouselDots';
import { graphql } from 'gatsby';


function ServicesPage({data}) {
  const { t } = useTranslation();

  const banner = data.banner.childImageSharp.fluid.srcWebp;
  const cloisterPic = data.cloisterPic.childImageSharp.fluid.srcWebp;
  const gardenPic = data.gardenPic.childImageSharp.fluid.srcWebp;
  const roomPic = data.roomPic.childImageSharp.fluid.srcWebp;
  const churchPic = data.churchPic.childImageSharp.fluid.srcWebp;

  const church_cloister1 = data.church_cloister1.childImageSharp.fluid.srcWebp;
  const church_cloister2 = data.church_cloister2.childImageSharp.fluid.srcWebp;
  const church_cloister3 = data.church_cloister3.childImageSharp.fluid.srcWebp;
  const church_cloister4 = data.church_cloister4.childImageSharp.fluid.srcWebp;
  const church_cloister5 = data.church_cloister5.childImageSharp.fluid.srcWebp;

  const gardens_forest1 = data.gardens_forest1.childImageSharp.fluid.srcWebp;
  const gardens_forest2 = data.gardens_forest2.childImageSharp.fluid.srcWebp;
  const gardens_forest3 = data.gardens_forest3.childImageSharp.fluid.srcWebp;
  const gardens_forest4 = data.gardens_forest4.childImageSharp.fluid.srcWebp;
  const gardens_forest5 = data.gardens_forest5.childImageSharp.fluid.srcWebp;

  return (
    <LandingLayout fullMenu>
      <article id="pageMain">
        <header style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${banner})`}}>
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
          <section className="spotlight no-pad">
            <div className="image">
              <img src={cloisterPic} alt="" />
            </div>
            <div className="content">
              <h2>{t('services:spotlights.cloister.title')}</h2>
              <p>{t('services:spotlights.cloister.description')}</p>
            </div>
          </section>
          <section className="spotlight no-pad">
            <div className="image">
              <img src={gardenPic} alt="" />
            </div>
            <div className="content">
              <h2>{t('services:spotlights.gardens.title')}</h2>
              <p>{t('services:spotlights.gardens.description')}</p>
            </div>
          </section>
          <section className="spotlight no-pad">
            <div className="image">
              <img src={roomPic} alt="" />
            </div>
            <div className="content">
              <h2>{t('services:spotlights.rooms.title')}</h2>
              <p>{t('services:spotlights.rooms.description')}</p>
            </div>
          </section>
          <section className="spotlight no-pad">
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


export const query = graphql`
  query {
    banner: file(relativePath: {eq: "services/banner.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    cloisterPic: file(relativePath: {eq: "services/cloister.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    gardenPic: file(relativePath: {eq: "services/garden.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    roomPic: file(relativePath: {eq: "services/rooms.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    churchPic: file(relativePath: {eq: "services/church.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
       
    church_cloister1: file(relativePath: {eq: "services/cloister_church/church_cloister1.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    church_cloister2: file(relativePath: {eq: "services/cloister_church/church_cloister2.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    church_cloister3: file(relativePath: {eq: "services/cloister_church/church_cloister3.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    church_cloister4: file(relativePath: {eq: "services/cloister_church/church_cloister4.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    church_cloister5: file(relativePath: {eq: "services/cloister_church/church_cloister5.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    
    gardens_forest1: file(relativePath: {eq: "services/gardens_forest/gardens_forest1.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    gardens_forest2: file(relativePath: {eq: "services/gardens_forest/gardens_forest2.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    gardens_forest3: file(relativePath: {eq: "services/gardens_forest/gardens_forest3.png"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    gardens_forest4: file(relativePath: {eq: "services/gardens_forest/gardens_forest4.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    gardens_forest5: file(relativePath: {eq: "services/gardens_forest/gardens_forest5.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
  }
`;

export default ServicesPage;
