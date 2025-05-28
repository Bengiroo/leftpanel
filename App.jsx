import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [topSliderValue, setTopSliderValue] = useState(3); // Default value for top slider
  const [bottomSliderValue, setBottomSliderValue] = useState(2); // Default value for bottom slider
  const [isRotated, setIsRotated] = useState(false); // Track rotation state

  // Convert slider values to words
  const valueToWord = (value) => {
    const words = ['One', 'Two', 'Three', 'Four', 'Five'];
    return words[value - 1]; // Convert value to index (1-based)
  };

  const handleRotationClick = () => {
    setIsRotated((prevState) => !prevState); // Toggle rotation state
  };

  return (
    <div className="app-container">
      <div className="left-panel">
        <div className="modebutton">
          <button>MANUAL</button>
          <button>AUTO</button>
        </div>

        <div className="info-block">
          <div className="info-item">Multi</div>
          <div className="info-item">Win%</div>
          <div className="info-item">Size</div>
          <div className="info-item">Range</div>
        </div>

        <div className="slider-group-wrapper">
          {/* Top Slider */}
          <div className="slider-container">
            <input
              type="range"
              min="1"
              max="5"
              value={topSliderValue}
              onChange={(e) => setTopSliderValue(e.target.value)}
              className="slider"
            />
            <span className="slider-value">{valueToWord(topSliderValue)}</span>
          </div>

          {/* Bottom Slider */}
          <div className="slider-container">
            <input
              type="range"
              min="1"
              max="5"
              value={bottomSliderValue}
              onChange={(e) => setBottomSliderValue(e.target.value)}
              className="slider"
            />
            <span className="slider-value">{valueToWord(bottomSliderValue)}</span>
          </div>
        </div>

        {/* Rotation Button */}
        <button
          className={`rot-button ${isRotated ? 'rotated' : ''}`}
          onClick={handleRotationClick}
        ></button>

        <button className="fire-button"></button>
      </div>
      <div className="main-content">
        <h3>Battleship</h3>
        <p>Main content goes here.</p>

      </div>
    </div>
  );
};

export default App;