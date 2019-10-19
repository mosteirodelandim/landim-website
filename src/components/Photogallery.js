import ImageGallery from 'react-image-gallery';
import React from 'react';

import defaultImage from '../assets/images/default_image.jpg';

// CLOISTER
import cloister1 from '../assets/images/photo-gallery/full-images/cloister1.png';
import cloister1Thumbnail from '../assets/images/photo-gallery/thumbnails/cloister1.jpg';
import cloister2 from '../assets/images/photo-gallery/full-images/cloister2.png';
import cloister2Thumbnail from '../assets/images/photo-gallery/thumbnails/cloister2.jpg';
import cloister3 from '../assets/images/photo-gallery/full-images/cloister3.png';
import cloister3Thumbnail from '../assets/images/photo-gallery/thumbnails/cloister3.jpg';
import cloister4 from '../assets/images/photo-gallery/full-images/cloister4.png';
import cloister4Thumbnail from '../assets/images/photo-gallery/thumbnails/cloister4.jpg';


const images = [
  {
    original: cloister1,
    thumbnail: cloister1Thumbnail,
  },
  {
    original: cloister2,
    thumbnail: cloister2Thumbnail,
  },
  {
    original: cloister3,
    thumbnail: cloister3Thumbnail,
  },
  {
    original: cloister4,
    thumbnail: cloister4Thumbnail,
  },
];

function PhotoGallery() {
  return (
    <ImageGallery
      items={images}
      showFullscreenButton={false}
      showPlayButton={false}
      infinite
      showIndex
      onErrorImage={defaultImage}
    />
  );
}

export default PhotoGallery;
