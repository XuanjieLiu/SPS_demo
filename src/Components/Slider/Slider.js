import React, { useState } from 'react';
import './Slider.css';

function Slider({onChange, initValue, name, subNum='', min=0, max=9, className='', showScale=false}) {
  const [value, setValue] = useState(initValue);

  const handleChange = (event) => {
    let value = event.target.value
    onChange(value)
    setValue(value);
  };

  return (
      <div className={`slider-container ${className}`}>
        <div className="slider-name">
          <span className="slider-name-font">{name}<sub>{subNum}</sub></span>
        </div>
        <div className="slider">
          <input 
            value={value} 
            onChange={handleChange} 
            className="slider-bar"
            type="range" 
            min={min}
            max={max}
          />
          {showScale? 
            <div className="slider-labels">
            <span>-2</span>
            <span>-1</span>
            <span>0</span>
            <span>1</span>
            <span>2</span>
          </div> : null}
        </div>
      </div>
  );
}

export default Slider;