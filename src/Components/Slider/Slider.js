import React, { useState } from 'react';
import './Slider.css';

function Slider({onChange, initValue, name, subNum='', min=0, max=9, className=''}) {
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
          {/* <div className="slider-labels">
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
        </div> */}
        </div>
      </div>
  );
}

export default Slider;