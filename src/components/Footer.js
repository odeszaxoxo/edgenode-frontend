import React from 'react';
import './Footer.scss';
import logo from '../assets/logo2.png';
import {Link} from 'react-router-dom';

export const FooterComponent = ({match})=> {

    console.log(match);
    
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-wrapper__logo-container">
                    <Link to="/main" className="main-footer__wrapper-button-login"><img className="footer-wrapper__logo-container-image" src={logo}/></Link>
                </div>
                <div className="footer-wrapper__links-container">
                    <a className="footer-wrapper__links-container-link">О системе</a>
                    <a className="footer-wrapper__links-container-link">Контакты</a>
                    <a className="footer-wrapper__links-container-link">Войти как сотрудник</a>
                </div>
                <div className="footer-wrapper__contact-info-container">
                    <span className="footer-wrapper__contact-info-container-title">E-mail</span>
                    <span className="footer-wrapper__contact-info-container-text">radedu@education.com</span>
                </div>
                <div className="footer-wrapper__contact-info-container">
                    <span className="footer-wrapper__contact-info-container-title">Горячая линия</span>
                    <span className="footer-wrapper__contact-info-container-text">+7(999)456-56-65</span>
                </div>
            </div>
        </div>
    );
}