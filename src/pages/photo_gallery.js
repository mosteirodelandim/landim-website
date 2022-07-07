import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';
import Img from 'gatsby-image'

import LandingLayout from '../components/LandingLayout';

import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';

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

  const banner = data.banner.childImageSharp.fluid.srcWebp;
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
        <header style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${banner})`}}>
          <h2>{t('photo_gallery:title')}</h2>
          <p>{t('photo_gallery:subHeading')}</p>
        </header>

        <section className="wrapper style5">
          <div className="inner">
            <blockquote>{t('photo_gallery:quote')}</blockquote>
            <p style={{fontWeight: "bold"}}>{t('photo_gallery:quoteAuthor')}</p>

            <p>{t('photo_gallery:paragraph:description1')}</p>
            <p>{t('photo_gallery:paragraph:description2')}</p>
            <p>{t('photo_gallery:paragraph:description3')}</p>

          </div>
        </section>

        <section className="wrapper style5 no-top">
          <div className="inner">
            <h2 align="center">{t('photo_gallery:gardenTitle')}</h2>
          </div>
        </section>

        <section id="photogallery" className="wrapper style3 special no-top">
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


        <section className="wrapper style5">
          <div className="inner">
            <h2 align="center">{t('photo_gallery:cloisterTitle')}</h2>
          </div>
        </section>

        <section id="photogallery" className="wrapper style3 special no-top">
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



        <section className="wrapper style5">
          <div className="inner">
            <h2 align="center">{t('photo_gallery:roomsTitle')}</h2>
          </div>
        </section>

        <section id="photogallery" className="wrapper style3 special no-top">
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



        <section className="wrapper style5">
          <div className="inner">
            <h2 align="center">{t('photo_gallery:churchTitle')}</h2>
          </div>
        </section>

        <section id="photogallery" className="wrapper style3 special no-top">
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
              ...GatsbyImageSharpFluid_withWebp
            }
            full: fluid(quality:100) {
              ...GatsbyImageSharpFluid_withWebp
   } } } }
  },
  cloister: allFile(filter: {relativeDirectory: {eq: "photo-gallery/cloister"}}) { edges { node { childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270, cropFocus: CENTER, fit: COVER, quality: 40) {
              ...GatsbyImageSharpFluid_withWebp
            }
            full: fluid(quality:100) {
              ...GatsbyImageSharpFluid_withWebp
   } } } }
  },
  garden: allFile(filter: {relativeDirectory: {eq: "photo-gallery/garden"}}) { edges { node { childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270, cropFocus: CENTER, fit: COVER, quality: 40) {
              ...GatsbyImageSharpFluid_withWebp
            }
            full: fluid(quality:100) {
              ...GatsbyImageSharpFluid_withWebp
   } } } }
  },
  rooms: allFile(filter: {relativeDirectory: {eq: "photo-gallery/rooms"}}) { edges { node { childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270, cropFocus: CENTER, fit: COVER, quality: 40) {
              ...GatsbyImageSharpFluid_withWebp
            }
            full: fluid(quality:100) {
              ...GatsbyImageSharpFluid_withWebp
   } } } }
  },
  banner: file(relativePath: {eq: "photo-gallery/banner.png"}) { childImageSharp { fluid(maxWidth: 3000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }}},
}
`;

/*
query ImagesForGallery {
    allFile(filter: {relativeDirectory: {eq: "photo-gallery/full-images"}}) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270, quality: 100) {
              ...GatsbyImageSharpFixed
            }
            full: fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  */

export default PhotoGalleryPage;
