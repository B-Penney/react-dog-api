import React from 'react';

function BreedSelector({ breeds, breed, setBreed, imageCount, setImageCount }) {
  const handleBreedChange = (e) => {
    setBreed(e.target.value);
  };

  const handleCountChange = (e) => {
    setImageCount(e.target.value);
  };

  return (
    <div>
      <select value={breed} onChange={handleBreedChange}>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      <input
        type="number"
        min="1"
        value={imageCount}
        onChange={handleCountChange}
      />
    </div>
  );
}

export default BreedSelector;

