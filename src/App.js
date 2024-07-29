import React, { useState, useEffect } from "react";
import "./App.css";
import BreedSelector from "./Components/BreedSelector";
import DogGallery from "./Components/DogGallery";
import Footer from "./Components/Footer";
 
function App() {
  const [breed, setBreed] = useState("");
  const [imageCount, setImageCount] = useState(1);
  const [images, setImages] = useState([]);
  const [breeds, setBreeds] = useState([]);
 
  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        const breeds = Object.keys(data.message);
        setBreeds(breeds);
        setBreed(breeds[0]); // Set the initial breed
      } catch (error) {
        console.error("Error fetching breeds:", error);
      }
    };
 
    fetchBreeds();
  }, []);
 
  useEffect(() => {
    const fetchImages = async (breed, count) => {
      if (breed) {
        try {
          const response = await fetch(
            `https://dog.ceo/api/breed/${breed}/images/random/${count}`
          );
          const data = await response.json();
          setImages(data.message);
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      }
    };
 
    fetchImages(breed, imageCount);
  }, [breed, imageCount]);
 
  return (
      <div className="App">
        <h1>Ditzy Dogs</h1>
        <BreedSelector
          breeds={breeds}
          breed={breed}
          setBreed={setBreed}
          imageCount={imageCount}
          setImageCount={setImageCount}
        />
        <DogGallery images={images} />
      
        <Footer />
      </div>
    );
}
 
export default App;
