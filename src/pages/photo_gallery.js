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

  const images = data.allFile.edges;

  const onImageClick = (image) => {
    setPhotoIndex(images.indexOf(image));
    setToggleLightbox(true);
  };

  console.log(images)

  return (
    <LandingLayout fullMenu>
      <article id="pageMain">
        <header id="photoGalleryHeader">
          <h2>{t('photo_gallery:title')}</h2>
          <p>{t('photo_gallery:subHeading')}</p>
        </header>

        <section id="photogallery" className="wrapper style3 special">
          <div className="inner-gallery">
            <ul className="features">
              <div id="photo-gallery" className="container">
                <div className="gallery">
                  <ImageGallery images={images} onImageClick={onImageClick}/>
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
  allFile(filter: {relativeDirectory: {eq: "photo-gallery/full-images"}}) {
    edges {
      node {
        childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270, cropFocus: CENTER, fit: COVER, quality: 40) {
              ...GatsbyImageSharpFluid_withWebp
            }
            full: fluid(quality:100) {
              ...GatsbyImageSharpFluid_withWebp
            }
        }
      }
    }
  }
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
