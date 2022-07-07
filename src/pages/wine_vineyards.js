import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Lightbox from 'react-image-lightbox';
import { Col, Grid, Row } from 'react-flexbox-grid';
import Img from 'gatsby-image'

import LandingLayout from '../components/LandingLayout';

import 'react-image-lightbox/style.css';

import { graphql } from 'gatsby';

function WineStayPage({data}) {
  const { t } = useTranslation();

  const [lightboxIsOpen, setToggleLightbox] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const captions = [t('wine_vineyards:imageCaptions.wine')];


  const banner = data.banner.childImageSharp.fluid.srcWebp;
  const winePic1 = data.winePic1.childImageSharp.fluid;
  const feature1 = data.feature1.childImageSharp.fluid;
  const feature2 = data.feature2.childImageSharp.fluid;
  const feature3 = data.feature3.childImageSharp.fluid;

  const images = [winePic1.srcWebp];


  return (
    <LandingLayout fullMenu>
      <article id="wineMain">
        <header style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${banner})`}}>
          <h2>{t('wine_vineyards:title')}</h2>
          <p>{t('wine_vineyards:subHeading')}</p>
        </header>
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
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    feature1: file(relativePath: {eq: "wine_vineyards/feature_1.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    feature2: file(relativePath: {eq: "wine_vineyards/feature_2.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    feature3: file(relativePath: {eq: "wine_vineyards/feature_3.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default WineStayPage;
