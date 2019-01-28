import React from 'react';
import './LandingContent.scss';
import img1 from '../assets/landing-image1.png';
import img2 from '.././assets/landing-image2.png';
import img3 from '.././assets/landing-image3.png';
import img4 from '.././assets/Frame1.png';
import img5 from '.././assets/Frame2.png';
import img6 from '.././assets/Frame3.png';
import img7 from '.././assets/Frame4.png';
import {BigSliderComponent} from './slider';
import {Link} from 'react-router-dom';


export const LandingContentComponent = () => {
    
    return (
        <div className="main-landing">
            <h1 className="landing-content__container-title">What problems are we solving?</h1>
                <div className="landing-content__container">
                    <div className="landing-content__block">
                        <img src={img1} alt="" className="landing-content__block-image"></img>
                        <h2 className="landing-content__block-title">We save your time.</h2>
                        <p className="landing-content__block-text">Instead of spending weeks researching education systems and opportunities around
the world, just use our adaptive search engines and get the information in minutes.</p>
                    </div>
                    <div className="landing-content__block">
                        <img src={img2} alt="" className="landing-content__block-image"></img>
                        <h2 className="landing-content__block-title">We save your money.</h2>
                        <p className="landing-content__block-text">We do not make money on individual cases like consulting firms. With us, you are
the researcher and you are the contributor.</p>
                    </div>
                    <div className="landing-content__block">
                        <img src={img3} alt="" className="landing-content__block-image"></img>
                        <h2 className="landing-content__block-title">We give you confidence.</h2>
                        <p className="landing-content__block-text">We base our search system on primary source data and deep comparative analysis.</p>
                    </div>
                </div>
                <div className="landing-content__slider">
                    <BigSliderComponent></BigSliderComponent>
                </div>    
            <h1 className="landing-content__container-title">Basic scenario</h1>
                <div className="landing-content__info">
                    <div className="landing-image__container">
                        <div className="landing-image__wrapper">
                            <div className="landing-image__image-wrapper">
                                <img src={img4} alt="" className="landing-image__image" />
                            </div>
                            <div className="landing-image__text">
                                <div className="landing-image__text-title">Step 1</div>
                                <div className="landing-image__text-content">Create you account with EdgeNode, setting up your notification preferences.</div>
                            </div>
                        </div>
                        <div className="landing-image__line-wrapper">
                            <div className="landing-image__line"></div>
                        </div>
                        <div className="landing-image__wrapper">
                            <div className="landing-image__image-wrapper">
                                <img src={img5} alt="" className="landing-image__image" />
                            </div>
                            <div className="landing-image__text">
                                <div className="landing-image__text-title">Step 2</div>
                                <div className="landing-image__text-content">Fill in your profile. The more data you will provide, the more accurate your results
would be. If a qualification you got is missing, describe it in the comment section and we will take
it into account.</div>
                            </div>
                        </div>
                        <div className="landing-image__line-wrapper">
                            <div className="landing-image__line"></div>
                        </div>
                        <div className="landing-image__wrapper">
                            <div className="landing-image__image-wrapper">
                                <img src={img6} alt="" className="landing-image__image" />
                            </div>
                            <div className="landing-image__text">
                                <div className="landing-image__text-title">Step 3</div>
                                <div className="landing-image__text-content">You can either choose a static search framework and let us pick the best options for
you right now.</div>
                            </div>
                        </div>
                        <div className="landing-image__line-wrapper">
                            <div className="landing-image__line"></div>
                        </div>
                        <div className="landing-image__wrapper">
                            <div className="landing-image__image-wrapper">
                                <img src={img7} alt="" className="landing-image__image" />
                            </div>
                            <div className="landing-image__text">
                                <div className="landing-image__text-title">Step 4</div>
                                <div className="landing-image__text-content">Or pick your dream destinations and we will create detailed road-maps for you
individually.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="landing-footer__registration">
                    <h1 className="landing-footer__text">Ready to join in      ?</h1>
                    <Link to="/main/registration" className="login-form__link"><button className="landing-footer__registration-button">Register</button></Link>
                </div>
        </div>
    );
}
