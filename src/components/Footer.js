import React from 'react';
import './Footer.scss';
import logo from '../assets/logo2.png';
import {Link} from 'react-router-dom';

export const FooterComponent = ({match})=> {
    
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-wrapper__logo-container">
                    <Link to="/main" className="main-footer__wrapper-button-login"><img className="footer-wrapper__logo-container-image" alt="" src={logo}/></Link>
                </div>
                <div className="footer-wrapper__links-container">
                    <Link to="/info" className="footer-wrapper__links-container-link">System</Link>
                    <Link to="/info" className="footer-wrapper__links-container-link">Contacts</Link>
                    <Link to="/info" className="footer-wrapper__links-container-link">Log in as an employee</Link>
                </div>
                <div className="footer-wrapper__contact-info-container">
                    <span className="footer-wrapper__contact-info-container-title">E-mail</span>
                    <span className="footer-wrapper__contact-info-container-text">info@edgenode.org</span>
                </div>
                <div className="footer-wrapper__contact-info-container">
                    <span className="footer-wrapper__contact-info-container-title">Hotline</span>
                    <span className="footer-wrapper__contact-info-container-text">+7(999)456-56-65</span>
                </div>
            </div>
        </div>
    );
}