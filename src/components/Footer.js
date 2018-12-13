import React from 'react';
import './Footer.css';
import logo from '../assets/logo2.png';

export const FooterComponent = ()=> {
    
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="logo-container">
                    <img className="main-footer-logo" src={logo}/>
                </div>
                <div className="links-container">
                    <a className="main-footer-link">О системе</a>
                    <a className="main-footer-link">Контакты</a>
                    <a className="main-footer-link">Войти как сотрудник</a>
                </div>
                <div className="contact-info-container">
                    <span className="contact-info-container-title">E-mail</span>
                    <span className="contact-info-text">radedu@education.com</span>
                </div>
                <div className="contact-info-container">
                    <span className="contact-info-container-title">Горячая линия</span>
                    <span className="contact-info-text">+7(999)456-56-65</span>
                </div>
            </div>
        </div>
    );
}