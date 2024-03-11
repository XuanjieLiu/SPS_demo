import React from 'react';
import './ScaleTaskDemo.css';
import AudioSlider from '../AudioSlider/AudioSlider';

const ScaleTaskDemo = () => {
    return (
        <div className='scaleTaskDemo-container'>
            <h1 className="scaleTaskDemo-title">Audio Task Demos: Major Scale Runs</h1>
            <div className="scaleTaskDemo-description">
                <p className="scaleTaskDemo-text">
                The following demos serve as a supplement to Section 4.1 of the paper.<br />
                We aim to evaluate the models' ability to learn a one-dimensional pitch representation that aligns linearly with numerical pitch systems, 
                such as MIDI. &nbsp;
                {/* Given that absolute pitch sensitivity varies among individuals, 
                we employ relative pitch to assess the linearity of the learned representations.  */}
                By adjusting the slider, 
                you translate the z value for each note in the scale. 
                Then listen to the transformed audio, you can determine whether the model has successfully learned a <em>linear pitch</em> representation, 
                evidenced by the preservation of the major scale run's characteristic sound.
                The audio at the zero position is the reconstruction of the original major scale run without any pitch translation.
                </p>
            </div>
            <AudioSlider 
                initValue={0}
                title={'Demo 1: SPS learns a pitch factor linear to human perception'}
                intervel={0.5}
                nTrans={4}
                audioDir={'/model_symm_audios'}
            >
                <div>
                    When you adjust the slider and listen to the transformed audio, 
                    you'll notice that the pitches of the notes in the major scale run shift uniformly. 
                    This consistent alteration demonstrates that the model has effectively learned a pitch representation linear to human perception. 
                    The constant amount of pitch change for each note allows the sequence to retain the characteristics of the major scale.
                </div>
            </AudioSlider>    
            <AudioSlider 
                initValue={0}
                title={'Demo 2: SPS w/o physical symmetry (ablation)'}
                intervel={0.5}
                nTrans={4}
                audioDir={'/model_noSymm_audios'}
            >
                <div>
                    The model without physical symmetry, essentially a VAE with a prior model, 
                    fails to learn a linear pitch representation. 
                    By translating the z values of notes, 
                    you can still alter pitch levels collectively,
                    but the characteristic sound of the major scale run is not preserved as the pitch shifts are not uniform.
                </div>
            </AudioSlider>  
            <AudioSlider 
                initValue={0}
                title={'Demo 3: Beta-VAE (baseline)'}
                intervel={0.5}
                nTrans={4}
                audioDir={'/model_betaVae_audios'}
            >
                <div>
                    The Beta-VAE model also fails to learn a linear pitch representation. 
                    The altered audio does not preserve the characteristic sound of the major scale run. 
                    The pitches of the notes change inconsistently, 
                    indicating that the model's learned pitch representation is not linear.
                </div>
            </AudioSlider> 
        </div>
    );
}

export default ScaleTaskDemo;