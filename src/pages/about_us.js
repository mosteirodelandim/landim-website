import React, { useState } from 'react';
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
            <blockquote>"Nunca se perde tempo com aquilo que amamos."</blockquote>
            <p style={{ textAlign: 'right', opacity: .5 }}>Alberto Sampaio</p>
            <p>Amamos a herança que nos foi deixada e estamos dedicados a mantê-la intacta para futuras gerações. Regemo-nos pelas palavras dos nossos antepassados para inspirar futuras gerações e convidados na nossa quinta.</p>
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
                  Fotos históricas do claustro e Sala de Capítulo antigas.
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
              <p>É sagrada a nossa casa, protectora como aza</p>
              <p>Guarda e cobre o nosso lar, dentro dela com carinho</p>
              <p>O coração tem o seu ninho</p>
              <p>Tem o amor em seu altar</p>
            </blockquote>
            <p style={{ textAlign: 'right' }}>poema de Sebastião de Carvalho</p>

            <p>Este poema escrito pelo já falecido Sebastião de Carvalho, amigo de longa data e parte da família, que bem representa os valores incutidos de forma generacional na família. Estes quatro versos, representados a azulejo na varanda do Mosteiro, são repetidos ano a ano e celebrados pelos membros familiares.</p>
            <p>A família da propriedade do Mosteiro de Landim já conta na sua nona geração, com a décima já à porta. E todas as gerações desta família tem as suas raízes e mantêm uma relação íntima com a cidade famalicense.</p>


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

            <p>Os terrenos do Mosteiro de Landim extendem-se por vários hectares. Ao longo destas terras agriculturadas, nasceu uma tradição de vinicultura que persiste até aos dias de hoje. Todos os anos, em Setembro, a família e amigos da família e de Landim juntam-se para manter este legado e participam nas vindimas. </p>
            <p>O produto deste esforço conjunto culmina num delicioso vinho verde Camélia, tão nosso como as nossas japoneiras. Este vinho já premiado em múltiplas ocasiões é exclusivo à região minhota é frutado, com aroma de média exuberância e é refrescante no paladar.</p>
          </div>
        </section>


        <section className="wrapper-carousel style5">
          <div className="inner-carousel">
            <Carousel loop widgets={[IndicatorDots]}>
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

            <p>O valor que se dá a uma festa não se limita apenas à ocasião, mas também ao que a rodeia. O Mosteiro de Landim não vale apenas pelo espaço que tem, mas também pela aura que a circunda e o ambiente que nela se vive. Basta entrar pelos portões do Mosteiro que irá logo perceber que encontrou o sítio e espaços ideais para reunir a sua família e amigos e e partilhar momentos em harmonia.</p>
            <p>Seja um simples almoço, uma festa de família, uma cerimónia religiosa, bodas de ouro ou um casamento, o Mosteiro acrescenta de variados espaços - o claustro, os jardins, a igreja e as salas centenárias. Cada uma adapta-se às necessidades do seu evento, oferecendo não só flexibilidade mas capacidade para eventos de qualquer número de pessoas.</p>
            <hr />
            <p>Paralelamente, o Mosteiro disponibiliza serviços de catering, decoração e organização de eventos através de parceiros privilegiados, que já conhecem os recantos da quinta e de todas as qualidades que a caracteriza. Somos flexíveis e deixamos os nossos convidados a escolher os seus próprios serviços, caso o desejam.</p>
          </div>

          <Grid>
            <Row>
              <Col lg={3} md={6}>
                <span className="image fit hover-container">
                  <Img fluid={spaces1}/>
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
                  <Img fluid={spaces2}/>
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
                  <Img fluid={spaces3}/>
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
                  <Img fluid={spaces4}/>
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
    banner: file(relativePath: {eq: "about_us/banner.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    
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
