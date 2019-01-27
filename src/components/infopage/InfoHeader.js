import React from 'react';
import './InfoHeader.scss';
import logoDark from '../../assets/logo1.png';
import { Link } from "react-router-dom";

export const InfoHeaderComponent = () => {
    
    return (
        <div className="info-header">
            <div className="info-header__wrapper">
                <Link to="/main"><img className="info-header__wrapper-logo" src={logoDark} alt=""/></Link>
                <div className="info-header__links">
                    <Link to="/info" className="info-header__wrapper-button">About</Link>
                    <Link to="/info" className="info-header__wrapper-button">Projects</Link>
                    <Link to="/info" className="info-header__wrapper-button">Legal</Link>
                    <Link to="/info" className="info-header__wrapper-button">Partnerships</Link>
                </div>
                <a className="info-header__wrapper-button">
                <i className="material-icons">search</i>
                </a>
                <Link to="/main/auth" className="info-header__wrapper-button-login"><i className="material-icons" id="responsive-icon">exit_to_app</i><span className="info-header__button-text">Login</span></Link>
            </div>
        </div>
    );
}
