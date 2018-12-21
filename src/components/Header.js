import React from 'react';
import './Header.scss';
import logo from '../assets/logo2.png';
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
    
    return (
        <div className="main-header">
            <div className="main-header__wrapper">
                <Link to="/"><img className="main-header__wrapper-logo" src={logo} alt=""/></Link>
               
                <a className="main-header__wrapper-button">О системе</a>
                <a className="main-header__wrapper-button">Контакты</a>
                <a className="main-header__wrapper-button">
                <i className="material-icons">search</i>
                </a>
                <Link to="/auth" className="main-header__wrapper-button-login"><i className="material-icons" id="responsive-icon">exit_to_app</i>Войти</Link>
            </div>
        </div>
    );
}
