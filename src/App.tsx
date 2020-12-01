import React from 'react';
import Rating from './components/Rating';

function App() {
  
  const handleRating = (selectedRating: number) => {
    // rating to share for other child components can be set here
    console.log(selectedRating);
  }

  return (
    <Rating handler={handleRating} />
  );
}

export default App;
