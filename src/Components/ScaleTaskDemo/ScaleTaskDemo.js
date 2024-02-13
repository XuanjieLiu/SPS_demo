import React from 'react';
import './ScaleTaskDemo.css';
import AudioSlider from '../AudioSlider/AudioSlider';

const ScaleTaskDemo = () => {
    return (
        <div className='scaleTaskDemo-container'>
            <h1 className="scaleTaskDemo-title">Audio Task Demo: The Major Scale Rounds</h1>
            <div className="scaleTaskDemo-description">
                <p className="scaleTaskDemo-text">
                This section demonstrates models trained on audio recordings of major scale rounds, 
                each beginning at a unique pitch (Section 4.1 of the paper). <br/> 
                We aim to interpret the models' ability to learn a one-dimensional pitch representation that aligns linearly with numerical pitch systems, 
                such as MIDI. Given that absolute pitch sensitivity varies among individuals, 
                we employ relative pitch to assess the linearity of the learned representations. 
                The demonstration involves a major scale round (Original audio); by adjusting the slider, 
                you translate the z value for each note in the scale. 
                Listening to the altered audio (Transformed audio) reconstructed from the decoder helps 
                determine whether the model has successfully learned a linear pitch representation, 
                evidenced by the preservation of the major scale round's characteristic sound.
                </p>
            </div>
            <AudioSlider 
                initValue={0}
                title={'Demo 4: SPS learns a pitch factor linear to human pitch numerical system'}
                intervel={0.5}
                nTrans={4}
                audioDir={'/model_symm_audios'}
            >
                <div>
                    When you adjust the slider and listen to the resulting audio, 
                    you'll notice that the pitches of the notes in the major scale round shift uniformly. 
                    This consistent alteration demonstrates that the model has effectively learned a linear pitch representation. 
                    Each note's pitch changes by a constant amount, 
                    yet the sequence retains the distinctive characteristics of a major scale round.
                </div>
            </AudioSlider>    
            <AudioSlider 
                initValue={0}
                title={'Demo 5: SPS w/o physical symmetry (ablation)'}
                intervel={0.5}
                nTrans={4}
                audioDir={'/model_noSymm_audios'}
            >
                <div>
                    The model without physical symmetry, essentially a VAE with a prior model, 
                    fails to learn a linear pitch representation. 
                    By translating the z values of notes, 
                    you can still alter pitch levels collectively,
                    but the characteristic sound of the major scale round is not preserved.
                </div>
            </AudioSlider>  
            <AudioSlider 
                initValue={0}
                title={'Demo 6: Beta-VAE (baseline)'}
                intervel={0.5}
                nTrans={4}
                audioDir={'/model_betaVae_audios'}
            >
                <div>
                    The Beta-VAE model also fails to learn a linear pitch representation. 
                    The altered audio does not preserve the characteristic sound of the major scale round. 
                    The pitches of the notes change inconsistently, 
                    indicating that the model's learned pitch representation is not linear.
                </div>
            </AudioSlider> 
        </div>
    );
}

export default ScaleTaskDemo;