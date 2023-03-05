import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from 're-carousel';

import LandingLayout from '../components/LandingLayout';
import IndicatorDots from '../components/CarouselDots';
import CarouselArrows from '../components/CarouselArrows';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import Lightbox from 'react-image-lightbox';

import config from '../../config';

function EventsPage({data}) {
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

  const carousel1 = data.carousel1.childImageSharp.fluid;
  const carousel2 = data.carousel2.childImageSharp.fluid;
  const carousel3 = data.carousel3.childImageSharp.fluid;
  const carousel4 = data.carousel4.childImageSharp.fluid;
  const carousel5 = data.carousel5.childImageSharp.fluid;
  const carousel6 = data.carousel6.childImageSharp.fluid;

  
  const carousel9 = data.carousel9.childImageSharp.fluid;

  const images = [space1, space2];

  return (
    <LandingLayout id="eventsPage" fullMenu>
      <article id="pageMain" className="eventsMain">
        <BackgroundImage
          Tag="header"
          fluid={banner}
          alt='photocredits to Bárbara Araújo' title='photocredits to Bárbara Araújo'
        >
          <h2>{t('events:heading')}</h2>
          <p className="subHeadingTilePage">{t('events:subHeading')}</p>
        </BackgroundImage>
        <section className="wrapper style5">
          <div className="inner">
            <h3>{t('events:firstParagraph.title')}</h3>
            <p>{t('events:firstParagraph.description1')}</p>
            <p>{t('events:firstParagraph.description2')}</p>
            <p>{t('events:firstParagraph.description3')}</p>
          </div>
        </section>

        <section id="spotlights" className="wrapper alt style2">
          <section className="spotlight no-pad">
            <div className="image">
              <Img fluid={cloisterPic}/>
            </div>
            <div className="content">
              <h2>{t('events:spotlights.cloister.title')}</h2>
              <p>{t('events:spotlights.cloister.description')}</p>
            </div>
          </section>
          <section className="spotlight no-pad">
            <div className="image">
              <Img fluid={gardenPic} alt='photocredits to Pedro Marcelino' title='photocredits to Pedro Marcelino'/>
            </div>
            <div className="content">
              <h2>{t('events:spotlights.gardens.title')}</h2>
              <p>{t('events:spotlights.gardens.description')}</p>
            </div>
          </section>
          <section className="spotlight no-pad">
            <div className="image">
              <Img fluid={roomPic}/>
            </div>
            <div className="content">
              <h2>{t('events:spotlights.rooms.title')}</h2>
              <p>{t('events:spotlights.rooms.description')}</p>
            </div>
          </section>
          <section className="spotlight no-pad">
            <div className="image">
              <Img fluid={churchPic}/>
            </div>
            <div className="content">
              <h2>{t('events:spotlights.church.title')}</h2>
              <p>{t('events:spotlights.church.description')}</p>
            </div>
          </section>
        </section>

        <section className="wrapper style5">
          <div className="inner">
            <h3>{t('events:secondParagraph.title')}</h3>
            <p>{t('events:secondParagraph.description1')}</p>
            <hr/>
            <h5>{t('events:secondParagraph.spaces.title')}</h5>
            <p>{t('events:secondParagraph.spaces.description1')}</p>
            <p>{t('events:secondParagraph.spaces.description2')}</p>
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
                      <Img fluid={space1} alt='photocredits to Ana Teresa Miranda' title='photocredits to Ana Teresa Miranda'/>
                      {t('events:secondParagraph.spaces.image1Caption')}
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
                      <Img fluid={space2} alt='photocredits to As Anas' title='photocredits to As Anas'/>
                      {t('events:secondParagraph.spaces.image2Caption')}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="wrapper style5 no-top">
          <div className="inner">
            <h5>{t('events:secondParagraph.decor.title')}</h5>
            <p>{t('events:secondParagraph.decor.description1')}</p>
            <p>
              <a href="https://saiotes.pt/" rel="noopener noreferrer" target="_blank">Saiotes</a>{t('events:secondParagraph.decor.description2')}
            </p>
            <p>
              <a href="https://eco.sapo.pt/2022/04/19/chefe-cozinheiro-do-ano-esta-de-volta-ja-distinguiu-chefs-como-henrique-sa-pessoa-e-luis-americo/"
              target="_blank" rel="noopener noreferrer"
              >Luís Américo</a>{t('events:secondParagraph.decor.description3')}
            </p>
          </div>
        </section>

        <section className="wrapper-carousel style5">
          <div className="inner-carousel">
            <Carousel loop widgets={[IndicatorDots, CarouselArrows]}>
              <BackgroundImage Tag="div" className="carousel-image" fluid={carousel1} alt='photocredits to Conta-me Como Foi' title='photocredits to Conta-me Como Foi'/>

              <BackgroundImage Tag="div" className="carousel-image" fluid={carousel2}/>

              <BackgroundImage Tag="div" className="carousel-image" fluid={carousel3} alt='photocredits to Saiotes' title='photocredits to Saiotes'/>
              <BackgroundImage Tag="div" className="carousel-image" fluid={carousel4} alt='photocredits to Madalena Abreu' title='photocredits to Madalena Abreu'/>
              <BackgroundImage Tag="div" className="carousel-image" fluid={carousel5} alt='photocredits to Pedro Marcelino' title='photocredits to Pedro Marcelino'/>
              <BackgroundImage Tag="div" className="carousel-image" fluid={carousel6} alt='photocredits to Pedro Marcelino' title='photocredits to Pedro Marcelino'/>
              
              <BackgroundImage Tag="div" className="carousel-image" fluid={carousel9}/>
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
    banner: file(relativePath: {eq: "events/banner.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    cloisterPic: file(relativePath: {eq: "events/cloister.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    gardenPic: file(relativePath: {eq: "events/garden.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    roomPic: file(relativePath: {eq: "events/rooms.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    churchPic: file(relativePath: {eq: "events/church.png"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    
    space1: file(relativePath: {eq: "events/space1.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},
    space2: file(relativePath: {eq: "events/space2.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp_tracedSVG }}},

    carousel1: file(relativePath: {eq: "events/carousel/1.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    carousel2: file(relativePath: {eq: "events/carousel/2.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    carousel3: file(relativePath: {eq: "events/carousel/3.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    carousel4: file(relativePath: {eq: "events/carousel/4.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    carousel5: file(relativePath: {eq: "events/carousel/5.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
    carousel6: file(relativePath: {eq: "events/carousel/6.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},

    
    carousel9: file(relativePath: {eq: "events/carousel/9.jpg"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
  }
`;

export default EventsPage;
