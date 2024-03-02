import React from 'react';
import ImageSlider from '../ImageSlider/ImageSlider';
import './BallTaskDemo.css';
import {getEnvPath} from '../../commonUtils';

const BallTaskDemo = () => {
    return (
        <div className="ballTaskDemo-container">
            <h1 className="ballTaskDemo-title">Video Task Demos: The 3D Bouncing Ball</h1>
            <div className="ballTaskDemo-description">
                <div className="ballTaskDemo-left-part">
                    <p className="ballTaskDemo-text">
                    The following demos serve as a supplement to Section 4.2 of the paper.<br />
                    {/* Figure 1 on the right displays five samples from the dataset used in training.<br />
                    The following demos illustrate the latent spaces of different models, all derived from the same dataset.  */}
                    By using the slider, you can adjust the latent vector z values
                    and bserve the changes in the reconstructed images on the right to see how the decoder interprets the latent space.
                    With constraints of physical symmetry, the each dimension of the latent vector z should correspond to an aixs in the Cartesian coordinate system.
                    </p>
                </div>
                {/* <div className="ballTaskDemo-right-part">
                    <img src={getEnvPath("/dataset_preview.gif")} alt="" />
                    <div className='ballTaskDemo-right-part-label'>
                        <span>Fig 1: Raw data</span>
                    </div>
                </div> */}
            </div>
            <ImageSlider 
                imgRoot="/model_symm_imgs"
                initValue={[4,4,4]}
                zParams={[[-1.4, 2.4, 10], [0., 1.3, 10], [-1.3, 3., 10]]}
                title={'Demo 1: SPS learns the Cartesian coordinate system'}
            >
                <div>
                    {/* By using the inductive bias of physical symmetry, 
                    we constraint two dimensions of the latent space to be equivalent to translation and rotation. */}
                    Dragging the sliders above you will find the latent space learned by the model is 
                    the position of the ball in the 3D space and is consistent with the physical symmetry we assumed.
                    Here those two dimensions are z<sub>1</sub> and z<sub>3</sub>, 
                    which correspond to the horizontal plane in Cartesian coordinate system.
                    The third one, z<sub>2</sub>, which is the unaugmented latent dimension, encodes the vertical location.
                    These characters demosntrate the interpretability of the learned representation.
                </div>
            </ImageSlider>
            <ImageSlider 
                imgRoot="/model_noSymm_imgs" 
                initValue={[4,4,4]} 
                zParams={[[-1.35, 1.35, 10], [-1.35, 1.35, 10], [-1.35, 1.35, 10]]}
                title={'Demo 2: SPS w/o physical symmetry (ablation)'}
            >
                <div>
                    Without physical symmetry, SPS reduce to a video prediction model composed of a VAE and a prior model.
                    The learned three dimensions of the latent space are not linear to the three aixs of a Cartesian coorinate system.
                 </div>
            </ImageSlider>
            <ImageSlider 
                imgRoot="/model_betaVae_imgs" 
                initValue={[4,4,4]} 
                zParams={[[-2., 2., 10], [-2., 2., 10], [-2., 2., 10]]}
                title={'Demo 3: Beta-VAE (baseline)'}
            >
                <div>
                    A Beta-VAE servicing as the baseline. Without any prior model, 
                    it can only learn the distribution of images but cannot predict the next frame.
                    Similar to the demo 2, the learned latent space has no interpretability.
                </div>
            </ImageSlider>
        </div>
    );
};

export default BallTaskDemo;
