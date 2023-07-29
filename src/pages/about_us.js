import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Lottie from 'react-lottie';
import { graphql, Link } from 'gatsby';
import Carousel from 're-carousel';
import { Col, Grid, Row } from 'react-flexbox-grid';


import bookAnim from '../assets/images/lottie/book';
import wineAnim from '../assets/images/lottie/wines';
import eventsAnim from '../assets/images/lottie/events';
import LandingLayout from '../components/LandingLayout';
import IndicatorDots from '../components/CarouselDots';
import CarouselArrows from '../components/CarouselArrows';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import Lightbox from 'react-image-lightbox';

function AboutUsPage({data}) {
  const { t } = useTranslation();

  // Local state
  const [lightboxIsOpen, setToggleLightbox] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const banner = data.banner.childImageSharp.fluid;
  const history1 = data.history1.childImageSharp.fluid;
  const history2 = data.history2.childImageSharp.fluid;
  const wine1 = data.wine1.childImageSharp.fluid;
  const wine2 = data.wine2.childImageSharp.fluid;
  const wine3 = data.wine3.childImageSharp.fluid;
  const spaces1 = data.spaces1.childImageSharp.fluid;
  const spaces2 = data.spaces2.childImageSharp.fluid;
  const spaces3 = data.spaces3.childImageSharp.fluid;
  const spaces4 = data.spaces4.childImageSharp.fluid;

  const images = [history1, history2];

  return (
    <LandingLayout fullMenu>
      <article id="aboutUsMain">

        <BackgroundImage
          Tag="header"
          fluid={banner}
        >
          <h2>{t('about_us:heading1')}</h2>
          <h2>{t('about_us:heading2')}</h2>
          <h2>{t('about_us:heading3')}</h2>
        </BackgroundImage>

        <section className="wrapper style5">
          <div className="inner">
            <header>
             <h3 className="aboutUsTitle">{t('about_us:history.title')}</h3>
             <p>{t('about_us:history.subtitle')}</p>
            </header>
            <p>{t('about_us:history.description1')}</p>
            <p>{t('about_us:history.description2')}</p>
            <br/>
            <blockquote>{t('about_us:history.quote')}</blockquote>
            <p style={{ textAlign: 'right', opacity: .5 }}>{t('about_us:history.quoteAuthor')}</p>
            <p>{t('about_us:history.description3')}</p>
          </div>

          <Grid>
            <Row style={{paddingTop: "4em"}}>
              <Col sm={6}>
                <span className="image fit"
                      onClick={() => {
                        setPhotoIndex(images.indexOf(history1));
                        setToggleLightbox(true);
                      }}
                      style={{ cursor: "pointer" }}>
                  <Img fluid={history1}/>
                </span>
              </Col>
              <Col sm={6}>
                <span className="image fit"
                      onClick={() => {
                        setPhotoIndex(images.indexOf(history2));
                        setToggleLightbox(true);
                      }}
                      style={{ textAlign: 'right', cursor: "pointer" }}>
                  <Img fluid={history2}/>
                  {t('about_us:history.imagesCaption')}
                </span>
              </Col>
            </Row>
          </Grid>

        </section>





        <section className="wrapper style5 no-top">
          <div className="inner">
            <header>
              <h3 className="aboutUsTitle">{t('about_us:family.title')}</h3>
              <p>{t('about_us:family.subtitle')}</p>
            </header>


            <blockquote>
              <p>{t('about_us:family.poem.verse1')}</p>
              <p>{t('about_us:family.poem.verse2')}</p>
              <p>{t('about_us:family.poem.verse3')}</p>
              <p>{t('about_us:family.poem.verse4')}</p>
            </blockquote>
            <p style={{ textAlign: 'right', opacity: .5 }}>{t('about_us:family.poem.author')}</p>

            <p>{t('about_us:family.description1')}</p>
            <p>{t('about_us:family.description2')}</p>
          </div>
        </section>

        <section id="two" className="wrapper alt style2">
          <section id="historySpotlight" className="spotlight">
            <div className="spotlight-container">
              <Grid>
                <Row className="center-row">
                  <Col md={6} className="center-col" style={{pointerEvents: "none"}}>
                    <Lottie
                      options={{
                        animationData: bookAnim,
                      }}
                      height={200}
                      width={200}
                    />
                  </Col>
                  <Col md={6} className="center-col">
                    <h2>{t('about_us:history.lottie.title')}</h2>
                    <p>{t('about_us:history.lottie.description')}<Link to="/history">{t('about_us:history.lottie.hyperlink')}</Link>.</p>
                  </Col>
                </Row>
              </Grid>
            </div>
          </section>
        </section>





        <section className="wrapper style5">
          <div className="inner">
            <header>
              <h3 className="aboutUsTitle">{t('about_us:wines.title')}</h3>
              <p>{t('about_us:wines.subtitle')}</p>
            </header>

            <p>{t('about_us:wines.description1')}</p>
            <p>{t('about_us:wines.description2')}</p>
          </div>
        </section>


        <section className="wrapper-carousel style5">
          <div className="inner-carousel">
            <Carousel loop widgets={[IndicatorDots, CarouselArrows]}>
              <BackgroundImage Tag="div" className="carousel-image" fluid={wine1}/>
              <BackgroundImage Tag="div" className="carousel-image" fluid={wine2}/>
              <BackgroundImage Tag="div" className="carousel-image" fluid={wine3}/>
            </Carousel>
          </div>
        </section>

        <section id="two" className="wrapper alt style2">
          <section id="winesSpotlight" className="spotlight">
            <div className="spotlight-container">
              <Grid>
                <Row className="center-row">
                  <Col md={6} className="center-col" style={{pointerEvents: "none"}}>
                    <Lottie
                      options={{
                        animationData: wineAnim,
                      }}
                      height={200}
                      width={200}
                    />
                  </Col>
                  <Col md={6} className="center-col">
                    <h2>{t('about_us:wines.lottie.title')}</h2>
                    <p>{t('about_us:wines.lottie.description')}<Link to="/wine_vineyards">{t('about_us:wines.lottie.hyperlink')}</Link>.</p>
                  </Col>
                </Row>
              </Grid>
            </div>
          </section>
        </section>

        <section className="wrapper style5">
          <div className="inner">
            <header>
              <h3 className="aboutUsTitle">{t('about_us:events_spaces.title')}</h3>
              <p>{t('about_us:events_spaces.subtitle')}</p>
            </header>

            <p>{t('about_us:events_spaces.description1')}</p>
            <p>{t('about_us:events_spaces.description2')}</p>
            <hr />
            <p>{t('about_us:events_spaces.description3')}</p>
          </div>

          <Grid>
            <Row>
              <Col lg={3} md={6}>
                <span className="image fit hover-container">
                  <Img fluid={spaces1}/>
                  <div className="overlay">
                    <div className="text">
                      <h2>{t('about_us:events_spaces.images.image1.title')}</h2>
                      <span>{t('about_us:events_spaces.images.image1.subtitle')}</span>
                    </div>
                  </div>
                </span>
              </Col>
              <Col lg={3} md={6}>
                <span className="image fit hover-container">
                  <Img fluid={spaces2}/>
                  <div className="overlay">
                    <div className="text">
                      <h2>{t('about_us:events_spaces.images.image2.title')}</h2>
                      <span>{t('about_us:events_spaces.images.image2.subtitle')}</span>
                    </div>
                  </div>
                </span>
              </Col>
              <Col lg={3} md={6}>
                <span className="image fit hover-container">
                  <Img fluid={spaces3}/>
                  <div className="overlay">
                    <div className="text">
                      <h2>{t('about_us:events_spaces.images.image3.title')}</h2>
                      <span>{t('about_us:events_spaces.images.image3.subtitle')}
                        <Link to="/gardens">{t('about_us:events_spaces.images.image3.hyperlink')}</Link>.
                      </span>
                    </div>
                  </div>
                </span>
              </Col>
              <Col lg={3} md={6}>
                <span className="image fit hover-container">
                  <Img fluid={spaces4}/>
                  <div className="overlay">
                    <div className="text">
                      <h2>{t('about_us:events_spaces.images.image4.title')}</h2>
                      <span>{t('about_us:events_spaces.images.image4.subtitle')}</span>
                    </div>
                  </div>
                </span>
              </Col>
            </Row>
          </Grid>
        </section>

        <section id="two" className="wrapper alt style2">
          <section id="eventsSpacesSpotlight" className="spotlight">
            <div className="spotlight-container">
              <Grid>
                <Row className="center-row">
                  <Col md={6} className="center-col" style={{pointerEvents: "none"}}>
                      <Lottie
                        options={{
                          animationData: eventsAnim,
                          autoplay: true,
                          loop: true
                        }}
                        height={200}
                        width={200}
                      />
                  </Col>
                  <Col md={6} className="center-col">
                      <h2>{t('about_us:events_spaces.lottie.title')}</h2>
                      <p>{t('about_us:events_spaces.lottie.description')}<Link to="/events">{t('about_us:events_spaces.lottie.hyperlink')}</Link>.</p>
                  </Col>
                </Row>
              </Grid>
            </div>
          </section>
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
    banner: file(relativePath: {eq: "about_us/banner.png"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    
    history1: file(relativePath: {eq: "about_us/old1.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    history2: file(relativePath: {eq: "about_us/old2.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    
    wine1: file(relativePath: {eq: "about_us/wines1.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    wine2: file(relativePath: {eq: "about_us/wines2.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    wine3: file(relativePath: {eq: "about_us/wines3.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
       
    spaces1: file(relativePath: {eq: "about_us/spaces1.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    spaces2: file(relativePath: {eq: "about_us/spaces2.png"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    spaces3: file(relativePath: {eq: "about_us/spaces3.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    spaces4: file(relativePath: {eq: "about_us/spaces4.png"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
   
  }
`;

export default AboutUsPage;
