import React, { Component } from 'react';
import './LandingHeader.scss';
import {Link} from 'react-router-dom';
import { SliderComponent } from './slider';


export class LandingHeaderComponent extends Component {
    
    render() {

        return (
            <div className="landing-header">
                <div className="landing-header__container">
                    <div className="landing-header__block">
                        <h1 className="landing-header__title">Freedom technologies</h1>
                        <p className="landing-header__text">A dynamic search engine for the world of education and research. A bank for intellectual capital and personal achievements.</p>
                        <Link to="/main/registration" className="login-form__link"><button className="landing-header__registration-button">Register</button></Link>
                     </div>
                     <div className="landing-header__block-slider">
                        <div className="landing-header__slider-small"><SliderComponent></SliderComponent></div>
                     </div>
                </div>
            </div>
        );
    }
}