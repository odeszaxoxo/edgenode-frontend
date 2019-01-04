import React from 'react';
import './InfoHeader.scss';
import logoDark from '../../assets/logo1.png';
import { Link } from "react-router-dom";

export const InfoHeaderComponent = () => {
    
    return (
        <div className="info-header">
            <div className="info-header__wrapper">
                <Link to="/main"><img className="info-header__wrapper-logo" src={logoDark} alt=""/></Link>
               
                <Link to="/info" className="info-header__wrapper-button">О нас</Link>
                <Link to="/info" className="info-header__wrapper-button">Проекты</Link>
                <Link to="/info" className="info-header__wrapper-button">Регламент</Link>
                <Link to="/info" className="info-header__wrapper-button">Партнеры</Link>
                <a className="info-header__wrapper-button">
                <i className="material-icons">search</i>
                </a>
                <Link to="/main/auth" className="info-header__wrapper-button-login"><i className="material-icons" id="responsive-icon">exit_to_app</i>Войти</Link>
            </div>
        </div>
    );
}
