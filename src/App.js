import React, { useState, useEffect } from 'react';
import './App.css';
import BreedSelector from './Components/BreedSelector';
import DogGallery from './Components/DogGallery';

function App() {
  const [breed, setBreed] = useState('');
  const [imageCount, setImageCount] = useState(1);
  const [images, setImages] = useState([]);
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      const response = await fetch(`
https://dog.ceo/api/breed/
${breed}/images/random/${images}`);
      const data = await response.json();
      const breeds = Object.keys(data.message);
      setBreeds(breeds);
      setBreed(breeds[0]); // Set the initial breed
    };

    fetchBreeds();
  }, []);

  useEffect(() => {
    const fetchImages = async (breed) => {
      if (breed) {
        const response = await fetch(`
https://dog.ceo/api/breed/
${breed}/images/random/${images}`);
        const data = await response.json();
        setImages(data.message);
      }
    };

    fetchImages(breed, imageCount);
  }, [breed, imageCount]);

  return (
    <div className="App">
      <h1>Dog Image Gallery</h1>
      <BreedSelector
        breeds={breeds}
        breed={breed}
        setBreed={setBreed}
        imageCount={imageCount}
        setImageCount={setImageCount}
      />
      <DogGallery images={images} />
    </div>
  );
}

export default App;
