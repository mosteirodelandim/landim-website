import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Lottie from 'react-lottie';
import Obfuscate from 'react-obfuscate';
import { Col, Grid, Row } from 'react-flexbox-grid';
import Carousel from 're-carousel';

import IndicatorDots from '../components/CarouselDots';
import LandingLayout from '../components/LandingLayout';
import cameraAnim from '../assets/images/lottie/camera';
import config from '../../config';

import 'react-image-lightbox/style.css';


function GardensPage({data}) {
  const { t } = useTranslation();

  const banner = data.banner.childImageSharp.fluid.srcWebp;
  const pic1 = data.pic1.childImageSharp.fluid.srcWebp;
  const pic2 = data.pic2.childImageSharp.fluid.srcWebp;
  const pic3 = data.pic3.childImageSharp.fluid.srcWebp;
  const pic4 = data.pic4.childImageSharp.fluid.srcWebp;
  const pic5 = data.pic5.childImageSharp.fluid.srcWebp;

  return (
    <LandingLayout fullMenu>
      <article id="pageMain">
        <header style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${banner})`}}>
          <h2>{t('gardens:title')}</h2>
          <p>{t('gardens:subHeading')}</p>
        </header>

        <section className="wrapper style5">
          <div className="inner">
            <h3>{t('gardens:firstParagraph.title')}</h3>
            <p>{t('gardens:firstParagraph.description1')}</p>
            <p>{t('gardens:firstParagraph.description2')}</p>
          </div>
        </section>

        <section className="wrapper-carousel style5">
          <div className="inner-carousel">
            <Carousel loop widgets={[IndicatorDots]}>
              <div style={{ backgroundImage:`url(${pic1})`}} className="carousel-image"/>
              <div style={{ backgroundImage:`url(${pic2})`}} className="carousel-image"/>
              <div style={{ backgroundImage:`url(${pic3})`}} className="carousel-image"/>
              <div style={{ backgroundImage:`url(${pic4})`}} className="carousel-image"/>
              <div style={{ backgroundImage:`url(${pic5})`}} className="carousel-image"/>
            </Carousel>
          </div>
        </section>

        <section id="two" className="wrapper alt style2">
          <section id="gardensSpotlight" className="spotlight">
            <div className="spotlight-container">
              <Grid>
                <Row className="center-row">
                  <Col md={6} className="center-col">
                    <Lottie
                      options={{
                        animationData: cameraAnim,
                      }}
                      height={200}
                      width={200}
                    />
                  </Col>
                  <Col md={6} className="center-col">
                    <h2>{t('gardens:lottie.title')}</h2>
                    <p>{t('gardens:lottie.description')}
                      <Obfuscate email={`${config.emailContact}`}>
                        {t('gardens:lottie.hyperlink')}
                      </Obfuscate>
                      .</p>
                  </Col>
                </Row>
              </Grid>
            </div>
          </section>
        </section>

      </article>

    </LandingLayout>
  );
}

export const query = graphql`
  query {
    banner: file(relativePath: {eq: "gardens/banner.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    pic1: file(relativePath: {eq: "gardens/picture1.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    pic2: file(relativePath: {eq: "gardens/picture2.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    pic3: file(relativePath: {eq: "gardens/picture3.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    pic4: file(relativePath: {eq: "gardens/picture4.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    pic5: file(relativePath: {eq: "gardens/picture5.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default GardensPage;
