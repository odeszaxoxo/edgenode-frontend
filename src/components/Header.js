import React from 'react';
import './Header.scss';
import logo from '../assets/logo2.png';
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
    
    return (
        <div className="main-header">
            <div className="main-header__wrapper">
                <Link to="/info" className="main-header__info-button"><i className="material-icons header__info-icon">info</i></Link>

                <Link to="/main"><img className="main-header__wrapper-logo" src={logo} alt=""/></Link>
                <div className="main-header__links">
                    <Link to="/info" className="main-header__wrapper-button">About</Link>
                    <Link to="/info" className="main-header__wrapper-button">News</Link>
                    <Link to="/info" className="main-header__wrapper-button">Legal</Link>
                    <Link to="/info" className="main-header__wrapper-button">Partnership</Link>
                </div>
                <Link to="/search" className="main-header__wrapper-button-search">Explore</Link>
                <Link to="/main/auth" className="main-header__wrapper-button-login"><i className="material-icons login-icon">exit_to_app</i><span className="main-header__login-text">Login</span></Link>
                <Link to="/main/registration" className="main-header__wrapper-button-register"><i className="material-icons login-icon">exit_to_app</i><span className="main-header__login-text">Register</span></Link>
            </div>
        </div>
    );
}
