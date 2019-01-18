import React from 'react';
import './Header.scss';
import logo from '../assets/logo2.png';
import { Link } from "react-router-dom";
import {info} from '../assets/info-icon.svg'

export const HeaderComponent = () => {
    
    return (
        <div className="main-header">
            <div className="main-header__wrapper">
                <Link to="/info" className="main-header__info-button"><i className="material-icons header__info-icon">info</i></Link>

                <Link to="/main"><img className="main-header__wrapper-logo" src={logo} alt=""/></Link>
                <div className="main-header__links">
                    <Link to="/info" className="main-header__wrapper-button">About</Link>
                    <Link to="/info" className="main-header__wrapper-button">Projects</Link>
                    <Link to="/info" className="main-header__wrapper-button">Legal</Link>
                    <Link to="/info" className="main-header__wrapper-button">Partnerships</Link>
                </div>
                <a className="main-header__wrapper-button"><i className="material-icons search-icon">search</i></a>
                <Link to="/main/auth" className="main-header__wrapper-button-login"><i className="material-icons login-icon">exit_to_app</i><span className="main-header__login-text">Login</span></Link>
            </div>
        </div>
    );
}
