import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Lottie from 'react-lottie';
import LandingLayout from '../components/LandingLayout';
import 'react-image-lightbox/style.css';

import { Col, Grid, Row } from 'react-flexbox-grid';
import Img from "gatsby-image"

import Carousel from 're-carousel';
import IndicatorDots from '../components/CarouselDots';
import pic2 from '../assets/images/gardens/picture2.jpg';
import pic3 from '../assets/images/gardens/picture3.jpg';
import pic4 from '../assets/images/gardens/picture4.jpg';
import pic5 from '../assets/images/gardens/picture5.jpg';

import cameraAnim from '../assets/images/lottie/camera';
import Obfuscate from 'react-obfuscate';
import config from '../../config';



function GardensPage({data}) {
  const { t } = useTranslation();
  const pic1 = data.pic1.childImageSharp.fluid.src;

  return (
    <LandingLayout fullMenu>
      <article id="pageMain">
        <header id="gardensHeader">
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
    pic1: file(relativePath: {eq: "gardens/picture1.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default GardensPage;
