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
            <h1 className="landing-content__container-title">Как EDGENODE делает Вашу подачу проще?</h1>
                <div className="landing-content__container">
                    <div className="landing-content__block">
                        <img src={img1} className="landing-content__block-image"></img>
                        <h2 className="landing-content__block-title">Прост в использовании</h2>
                        <p className="landing-content__block-text">Бюджетное образовательное учреждение высшего образования в области культуры и искусства. </p>
                    </div>
                    <div className="landing-content__block">
                        <img src={img2} className="landing-content__block-image"></img>
                        <h2 className="landing-content__block-title">Тайм менеджмент</h2>
                        <p className="landing-content__block-text">Бюджетное образовательное учреждение высшего образования в области культуры и искусства. </p>
                    </div>
                    <div className="landing-content__block">
                        <img src={img3} className="landing-content__block-image"></img>
                        <h2 className="landing-content__block-title">Быстрая подача</h2>
                        <p className="landing-content__block-text">Бюджетное образовательное учреждение высшего образования в области культуры и искусства. </p>
                    </div>
                </div>
            <h1 className="landing-content__container-title-middle"></h1>
                <div className="landing-content__slider">
                    <BigSliderComponent></BigSliderComponent>
                </div>    
            <h1 className="landing-content__container-title">Процесс подачи</h1>
                <div className="landing-content__info">
                    <div className="landing-image__container">
                        <div className="landing-image__wrapper">
                            <div className="landing-image__image-wrapper">
                                <img src={img4} className="landing-image__image" />
                            </div>
                            <div className="landing-image__text">
                                <div className="landing-image__text-title">Шаг 1</div>
                                <div className="landing-image__text-content">Бюджетное образовательное учреждение высшего образования в области культуры и искусства.</div>
                            </div>
                        </div>
                        <div className="landing-image__line-wrapper">
                            <div className="landing-image__line"></div>
                        </div>
                        <div className="landing-image__wrapper">
                            <div className="landing-image__image-wrapper">
                                <img src={img5} className="landing-image__image" />
                            </div>
                            <div className="landing-image__text">
                                <div className="landing-image__text-title">Шаг 2</div>
                                <div className="landing-image__text-content">Бюджетное образовательное учреждение высшего образования в области культуры и искусства.</div>
                            </div>
                        </div>
                        <div className="landing-image__line-wrapper">
                            <div className="landing-image__line"></div>
                        </div>
                        <div className="landing-image__wrapper">
                            <div className="landing-image__image-wrapper">
                                <img src={img6} className="landing-image__image" />
                            </div>
                            <div className="landing-image__text">
                                <div className="landing-image__text-title">Шаг 3</div>
                                <div className="landing-image__text-content">Бюджетное образовательное учреждение высшего образования в области культуры и искусства.</div>
                            </div>
                        </div>
                        <div className="landing-image__line-wrapper">
                            <div className="landing-image__line"></div>
                        </div>
                        <div className="landing-image__wrapper">
                            <div className="landing-image__image-wrapper">
                                <img src={img7} className="landing-image__image" />
                            </div>
                            <div className="landing-image__text">
                                <div className="landing-image__text-title">Шаг 4</div>
                                <div className="landing-image__text-content">Бюджетное образовательное учреждение высшего образования в области культуры и искусства.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="landing-footer__registration">
                    <h1 className="landing-footer__text">Готовы присоединиться?</h1>
                    <Link to="/main/registration" className="login-form__link"><button className="landing-footer__registration-button">Зарегистрироваться</button></Link>
                </div>
        </div>
    );
}
