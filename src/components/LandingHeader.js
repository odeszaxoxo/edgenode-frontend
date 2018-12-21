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
                        <h1 className="landing-header__title">Поступление в ВУЗ на новом уровне</h1>
                        <p className="landing-header__text">1111111111111111 1111111111111111111111111111111 111111111 111111111111111 111111111111</p>
                        <Link to="/registration/" className="login-form__link"><button className="landing-header__registration-button">Зарегистрироваться</button></Link>
                     </div>
                     <div className="landing-header__block-slider">
                        <div className="landing-header__slider-small"><SliderComponent></SliderComponent></div>
                     </div>
                </div>
            </div>
        );
    }
}