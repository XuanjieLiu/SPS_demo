import './Introduction.css';
import {getEnvPath} from '../../commonUtils';

function Introduction() {
    return (
        <div className="introduction">
            <div className='logos'>
                <div className='logo_container'>
                    <a href="https://mbzuai.ac.ae/" id="logo_mbz_link">
                        <img className="logo" id='logo_mbz' src={getEnvPath('/logos/logo_MBZUAI.png')} alt='' />
                    </a>
                </div>
                <div className='logo_container'>
                    <a href="https://www.nyu.edu/" id="logo_nyu_link">
                        <img className="logo" id='logo_nyu' src={getEnvPath('/logos/logo_NYU.png')} alt='' />
                    </a>
                </div>
                <div className='logo_container' id="logo_container_musicxlab">
                    <a href="http://www.musicxlab.com/#/index" id="logo_musicxlab_link">
                        <img className="logo" id='logo_musicxlab' src={getEnvPath('/logos/logo_musicXLab.jpeg')} alt='' />
                    </a>
                </div>
                <div className='logo_container' id="logo_container_neurips">
                    <a href="https://openreview.net/forum?id=3iSj4l8ZGT&noteId=3iSj4l8ZGT" id="logo_neurips_link">
                        <img className="logo" id='logo_neurips' src={getEnvPath('/logos/logo_NeurIPS.png')} alt='' />
                    </a>
                </div>
            </div>
            <div className="title">
                <a  href="https://arxiv.org/abs/2302.10890">
                    Learning Interpretable Low-dimensional Representation via Physical Symmetry
                </a>
            </div>
            <div className="authors">
                Xuanjie Liu,&nbsp;
                <a href='https://inspiring-yonath-a67980.netlify.app/#/'>Daniel Chin</a>,&nbsp;
                <a href='http://www.yichenwilliamhuang.com/'>Yichen Huang</a>,&nbsp;
                <a href='http://www.musicxlab.com/members/gus/'>Gus Xia</a>, 
            </div>
            {/* <div className="links">
                <p>[<a href="https://arxiv.org/abs/2302.10890">Paper</a>]</p>
                <p>[<a href="https://github.com/XuanjieLiu/Self-supervised-learning-via-Physical-Symmetry">Codes</a>]</p>
            </div> */}
            <div className="intro">
                This is the demonstration page for our paper presented at NeurIPS 2023, titled&nbsp;
                <a href="https://arxiv.org/abs/2302.10890"><i>Learning Interpretable Low-dimensional Representation via Physical Symmetry</i></a>.
                The source code for SPS is now publicly available on&nbsp;
                <a href='https://github.com/XuanjieLiu/Self-supervised-learning-via-Physical-Symmetry'>Github</a>.
                <br />
                <br />
                To intuitively understand the latent space learned by the different models,
                you can adjust latent code values via slider and observe decoder reconstructions.
                We compare the SPS with two other models: an ablation version without physical symmetry, 
                essentially a Variational Autoencoder (VAE) with a prior model, and a baseline model, Beta-VAE.
            </div>
        </div>
    );
}

export default Introduction;
