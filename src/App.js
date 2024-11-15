import './App.css';
import React from 'react';

import Accordian from './components/accordion';
import RandomColor from './components/random_colors';
import StarRating from './components/starRating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';

function App() {
  return (
    <div className="App">
      <Accordian />
      <RandomColor />
      <hr />
      <StarRating noOfStars = {10}/>
      <hr />
      <ImageSlider url={"https://picsum.photos/v2/list?page=2&limit=5"}/>
      <hr />
      <LoadMoreData />
    </div>
  );
}

export default App;
