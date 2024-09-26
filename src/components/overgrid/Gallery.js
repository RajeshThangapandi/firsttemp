// Gallery.js

import React from 'react';
import Grid from './Grid';
import tw from 'twin.macro';

const images = [
  {
    url: 'https://images.pexels.com/photos/256447/pexels-photo-256447.jpeg',
    alt: 'Construction Image 1',
    width: '50%',   // Adjust the width as needed
    height: '40%',  // Adjust the height as needed
    top: '0%',      // Position from the top
    left: '0%',     // Position from the left
  },
  {
    url: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
    alt: 'Construction Image 2',
    width: '50%',
    height: '60%',
    top: '40%',
    left: '0%',
  },
  {
    url: 'https://images.pexels.com/photos/2400407/pexels-photo-2400407.jpeg',
    alt: 'Construction Image 3',
    width: '50%',
    height: '50%',
    top: '0%',
    left: '50%',
  },
  {
    url: 'https://images.pexels.com/photos/3739918/pexels-photo-3739918.jpeg',
    alt: 'Construction Image 4',
    width: '40%',
    height: '40%',
    top: '50%',
    left: '50%',
  },
  {
    url: 'https://images.pexels.com/photos/4506108/pexels-photo-4506108.jpeg',
    alt: 'Construction Image 5',
    width: '100%',
    height: '50%',
    top: '0%',
    left: '50%',
  },
];

const Container = tw.div`flex flex-col items-center justify-center p-4`;
const Title = tw.h1`text-2xl font-bold mb-4`;

const Gallery = () => {
  return (
    <Container>
      <Title>Photo Frame Collage</Title>
      <Grid images={images} />
    </Container>
  );
};

export default Gallery;
