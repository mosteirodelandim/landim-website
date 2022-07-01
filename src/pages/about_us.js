import React from 'react';
import { useTranslation } from 'react-i18next';
import Lottie from 'react-lottie';
import { graphql, Link } from 'gatsby';
import Carousel from 're-carousel';
import { Col, Grid, Row } from 'react-flexbox-grid';


import bookAnim from '../assets/images/lottie/book';
import wineAnim from '../assets/images/lottie/wines';
import servicesAnim from '../assets/images/lottie/services';
import LandingLayout from '../components/LandingLayout';
import IndicatorDots from '../components/CarouselDots';

function AboutUsPage({data}) {
  const { t } = useTranslation();

  const banner = data.banner.childImageSharp.fluid.srcWebp;
  const history1 = data.history1.childImageSharp.fluid.srcWebp;
  const history2 = data.history2.childImageSharp.fluid.srcWebp;
  const wine1 = data.wine1.childImageSharp.fluid.srcWebp;
  const wine2 = data.wine2.childImageSharp.fluid.srcWebp;
  const spaces1 = data.spaces1.childImageSharp.fluid.srcWebp;
  const spaces2 = data.spaces2.childImageSharp.fluid.srcWebp;
  const spaces3 = data.spaces3.childImageSharp.fluid.srcWebp;
  const spaces4 = data.spaces4.childImageSharp.fluid.srcWebp;
  const family1 = data.family1.childImageSharp.fluid.srcWebp;

  return (
    <LandingLayout fullMenu>
      <article id="aboutUsMain">
        <header style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0)), url(${banner})`}}>
          <h2>{t('about_us:heading1')}</h2>
          <h2>{t('about_us:heading2')}</h2>
          <h2>{t('about_us:heading3')}</h2>
        </header>


        <section className="wrapper style5">
          <div className="inner">
            <header>
             <h3 className="aboutUsTitle">{t('about_us:history.title')}</h3>
             <p>{t('about_us:history.subtitle')}</p>
            </header>
            <p>{t('about_us:history.description1')}</p>
            <p>{t('about_us:history.description2')}</p>
            <hr />
            <p>{t('about_us:history.description3')}</p>
          </div>

          <Grid>
            <Row>
              <Col sm={6}>
                <span className="image fit"><img src={history1} alt="" /></span>
              </Col>
              <Col sm={6}>
                <span className="image fit"><img src={history2} alt="" /></span>
              </Col>
            </Row>
          </Grid>

        </section>





        <section className="wrapper style5">
          <div className="inner">
            <header>
              <h3 className="aboutUsTitle">{t('about_us:family.title')}</h3>
              <p>{t('about_us:family.subtitle')}</p>
            </header>

            <p>{t('about_us:family.description1')}</p>

            <blockquote>{t('about_us:family.quote1.quote')}</blockquote>
            <p style={{ textAlign: 'right' }}>{t('about_us:family.quote1.quote_author')}</p>

            <div className="box alt">
              <div className="row gtr-50 gtr-uniform">
                <div className="col-12"><span className="image fit"><img src={family1} alt="" /></span></div>
              </div>
            </div>

            <p>{t('about_us:family.description2')}</p>

          </div>
        </section>

        <section id="two" className="wrapper alt style2">
          <section id="historySpotlight" className="spotlight">
            <div className="spotlight-container">
              <Grid>
                <Row className="center-row">
                  <Col md={6} className="center-col">
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
            <Carousel loop widgets={[IndicatorDots]}>
              <div style={{ backgroundImage:`url(${wine1})`}} className="carousel-image"/>
              <div style={{ backgroundImage:`url(${wine2})`}} className="carousel-image"/>
            </Carousel>
          </div>
        </section>

        <section id="two" className="wrapper alt style2">
          <section id="winesSpotlight" className="spotlight">
            <div className="spotlight-container">
              <Grid>
                <Row className="center-row">
                  <Col md={6} className="center-col">
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
              <h3 className="aboutUsTitle">{t('about_us:services_spaces.title')}</h3>
              <p>{t('about_us:services_spaces.subtitle')}</p>
            </header>

            <p>{t('about_us:services_spaces.description1')}</p>
            <p>{t('about_us:services_spaces.description2')}</p>
            <hr />
            <p>{t('about_us:services_spaces.description3')}</p>
          </div>

          <Grid>
            <Row>
              <Col lg={3} md={6}>
                <span className="image fit hover-container">
                  <img src={spaces1} alt="" />
                  <div className="overlay">
                    <div className="text">
                      <h2>{t('about_us:services_spaces.images.image1.title')}</h2>
                      <span>{t('about_us:services_spaces.images.image1.subtitle')}</span>
                    </div>
                  </div>
                </span>
              </Col>
              <Col lg={3} md={6}>
                <span className="image fit hover-container">
                  <img src={spaces2} alt="" />
                  <div className="overlay">
                    <div className="text">
                      <h2>{t('about_us:services_spaces.images.image2.title')}</h2>
                      <span>{t('about_us:services_spaces.images.image2.subtitle')}</span>
                    </div>
                  </div>
                </span>
              </Col>
              <Col lg={3} md={6}>
                <span className="image fit hover-container">
                  <img src={spaces3} alt="" />
                  <div className="overlay">
                    <div className="text">
                      <h2>{t('about_us:services_spaces.images.image3.title')}</h2>
                      <span>{t('about_us:services_spaces.images.image3.subtitle')}
                        <Link to="/gardens">{t('about_us:services_spaces.images.image3.hyperlink')}</Link>.
                      </span>
                    </div>
                  </div>
                </span>
              </Col>
              <Col lg={3} md={6}>
                <span className="image fit hover-container">
                  <img src={spaces4} alt="" />
                  <div className="overlay">
                    <div className="text">
                      <h2>{t('about_us:services_spaces.images.image4.title')}</h2>
                      <span>{t('about_us:services_spaces.images.image4.subtitle')}</span>
                    </div>
                  </div>
                </span>
              </Col>
            </Row>
          </Grid>
        </section>

        <section id="two" className="wrapper alt style2">
          <section id="servicesSpacesSpotlight" className="spotlight">
            <div className="spotlight-container">
              <Grid>
                <Row className="center-row">
                  <Col md={6} className="center-col">
                      <Lottie
                        options={{
                          animationData: servicesAnim,
                        }}
                        height={200}
                        width={200}
                      />
                  </Col>
                  <Col md={6} className="center-col">
                      <h2>{t('about_us:services_spaces.lottie.title')}</h2>
                      <p>{t('about_us:services_spaces.lottie.description')}<Link to="/services">{t('about_us:services_spaces.lottie.hyperlink')}</Link>.</p>
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
    banner: file(relativePath: {eq: "about_us/banner.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    
    history1: file(relativePath: {eq: "about_us/history1.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    history2: file(relativePath: {eq: "about_us/history2.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    
    wine1: file(relativePath: {eq: "about_us/wines1.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    wine2: file(relativePath: {eq: "about_us/wines2.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
       
    spaces1: file(relativePath: {eq: "about_us/spaces1.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    spaces2: file(relativePath: {eq: "about_us/spaces2.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    spaces3: file(relativePath: {eq: "about_us/spaces3.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    spaces4: file(relativePath: {eq: "about_us/spaces4.png"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    
    family1: file(relativePath: {eq: "about_us/family1.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
  }
`;

export default AboutUsPage;
