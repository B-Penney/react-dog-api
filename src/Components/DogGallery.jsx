import React from 'react';

function DogGallery({ images }) {
  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Dog ${index}`} />
      ))}
    </div>
  );
}

export default DogGallery;
