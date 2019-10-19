import React from 'react';
import ImageGallery from 'react-image-gallery';

import defaultImage from '../assets/images/default_image.jpg';

// CLOISTER
import cloister1 from '../assets/images/photo-gallery/full-images/cloister1.png';
import cloister1Thumbnail from '../assets/images/photo-gallery/thumbnails/cloister1.png';
import cloister2 from '../assets/images/photo-gallery/full-images/cloister2.png';
import cloister2Thumbnail from '../assets/images/photo-gallery/thumbnails/cloister2.png';
import cloister3 from '../assets/images/photo-gallery/full-images/cloister3.png';
import cloister3Thumbnail from '../assets/images/photo-gallery/thumbnails/cloister3.png';
import cloister4 from '../assets/images/photo-gallery/full-images/cloister4.png';
import cloister4Thumbnail from '../assets/images/photo-gallery/thumbnails/cloister4.png';
import cloister5 from '../assets/images/photo-gallery/full-images/cloister5.png';
import cloister5Thumbnail from '../assets/images/photo-gallery/thumbnails/cloister5.png';

// GARDEN
import garden from '../assets/images/photo-gallery/full-images/garden.png';
import gardenThumbnail from '../assets/images/photo-gallery/thumbnails/garden.png';
import garden2 from '../assets/images/photo-gallery/full-images/garden2.png';
import gardenThumbnail2 from '../assets/images/photo-gallery/thumbnails/garden2.png';
import garden3 from '../assets/images/photo-gallery/full-images/garden3.png';
import gardenThumbnail3 from '../assets/images/photo-gallery/thumbnails/garden3.png';
import garden4 from '../assets/images/photo-gallery/full-images/garden4.png';
import gardenThumbnail4 from '../assets/images/photo-gallery/thumbnails/garden4.png';
import garden5 from '../assets/images/photo-gallery/full-images/garden5.png';
import gardenThumbnail5 from '../assets/images/photo-gallery/thumbnails/garden5.png';
import garden6 from '../assets/images/photo-gallery/full-images/garden6.png';
import gardenThumbnail6 from '../assets/images/photo-gallery/thumbnails/garden6.png';
import garden7 from '../assets/images/photo-gallery/full-images/garden7.png';
import gardenThumbnail7 from '../assets/images/photo-gallery/thumbnails/garden7.png';
import garden8 from '../assets/images/photo-gallery/full-images/garden8.png';
import gardenThumbnail8 from '../assets/images/photo-gallery/thumbnails/garden8.png';
import garden9 from '../assets/images/photo-gallery/full-images/garden9.png';
import gardenThumbnail9 from '../assets/images/photo-gallery/thumbnails/garden9.png';
import garden10 from '../assets/images/photo-gallery/full-images/garden10.png';
import gardenThumbnail10 from '../assets/images/photo-gallery/thumbnails/garden10.png';

// ROOMS
import room1 from '../assets/images/photo-gallery/full-images/room1.png';
import roomThumbnail1 from '../assets/images/photo-gallery/thumbnails/room1.png';
import room2 from '../assets/images/photo-gallery/full-images/room2.png';
import roomThumbnail2 from '../assets/images/photo-gallery/thumbnails/room2.png';
import room3 from '../assets/images/photo-gallery/full-images/room3.png';
import roomThumbnail3 from '../assets/images/photo-gallery/thumbnails/room3.png';

// CHURCH
import church1 from '../assets/images/photo-gallery/full-images/church1.png';
import churchThumbnail1 from '../assets/images/photo-gallery/thumbnails/church1.png';
import church2 from '../assets/images/photo-gallery/full-images/church2.png';
import churchThumbnail2 from '../assets/images/photo-gallery/thumbnails/church2.png';
import church3 from '../assets/images/photo-gallery/full-images/church3.png';
import churchThumbnail3 from '../assets/images/photo-gallery/thumbnails/church3.png';

const images = [
  {
    original: cloister1,
    thumbnail: cloister1Thumbnail,
    description: 'Example description yada yada',
  },
  {
    original: cloister2,
    thumbnail: cloister2Thumbnail,
    description: 'Example description yada yada',
  },
  {
    original: cloister3,
    thumbnail: cloister3Thumbnail,
    description: 'Example description yada yada',
  },
  {
    original: cloister4,
    thumbnail: cloister4Thumbnail,
    description: 'Example description yada yada',
  },
  {
    original: cloister5,
    thumbnail: cloister5Thumbnail,
    description: 'Example description yada yada',
  },
  {
    original: garden,
    thumbnail: gardenThumbnail,
    description: 'Example description yada yada',
  },
  {
    original: garden2,
    thumbnail: gardenThumbnail2,
    description: 'Example description yada yada',
  },
  {
    original: garden3,
    thumbnail: gardenThumbnail3,
    description: 'Example description yada yada',
  },
  {
    original: garden4,
    thumbnail: gardenThumbnail4,
    description: 'Example description yada yada',
  },
  {
    original: garden5,
    thumbnail: gardenThumbnail5,
    description: 'Example description yada yada',
  },
  {
    original: garden6,
    thumbnail: gardenThumbnail6,
  },
  {
    original: garden7,
    thumbnail: gardenThumbnail7,
  },
  {
    original: garden8,
    thumbnail: gardenThumbnail8,
  },
  {
    original: garden9,
    thumbnail: gardenThumbnail9,
  },
  {
    original: garden10,
    thumbnail: gardenThumbnail10,
  },
  {
    original: room1,
    thumbnail: roomThumbnail1,
  },
  {
    original: room2,
    thumbnail: roomThumbnail2,
  },
  {
    original: room3,
    thumbnail: roomThumbnail3,
  },
  {
    original: church1,
    thumbnail: churchThumbnail1,
  },
  {
    original: church2,
    thumbnail: churchThumbnail2,
  },
  {
    original: church3,
    thumbnail: churchThumbnail3,
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
