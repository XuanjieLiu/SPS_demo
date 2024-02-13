import './AudioSlider.css'
import React, { useState } from 'react';
import Slider from '../Slider/Slider';


function SpecViewer({title, specPath, audioPath}) {
    return (
        <div className='specView-container'>
            <div className='title'>
                <span>{title}</span>
            </div>
            <img className='specImg' src={specPath} alt=''/>
            <audio controls key={audioPath} className='audio_control'>
                <source src={audioPath} type="audio/wav" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}

function AudioSlider({initValue=0, title, intervel, nTrans, children, audioDir}) {
    const [value, setValues] = useState(initValue);

    const handleChange = (v) => {
        setValues(v);
    };

    return (
        <div className='audio-sliders-container'>
            <div className='audio-sliders-title'>
                <span>{title}</span>
            </div>
            <div className='audio-slider-imgs'>
                <SpecViewer 
                    title='Original audio'
                    specPath={`${audioDir}/origin.png`}
                    audioPath={`${audioDir}/origin.wav`}
                />
                <div className='arrow_container'>
                    <div className='translation_text'>
                        Translation:
                    </div>
                    <div className='translation_value'>
                        {(value * intervel).toFixed(1)}
                    </div>
                    <div className="arrow">
                        <div className="line"></div>
                        <div className="head"></div>
                    </div>
                </div>
                <SpecViewer 
                    title='Transformed audio'
                    specPath={`${audioDir}/${value}.png`}
                    audioPath={`${audioDir}/${value}.wav`}
                />
            </div>
            <div className='slider'>
                <Slider
                    initValue={value}
                    onChange={handleChange}
                    name={`z values translation`}
                    min={initValue-nTrans}
                    max={initValue+nTrans}
                />
            </div>
            <div className='below-caption'>
                {children}
            </div>
        </div>
    );
}

export default AudioSlider;