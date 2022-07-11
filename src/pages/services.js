import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from 're-carousel';

import LandingLayout from '../components/LandingLayout';
import IndicatorDots from '../components/CarouselDots';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import Lightbox from 'react-image-lightbox';

import americo_menu from '../assets/luis_americo_22.pdf'


function ServicesPage({data}) {
  const { t } = useTranslation();

  // Local state
  const [lightboxIsOpen, setToggleLightbox] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const banner = data.banner.childImageSharp.fluid;
  const cloisterPic = data.cloisterPic.childImageSharp.fluid;
  const gardenPic = data.gardenPic.childImageSharp.fluid;
  const roomPic = data.roomPic.childImageSharp.fluid;
  const churchPic = data.churchPic.childImageSharp.fluid;

  const space1 = data.space1.childImageSharp.fluid;
  const space2 = data.space2.childImageSharp.fluid;

  const church_cloister1 = data.church_cloister1.childImageSharp.fluid;
  const church_cloister2 = data.church_cloister2.childImageSharp.fluid;
  const church_cloister3 = data.church_cloister3.childImageSharp.fluid;
  const church_cloister4 = data.church_cloister4.childImageSharp.fluid;
  const church_cloister5 = data.church_cloister5.childImageSharp.fluid;

  const gardens_forest1 = data.gardens_forest1.childImageSharp.fluid;
  const gardens_forest2 = data.gardens_forest2.childImageSharp.fluid;
  const gardens_forest3 = data.gardens_forest3.childImageSharp.fluid;
  const gardens_forest4 = data.gardens_forest4.childImageSharp.fluid;
  const gardens_forest5 = data.gardens_forest5.childImageSharp.fluid;

  const images = [space1, space2]

  return (
    <LandingLayout id="servicesPage" fullMenu>
      <article id="pageMain" className="servicesMain">
        <BackgroundImage
          Tag="header"
          fluid={banner}
        >
          <h2>{t('services:heading')}</h2>
          <p className="subHeadingTilePage">{t('services:subHeading')}</p>
        </BackgroundImage>
        <section className="wrapper style5">
          <div className="inner">
            <h3>{t('services:firstParagraph.title')}</h3>
            <p>{t('services:firstParagraph.description1')}</p>
            <p>{t('services:firstParagraph.description2')}</p>
            <p>{t('services:firstParagraph.description3')}</p>
          </div>
        </section>

        <section id="spotlights" className="wrapper alt style2">
          <section className="spotlight no-pad">
            <div className="image">
              <Img fluid={cloisterPic}/>
            </div>
            <div className="content">
              <h2>{t('services:spotlights.cloister.title')}</h2>
              <p>{t('services:spotlights.cloister.description')}</p>
            </div>
          </section>
          <section className="spotlight no-pad">
            <div className="image">
              <Img fluid={gardenPic}/>
            </div>
            <div className="content">
              <h2>{t('services:spotlights.gardens.title')}</h2>
              <p>{t('services:spotlights.gardens.description')}</p>
            </div>
          </section>
          <section className="spotlight no-pad">
            <div className="image">
              <Img fluid={roomPic}/>
            </div>
            <div className="content">
              <h2>{t('services:spotlights.rooms.title')}</h2>
              <p>{t('services:spotlights.rooms.description')}</p>
            </div>
          </section>
          <section className="spotlight no-pad">
            <div className="image">
              <Img fluid={churchPic}/>
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
            <p>{t('services:secondParagraph.description1')}</p>
            <hr/>
            <h5>{t('services:secondParagraph.spaces.title')}</h5>
            <p>{t('services:secondParagraph.spaces.description1.phrase1')}<strong>{t('services:secondParagraph.spaces.description1.priceBold')}</strong>{t('services:secondParagraph.spaces.description1.phrase2')}</p>
            <p>{t('services:secondParagraph.spaces.description2')}</p>
            <p>{t('services:secondParagraph.spaces.description3.phrase1')}<strong>{t('services:secondParagraph.spaces.description3.priceBold')}</strong>.</p>
          </div>
        </section>

        <section className="wrapper style5" style={{paddingTop: 0}}>
          <div className="inner">
            <section>
              <div className="box alt">
                <div className="row gtr-50 gtr-uniform">
                  <div
                    className="col-md-6"
                    onClick={() => {
                      setPhotoIndex(images.indexOf(space1));
                      setToggleLightbox(true);
                    }}
                  >
                    <span className="image fit">
                      <Img fluid={space1}/>
                      {t('services:secondParagraph.spaces.image1Caption')}
                    </span>
                  </div>
                  <div
                    className="col-md-6"
                    onClick={() => {
                      setPhotoIndex(images.indexOf(space2));
                      setToggleLightbox(true);
                    }}
                  >
                    <span className="image fit" style={{ textAlign: 'right' }}>
                      <Img fluid={space2}/>
                      {t('services:secondParagraph.spaces.image2Caption')}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="wrapper style5 no-top">
          <div className="inner">
            <h5>{t('services:secondParagraph.decor.title')}</h5>
            <p>{t('services:secondParagraph.decor.description1')}</p>
            <p>
              <a href="https://saiotes.pt/" rel="noopener noreferrer" target="_blank">Saiotes</a>{t('services:secondParagraph.decor.description2')}
            </p>
            <p>
              <a href={americo_menu} download>Luís Américo</a>{t('services:secondParagraph.decor.description3')}
            </p>
          </div>
        </section>

        <section className="wrapper-carousel style5">
          <div className="inner-carousel">
            <Carousel loop widgets={[IndicatorDots]}>
              <BackgroundImage Tag="div" className="carousel-image" fluid={church_cloister1}/>
              <BackgroundImage Tag="div" className="carousel-image" fluid={church_cloister2}/>
              <BackgroundImage Tag="div" className="carousel-image" fluid={church_cloister3}/>
              <BackgroundImage Tag="div" className="carousel-image" fluid={church_cloister4}/>
              <BackgroundImage Tag="div" className="carousel-image" fluid={church_cloister5}/>

              <BackgroundImage Tag="div" className="carousel-image" fluid={gardens_forest1}/>
              <BackgroundImage Tag="div" className="carousel-image" fluid={gardens_forest2}/>
              <BackgroundImage Tag="div" className="carousel-image" fluid={gardens_forest3}/>
              <BackgroundImage Tag="div" className="carousel-image" fluid={gardens_forest4}/>
              <BackgroundImage Tag="div" className="carousel-image" fluid={gardens_forest5}/>
            </Carousel>
          </div>
        </section>

      </article>

      {lightboxIsOpen && (
        <Lightbox
          mainSrc={images[photoIndex].srcWebp}
          nextSrc={images[(photoIndex + 1) % images.length].srcWebp}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].srcWebp}
          onCloseRequest={() => setToggleLightbox(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
    </LandingLayout>
  );
}


export const query = graphql`
  query {
    banner: file(relativePath: {eq: "services/banner.png"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    cloisterPic: file(relativePath: {eq: "services/cloister.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    gardenPic: file(relativePath: {eq: "services/garden.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    roomPic: file(relativePath: {eq: "services/rooms.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    churchPic: file(relativePath: {eq: "services/church.png"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    
    space1: file(relativePath: {eq: "services/space1.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    space2: file(relativePath: {eq: "services/space2.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},

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
