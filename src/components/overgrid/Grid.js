// PhotoFrameCollage.js

import React from 'react';
import tw from 'twin.macro';

const CollageContainer = tw.div`relative w-[20rem] h-[30rem] border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg`;
const ImageWrapper = tw.div`absolute overflow-hidden rounded-lg`;
const CollageImage = tw.img`object-cover w-full h-full`;

const Grid = ({ images }) => {
  return (
    <CollageContainer>
      {images.map((image, index) => (
        <ImageWrapper
          key={index}
          style={{
            top: image.top,
            left: image.left,
            width: image.width,
            height: image.height,
          }}
        >
          <CollageImage src={image.url} alt={image.alt} />
        </ImageWrapper>
      ))}
    </CollageContainer>
  );
};

export default Grid;
