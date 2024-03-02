// ImageSlider.js
import React, { useState, useEffect } from 'react';
import Slider from '../Slider/Slider';
import JSZip from 'jszip';
import './ImageSlider.css'
import {getEnvPath} from '../../commonUtils';

function ImageSlider({imgRoot, initValue, title, zParams, children, maxImg=10}) {
  const [values, setValues] = useState(initValue);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState({});

  const handleChange = (index) => (v) => {
    const newValues = [...values];
    newValues[index] = v;
    setValues(newValues);
  };

  
  useEffect(() => {
    fetch(getEnvPath(`${imgRoot}.zip`))
      .then(response => response.blob())
      .then(JSZip.loadAsync)
      .then(zip => {
        const promises = [];
        zip.forEach((relativePath, zipEntry) => {
          if (zipEntry.name.endsWith('.png')) {
            promises.push(zipEntry.async('blob').then(blob => {
              const url = URL.createObjectURL(blob);
              return [zipEntry.name, url];
            }));
          }
        });
        return Promise.all(promises);
      })
      .then(entries => {
        const images = Object.fromEntries(entries);
        setImages(images);
        setLoading(false);
      });
  }, []);



  const value2img = (x, y, z) => {
    return images[`${imgRoot.split('/')[1]}/${x}_${y}_${z}_.png`];
  }


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
                {loading ? 
                  <div className='imgLoading'><div className="loader"></div>Loading...</div> : 
                  <img className="ballImage" src={value2img(...values)} alt='...' />}
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