// ImageSlider.js
import React, { useState } from 'react';
import Slider from '../Slider/Slider';
import './ImageSlider.css'
import {getEnvPath} from '../../commonUtils';

function ImageSlider({imgRoot, initValue, title, zParams, children}) {
  const [values, setValues] = useState(initValue);

  const handleChange = (index) => (v) => {
    const newValues = [...values];
    newValues[index] = v;
    setValues(newValues);
  };

  const imagePath = getEnvPath(`${imgRoot}/${values.join('_')}_.png`);

  const value2z = () => {
    let z = [0, 0, 0]
    for (let i = 0; i < values.length; i++) {
      const interval = (zParams[i][1] - zParams[i][0]) / (zParams[i][2] - 1)
      const num = zParams[i][0] + values[i] * interval
      z[i] = num.toFixed(2)
    }
    const str = z.join(', ')
    return str
  }

  return (
    <div className='img-sliders-container'>
        <div className='img-sliders-title'>
            <span>{title}</span>
        </div>
        <div className='slider-and-image'>
            <div className='sliders-group'>
                {values.map((value, index) => (
                <Slider 
                  key={index} 
                  initValue={value} 
                  onChange={handleChange(index)} 
                  name={`z`}
                  subNum={index+1}
                />
                ))}
            </div>
            <div className='image-container'>
                <img className="ballImage" src={imagePath} alt={imagePath} />
                <div className='slider-image-label'>
                    <span>z = [{value2z()}]<sup>T</sup></span>
                </div>
            </div>
        </div>
        <div className='below-caption'>
              {children}
        </div>
    </div>
  );
}

export default ImageSlider;