import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';
import Img from 'gatsby-image'

import LandingLayout from '../components/LandingLayout';

import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import BackgroundImage from 'gatsby-background-image';
import { Col, Grid, Row } from 'react-flexbox-grid';
import Lottie from 'react-lottie';

import igAnim from '../assets/images/lottie/instagram.json';


function ImageGallery({images, onImageClick}) {
  return images.map(img => (
    <div key={img.src} className="gallery-item" onClick={() => onImageClick(img)}>
      <Img className="gallery-image"
           fluid={img.node.childImageSharp.thumb}/>
    </div>
  ))
};

function PhotoGalleryPage({ data }) {
  const { t } = useTranslation();

  const [lightboxIsOpen, setToggleLightbox] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const banner = data.banner.childImageSharp.fluid;
  const garden = data.garden.edges;
  const cloister = data.cloister.edges;
  const rooms = data.rooms.edges;
  const church = data.church.edges;

  // Must be in the same order as the sections
  const images = garden.concat(cloister).concat(rooms).concat(church);

  const onImageClick = (image) => {
    setPhotoIndex(images.indexOf(image));
    setToggleLightbox(true);
  };

  return (
    <LandingLayout fullMenu>
      <article id="pageMain">
        <BackgroundImage
          Tag="header"
          fluid={banner}
        >
          <h2>{t('photo_gallery:title')}</h2>
          <p>{t('photo_gallery:subHeading')}</p>
        </BackgroundImage>


        <section className="wrapper style5">
          <div className="inner">
            <blockquote>{t('photo_gallery:quote')}</blockquote>
            <p style={{textAlign: 'right', opacity: .5 }}>{t('photo_gallery:quoteAuthor')}</p>

            <p>{t('photo_gallery:paragraph:description1')}</p>
            <p>{t('photo_gallery:paragraph:description2')}</p>
            <p>{t('photo_gallery:paragraph:description3')}</p>

          </div>
        </section>

        <section className="wrapper style5 garden_bg">
          <div className="inner">
            <h2 align="center">{t('photo_gallery:gardenTitle')}</h2>
            <p align="center">Colocar texto aqui. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </section>

        <section className="wrapper style3 special no-top photogallery garden_bg">
          <div className="inner-gallery">
            <ul className="features">
              <div id="photo-gallery" className="container">
                <div className="gallery">
                  <ImageGallery images={garden} onImageClick={onImageClick}/>
                </div>
              </div>
            </ul>
          </div>
        </section>


        <section className="wrapper style5 cloister_bg">
          <div className="inner">
            <h2 align="center">{t('photo_gallery:cloisterTitle')}</h2>
            <p align="center">Colocar texto aqui. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </section>

        <section className="wrapper style3 special no-top photogallery cloister_bg">
          <div className="inner-gallery">
            <ul className="features">
              <div id="photo-gallery" className="container">
                <div className="gallery">
                  <ImageGallery images={cloister} onImageClick={onImageClick}/>
                </div>
              </div>
            </ul>
          </div>
        </section>



        <section className="wrapper style5 room_bg">
          <div className="inner">
            <h2 align="center">{t('photo_gallery:roomsTitle')}</h2>
            <p align="center">Colocar texto aqui. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </section>

        <section className="wrapper style3 special no-top photogallery room_bg">
          <div className="inner-gallery">
            <ul className="features">
              <div id="photo-gallery" className="container">
                <div className="gallery">
                  <ImageGallery images={rooms} onImageClick={onImageClick}/>
                </div>
              </div>
            </ul>
          </div>
        </section>



        <section className="wrapper style5 church_bg">
          <div className="inner">
            <h2 align="center">{t('photo_gallery:churchTitle')}</h2>
            <p align="center">Colocar texto aqui. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </section>

        <section className="wrapper style3 special no-top photogallery church_bg">
          <div className="inner-gallery">
            <ul className="features">
              <div id="photo-gallery" className="container">
                <div className="gallery">
                  <ImageGallery images={church} onImageClick={onImageClick}/>
                </div>
              </div>
            </ul>
          </div>
        </section>

      </article>

      <section id="two" className="wrapper alt style2">
          <section id="photogallerySpotlight" className="spotlight">
            <div className="spotlight-container">
              <Grid>
                <Row className="center-row">
                  <Col md={6} className="center-col" style={{pointerEvents: "none"}}>
                    <Lottie
                      options={{
                        animationData: igAnim,
                        loop: false,
                        autoplay: true
                      }}
                      height={200}
                      width={200}
                    />
                  </Col>
                  <Col md={6} className="center-col">
                    <h2>{t('photo_gallery:spotlight.title')}</h2>
                    <p>{t('photo_gallery:spotlight.description')}</p>
                  </Col>
                </Row>
              </Grid>
            </div>
          </section>
        </section>

      {lightboxIsOpen && (
        <Lightbox
          mainSrc={images[photoIndex].node.childImageSharp.full.srcWebp}
          nextSrc={images[(photoIndex + 1) % images.length].node.childImageSharp.full.srcWebp}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].node.childImageSharp.full.srcWebp}
          onCloseRequest={() => setToggleLightbox(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
    </LandingLayout>
  );
}

export const query = graphql`
query ImagesForGallery {
  church: allFile(filter: {relativeDirectory: {eq: "photo-gallery/church"}}) { edges { node { childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270, cropFocus: CENTER, fit: COVER, quality: 40) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
            full: fluid(maxWidth: 3000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
   } } } }
  },
  cloister: allFile(filter: {relativeDirectory: {eq: "photo-gallery/cloister"}}) { edges { node { childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270, cropFocus: CENTER, fit: COVER, quality: 40) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
            full: fluid(maxWidth: 3000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
   } } } }
  },
  garden: allFile(filter: {relativeDirectory: {eq: "photo-gallery/garden"}}) { edges { node { childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270, cropFocus: CENTER, fit: COVER, quality: 40) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
            full: fluid(maxWidth: 3000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
   } } } }
  },
  rooms: allFile(filter: {relativeDirectory: {eq: "photo-gallery/rooms"}}) { edges { node { childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270, cropFocus: CENTER, fit: COVER, quality: 40) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
            full: fluid(maxWidth: 3000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
   } } } }
  },
  banner: file(relativePath: {eq: "photo-gallery/banner.png"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
}
`;

export default PhotoGalleryPage;
