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
                        <p className="landing-header__text">Можно ли подать документы сразу в восемь вузов? До какого числа надо успеть? Edgenode оставит Вас без вопросов и упростит подачу документов в ВУЗ.</p>
                        <Link to="/main/registration" className="login-form__link"><button className="landing-header__registration-button">Зарегистрироваться</button></Link>
                     </div>
                     <div className="landing-header__block-slider">
                        <div className="landing-header__slider-small"><SliderComponent></SliderComponent></div>
                     </div>
                </div>
            </div>
        );
    }
}