import './App.css';
import React from 'react';

import Accordian from './components/accordion';
import RandomColor from './components/random_colors';
import StarRating from './components/starRating';

function App() {
  return (
    <div className="App">
      <Accordian />
      <RandomColor />
      <hr />
      <StarRating noOfStars = {10}/>
    </div>
  );
}

export default App;
