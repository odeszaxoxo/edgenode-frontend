import React from 'react';
import './UniversityPage.scss';
import {Link} from 'react-router-dom';
import InfoImg from '../../assets/MSUInfo.png';


export const UniversityPageComponent = () => {
    
    return (
        <div className="university-main">
            <div className="university-main__table">

            </div>
            <div className="university-info">
                <div className="university-info__text-block">
                    <h1 className="university-info__title">Контакты университета</h1>
                    <p className="university-info__text"><i className="material-icons">place</i>ул. Ленинские Горы, 1с73, Москва, 119234</p>
                    <p className="university-info__text"><i className="material-icons">phone_iphone</i>+7 (495) 939-27-29 </p>
                    <a className="university-info__link" href="mailto:priemnayamsu@gmail.com"><i className="material-icons">mail_outline</i>priemnayamsu@gmail.com</a>
                    <a className="university-info__link" target="_blank" rel="noopener norefferer" href="https://www.msu.ru/"><i className="material-icons">language</i>msu.ru</a>
                    <button className="university-info__button">Подать заявление</button>
                </div>
                <div className="university-info__image-block">
                    <img src={InfoImg} className="university-info__image"/>
                </div>
            </div>>
        </div>
    );
}
