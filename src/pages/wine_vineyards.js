import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Lightbox from 'react-image-lightbox';
import { Col, Grid, Row } from 'react-flexbox-grid';
import Img from 'gatsby-image'

import LandingLayout from '../components/LandingLayout';


import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Carousel from 're-carousel';
import IndicatorDots from '../components/CarouselDots';
import CarouselArrows from '../components/CarouselArrows';
import Lottie from 'react-lottie';

import airbnbAnim from '../assets/images/lottie/airbnb';

import 'react-image-lightbox/style.css';


function WineStayPage({data}) {
  const { t } = useTranslation();

  const [lightboxIsOpen, setToggleLightbox] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const captions = [t('wine_vineyards:imageCaptions.wine')];


  const banner = data.banner.childImageSharp.fluid;
  const winePic1 = data.winePic1.childImageSharp.fluid;
  const feature1 = data.feature1.childImageSharp.fluid;
  const feature2 = data.feature2.childImageSharp.fluid;
  const feature3 = data.feature3.childImageSharp.fluid;

  const picture1 = data.picture1.childImageSharp.fluid;
  const picture2 = data.picture2.childImageSharp.fluid;
  const picture3 = data.picture3.childImageSharp.fluid;
  const picture4 = data.picture4.childImageSharp.fluid;
  const picture5 = data.picture5.childImageSharp.fluid;

  const images = [winePic1.srcWebp];


  return (
    <LandingLayout fullMenu>
      <article id="wineMain">
        <BackgroundImage
          Tag="header"
          fluid={banner}
        >
          <h2>{t('wine_vineyards:title')}</h2>
          <p>{t('wine_vineyards:subHeading')}</p>
        </BackgroundImage>
        <section className="wrapper style5">
          <div className="inner">
            <h3>{t('wine_vineyards:wine.title')}</h3>

            <>
              <span
                onClick={() => {
                  setPhotoIndex(images.indexOf(winePic1.srcWebp));
                  setToggleLightbox(true);
                }}
                className="image right"
                style={{
                  width: '80vh', fontSize: '0.8em', color: 'gray', textAlign: 'right',
                }}
              >
                <Img fluid={winePic1}/>
                {t('wine_vineyards:imageCaptions.wine')}
              </span>
              <p>{t('wine_vineyards:wine.description1')}</p>
              <p>{t('wine_vineyards:wine.description2')}</p>
            </>

            <h5>{t('wine_vineyards:wine.quote1Title')}</h5>
            <blockquote>{t('wine_vineyards:wine.quote1')}</blockquote>
            <p style={{ textAlign: 'right', color: "#b4aeb8" }}>{t('wine_vineyards:wine.quote1Author')}</p>

            <h5>{t('wine_vineyards:wine.quote2Title')}</h5>
            <blockquote>{t('wine_vineyards:wine.quote2')}</blockquote>
            <p style={{ textAlign: 'right', color: "#b4aeb8" }}>{t('wine_vineyards:wine.quote2Author')}</p>

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
                  <Img fluid={feature1}/>
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
                  <Img fluid={feature2}/>
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
                  <Img fluid={feature3}/>
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

        <section className="wrapper style5">
          <div className="inner">
            <header>
              <h3>{t('wine_vineyards:airbnb.title')}</h3>
            </header>

            <p>{t('wine_vineyards:airbnb.description1')}</p>
            <p>{t('wine_vineyards:airbnb.description2')}</p>
            <p>{t('wine_vineyards:airbnb.description3')}</p>
          </div>
        </section>

        <section className="wrapper-carousel style5">
          <div className="inner-carousel">
            <Carousel loop widgets={[IndicatorDots, CarouselArrows]}>
              <BackgroundImage Tag="div" className="carousel-image" fluid={picture1}/>
              <BackgroundImage Tag="div" className="carousel-image" fluid={picture2}/>
              <BackgroundImage Tag="div" className="carousel-image" fluid={picture3}/>
              <BackgroundImage Tag="div" className="carousel-image" fluid={picture4}/>
              <BackgroundImage Tag="div" className="carousel-image" fluid={picture5}/>
            </Carousel>
          </div>
        </section>

        <section id="two" className="wrapper alt style2">
          <section id="airbnbSpotlight" className="spotlight">
            <div className="spotlight-container">
              <Grid>
                <Row className="center-row">
                  <Col md={6} className="center-col" style={{pointerEvents: "none"}}>
                    <Lottie
                      options={{
                        animationData: airbnbAnim,
                      }}
                      height={200}
                      width={200}
                    />
                  </Col>
                  <Col md={6} className="center-col">
                    <h2>{t('wine_vineyards:airbnb.spotlight.title')}</h2>
                    <p>
                      {t('wine_vineyards:airbnb.spotlight.phrase1')}
                      <a target="_blank" rel="noopener noreferrer" href={"https://www.airbnb.pt/rooms/11984291"}>{t('wine_vineyards:airbnb.spotlight.phraseAirbnbUrl')}</a>
                      {t('wine_vineyards:airbnb.spotlight.phrase2')}
                    </p>
                  </Col>
                </Row>
              </Grid>
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

export const query = graphql`
  query {
    banner: file(relativePath: {eq: "wine_vineyards/banner.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    winePic1: file(relativePath: {eq: "wine_vineyards/wine1.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    },
    feature1: file(relativePath: {eq: "wine_vineyards/feature_1.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    },
    feature2: file(relativePath: {eq: "wine_vineyards/feature_2.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    },
    feature3: file(relativePath: {eq: "wine_vineyards/feature_3.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    },
    picture1: file(relativePath: {eq: "wine_vineyards/airbnb/picture1.png"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    picture2: file(relativePath: {eq: "wine_vineyards/airbnb/picture2.png"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    picture3: file(relativePath: {eq: "wine_vineyards/airbnb/picture3.png"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    picture4: file(relativePath: {eq: "wine_vineyards/airbnb/picture4.png"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    picture5: file(relativePath: {eq: "wine_vineyards/airbnb/picture5.png"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},

  }
`;

export default WineStayPage;
